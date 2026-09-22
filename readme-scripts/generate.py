#!/usr/bin/env python3
import json
import os
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
ASSETS = ROOT / "assets"
CONFIG = json.loads((ROOT / "readme-scripts/config.json").read_text())
TOKEN = os.getenv("GITHUB_TOKEN", "")
USER = CONFIG["username"]


def api(path):
    req = urllib.request.Request(f"https://api.github.com{path}")
    req.add_header("Accept", "application/vnd.github+json")
    if TOKEN:
        req.add_header("Authorization", f"Bearer {TOKEN}")
    with urllib.request.urlopen(req, timeout=20) as r:
        return json.load(r)


def esc(s):
    return str(s).replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")


def card(dark=True):
    bg = "#0d1117" if dark else "#ffffff"
    fg = "#f0f6fc" if dark else "#24292f"
    muted = "#8b949e" if dark else "#57606a"
    border = "#30363d" if dark else "#d0d7de"
    accent = "#aa9bef"
    try:
        profile = api(f"/users/{USER}")
        repos = api(f"/users/{USER}/repos?per_page=100&type=owner")
        stars = sum(r.get("stargazers_count", 0) for r in repos)
        forks = sum(r.get("forks_count", 0) for r in repos)
        followers = profile.get("followers", 0)
        public_repos = profile.get("public_repos", 0)
    except Exception:
        stars = forks = followers = public_repos = 0
    return f'''<svg xmlns="http://www.w3.org/2000/svg" width="900" height="300" viewBox="0 0 900 300">
<rect x="2" y="2" width="896" height="296" rx="22" fill="{bg}" stroke="{border}" stroke-width="2"/>
<text x="48" y="58" fill="{fg}" font-family="JetBrains Mono,monospace" font-size="28" font-weight="700">GITHUB.SIGNALS</text>
<text x="48" y="92" fill="{muted}" font-family="JetBrains Mono,monospace" font-size="16">@{esc(USER)} · generated from GitHub</text>
<line x1="48" y1="118" x2="852" y2="118" stroke="{border}"/>
<g font-family="JetBrains Mono,monospace">
<text x="72" y="170" fill="{muted}" font-size="16">PUBLIC REPOS</text><text x="72" y="208" fill="{accent}" font-size="32" font-weight="700">{public_repos}</text>
<text x="300" y="170" fill="{muted}" font-size="16">STARS</text><text x="300" y="208" fill="{accent}" font-size="32" font-weight="700">{stars}</text>
<text x="500" y="170" fill="{muted}" font-size="16">FORKS</text><text x="500" y="208" fill="{accent}" font-size="32" font-weight="700">{forks}</text>
<text x="690" y="170" fill="{muted}" font-size="16">FOLLOWERS</text><text x="690" y="208" fill="{accent}" font-size="32" font-weight="700">{followers}</text>
</g>
<text x="48" y="258" fill="{muted}" font-family="JetBrains Mono,monospace" font-size="14">PROFILE.SH · LIVE DATA</text>
</svg>'''

for name, dark in [("readme-card-stats-dark.svg", True), ("readme-card-stats-light.svg", False)]:
    (ASSETS / name).write_text(card(dark))
