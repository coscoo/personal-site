#!/bin/bash
# Run this once to download company logos locally:
# chmod +x scripts/download-logos.sh && ./scripts/download-logos.sh

OUT="public/logos"
mkdir -p "$OUT"

declare -A LOGOS=(
  ["amazon"]="https://logo.clearbit.com/amazon.com"
  ["goldman-sachs"]="https://logo.clearbit.com/goldmansachs.com"
  ["jane-street"]="https://logo.clearbit.com/janestreet.com"
  ["longhorn-racing"]="https://logo.clearbit.com/longhornracing.org"
  ["texas-house"]="https://logo.clearbit.com/house.texas.gov"
  ["sugar-land"]="https://logo.clearbit.com/sugarlandtx.gov"
  ["fort-bend"]="https://logo.clearbit.com/fortbendcountytx.gov"
)

for name in "${!LOGOS[@]}"; do
  url="${LOGOS[$name]}"
  out="$OUT/$name.png"
  echo "Downloading $name..."
  curl -sL --max-time 10 "$url" -o "$out"
  # Check it's actually an image (not an error HTML page)
  if file "$out" | grep -qiE "PNG|JPEG|GIF|SVG|WebP"; then
    echo "  ✓ $name"
  else
    echo "  ✗ $name failed (will fall back to initials)"
    rm -f "$out"
  fi
done

echo "Done."
