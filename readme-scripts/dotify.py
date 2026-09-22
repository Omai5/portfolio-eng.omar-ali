#!/usr/bin/env python3
"""
Generate the animated particle visual used by the GitHub profile README.

Expected local input:
  readme-scripts/source-photo.jpg

The source photo is intentionally not included in the repository package.
The generated README asset is:
  readme-assets/readme-visual-map.gif
"""
from pathlib import Path
import numpy as np
from PIL import Image, ImageEnhance, ImageOps, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "readme-scripts" / "source-photo.jpg"
OUTPUT = ROOT / "readme-assets" / "readme-visual-map.gif"

WIDTH, HEIGHT = 300, 340
PARTICLES = 18000
BACKGROUND = (7, 15, 28)

def load_source():
    image = Image.open(SOURCE).convert("RGB")
    image = image.crop((0, 0, image.width, min(image.height, int(image.width * 1.45))))
    return image.resize((WIDTH, HEIGHT), Image.Resampling.LANCZOS)

def sample_particles(image, seed=42):
    rng = np.random.default_rng(seed)
    gray = ImageOps.grayscale(image)
    gray = ImageEnhance.Contrast(gray).enhance(1.7)
    a = np.asarray(gray).astype(np.float32) / 255.0
    density = np.clip((1.0 - a - 0.10) / 0.90, 0, 1) ** 1.3

    y = np.linspace(0, 1, HEIGHT)[:, None]
    density *= np.where(y < 0.72, 1.0, np.clip(1 - (y - 0.72) / 0.28, 0.18, 1))

    x = np.linspace(0, 1, WIDTH)[None, :]
    face = np.exp(-(((x - 0.5) / 0.32) ** 2 + ((y - 0.40) / 0.32) ** 2))
    density = np.clip(density * (1 + 0.45 * face), 0, 1)

    p = density.ravel()
    p /= p.sum()
    ids = rng.choice(WIDTH * HEIGHT, size=PARTICLES, p=p)
    py, px = ids // WIDTH, ids % WIDTH
    points = np.column_stack([
        px + rng.uniform(-0.45, 0.45, PARTICLES),
        py + rng.uniform(-0.45, 0.45, PARTICLES),
    ])
    return points

def code_particles(seed=42):
    rng = np.random.default_rng(seed)
    mask = Image.new("L", (WIDTH, HEIGHT), 0)
    draw = ImageDraw.Draw(mask)
    font_path = "/usr/share/fonts/truetype/dejavu/DejaVuSansMono-Bold.ttf"
    font = ImageFont.truetype(font_path, 220)
    text = "</>"
    box = draw.textbbox((0, 0), text, font=font)
    tw, th = box[2] - box[0], box[3] - box[1]
    draw.text(((WIDTH - tw) // 2, (HEIGHT - th) // 2 - 10), text, fill=255, font=font)

    p = (np.asarray(mask).astype(float) / 255).ravel()
    p /= p.sum()
    ids = rng.choice(WIDTH * HEIGHT, size=PARTICLES, p=p)
    py, px = ids // WIDTH, ids % WIDTH
    target = np.column_stack([
        px + rng.uniform(-0.5, 0.5, PARTICLES),
        py + rng.uniform(-0.5, 0.5, PARTICLES),
    ])
    return target[rng.permutation(PARTICLES)]

def main():
    # The profile asset is pre-rendered in the distributed package.
    # This script is a local regeneration reference and intentionally
    # does not run automatically in GitHub Actions.
    if not SOURCE.exists():
        raise SystemExit(f"Missing source photo: {SOURCE}")
    print("Source found. Add your preferred renderer here or use the packaged asset.")

if __name__ == "__main__":
    main()
