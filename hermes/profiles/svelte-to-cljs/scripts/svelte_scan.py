#!/usr/bin/env python3
"""svelte_scan.py — repo-wide Svelte detection for the svelte-to-cljs bot.

Scans orgs/** leaf repos of the com-junkawasaki superproject for Svelte
implementations and prints a deterministic report (stdout is injected into
the cron run as measurement, not command).

Output per candidate repo:
  repo | svelte_files | svelte_dep | screen_count | already_cljs

Exit code is always 0; the agent decides what (if anything) to do.
"""
import json
import os
import sys

ROOT = os.path.expanduser("~/github/com-junkawasaki")
ORG_SKIP = {"_salvage", "node_modules", "target", "dist", ".git"}
MANIFEST_HINTS = ("package.json",)
SVELTE_EXT = ".svelte"
MARKERS = ("svelte", "@sveltejs")


def is_hidden(name: str) -> bool:
    return name.startswith(".")


def repo_state(repo: str) -> dict:
    svelte_files = 0
    has_dep = False
    has_cljs = False
    for dirpath, dirnames, filenames in os.walk(repo):
        dirnames[:] = [d for d in dirnames
                       if d not in ORG_SKIP and not is_hidden(d)]
        for fn in filenames:
            if fn.endswith(SVELTE_EXT):
                svelte_files += 1
            if fn == "package.json":
                try:
                    with open(os.path.join(dirpath, fn), encoding="utf-8") as f:
                        pkg = json.load(f)
                except Exception:
                    continue
                deps = {}
                deps.update(pkg.get("dependencies") or {})
                deps.update(pkg.get("devDependencies") or {})
                if any(m in deps for m in MARKERS):
                    has_dep = True
            if fn.endswith((".cljs", ".cljc")):
                has_cljs = True
    return {"svelte_files": svelte_files,
            "svelte_dep": has_dep,
            "already_cljs": has_cljs}


def screen_estimate(repo: str) -> int:
    """Rough screen count: count of svelte route/page files, else files."""
    n = 0
    for dirpath, dirnames, filenames in os.walk(repo):
        dirnames[:] = [d for d in dirnames
                       if d not in ORG_SKIP and not is_hidden(d)]
        for fn in filenames:
            if fn.startswith(("+page", "+layout", "App.svelte", "index.svelte")):
                n += 1
    return n


def main() -> int:
    orgs = os.path.join(ROOT, "orgs")
    rows = []
    if not os.path.isdir(orgs):
        print("svelte_scan: orgs/ not found at", orgs)
        return 0
    for org in sorted(os.listdir(orgs)):
        org_dir = os.path.join(orgs, org)
        if not os.path.isdir(org_dir) or is_hidden(org):
            continue
        for repo in sorted(os.listdir(org_dir)):
            repo_dir = os.path.join(org_dir, repo)
            if not os.path.isdir(repo_dir) or is_hidden(repo):
                continue
            st = repo_state(repo_dir)
            if st["svelte_files"] == 0 and not st["svelte_dep"]:
                continue
            row = dict(st)
            row["repo"] = f"orgs/{org}/{repo}"
            row["screen_count"] = screen_estimate(repo_dir) or st["svelte_files"]
            rows.append(row)
    # priority: fewer screens first, then repo name
    rows.sort(key=lambda r: (r["screen_count"], r["repo"]))
    print(f"svelte_scan: {len(rows)} candidate repo(s)")
    for r in rows:
        print("  {repo} | svelte_files={svelte_files} svelte_dep={svelte_dep} "
              "screen_count={screen_count} already_cljs={already_cljs}".format(**r))
    return 0


if __name__ == "__main__":
    sys.exit(main())
