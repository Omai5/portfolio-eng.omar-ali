#!/usr/bin/env python3
from pathlib import Path
from PIL import Image, ImageOps, ImageEnhance
import numpy as np

ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "readme-scripts" / "source-photo.jpg"
WIDTH, HEIGHT = 300, 340
PARTICLES = 18000

def photo_points(image):
    image = image.convert("RGB")
    image = image.crop((120, 40, 970, 1010)).resize((WIDTH, HEIGHT), Image.Resampling.LANCZOS)
    gray = np.array(ImageOps.grayscale(image), dtype=np.float32)
    gray = np.array(ImageEnhance.Contrast(Image.fromarray(gray.astype(np.uint8))).enhance(1.20), dtype=np.float32)
    mapped = np.clip(255.0 - (255.0 - gray) * 0.53, 0, 255).astype(np.uint8)
    dithered = Image.fromarray(mapped).convert("1", dither=Image.Dither.FLOYDSTEINBERG)
    arr = np.asarray(dithered)
    y, x = np.where(~arr)
    rng = np.random.default_rng(18000)
    if len(x) > PARTICLES:
        darkness = (255.0 - gray[y, x]) + 1.0
        weights = darkness / darkness.sum()
        idx = rng.choice(len(x), PARTICLES, replace=False, p=weights)
        x, y = x[idx], y[idx]
    else:
        extra = rng.choice(len(x), PARTICLES-len(x), replace=True)
        x = np.concatenate([x, x[extra]])
        y = np.concatenate([y, y[extra]])
    return np.column_stack([x.astype(float), y.astype(float)])

if __name__ == "__main__":
    if not SOURCE.exists():
        raise SystemExit(f"Missing {SOURCE}")
    print(f"Generated {len(photo_points(Image.open(SOURCE)))} particles at {WIDTH}x{HEIGHT}")
