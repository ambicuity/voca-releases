#!/bin/sh
# Voca installer — detects your platform and downloads the latest release.
# Usage: curl -fsSL voca.riteshrana.engineer/install.sh | sh

set -e

REPO="ambicuity/voca-releases"
INSTALL_DIR="/usr/local/bin"

# Detect OS and architecture
OS="$(uname -s | tr '[:upper:]' '[:lower:]')"
ARCH="$(uname -m)"

case "$OS" in
  linux)  PLATFORM="linux" ;;
  darwin) PLATFORM="macos" ;;
  *) echo "Error: Unsupported OS: $OS" >&2; exit 1 ;;
esac

case "$ARCH" in
  x86_64|amd64)  ARCH_TAG="x86_64" ;;
  aarch64|arm64) ARCH_TAG="arm64" ;;
  *) echo "Error: Unsupported architecture: $ARCH" >&2; exit 1 ;;
esac

SUFFIX="${PLATFORM}-${ARCH_TAG}"
echo "→ Detected platform: ${SUFFIX}"

# Get latest release tag
echo "→ Fetching latest release..."
LATEST=$(curl -fsSL "https://api.github.com/repos/${REPO}/releases/latest" | grep '"tag_name"' | head -1 | sed 's/.*"tag_name": *"\([^"]*\)".*/\1/')
if [ -z "$LATEST" ]; then
  echo "Error: Could not determine latest release" >&2
  exit 1
fi
echo "→ Latest version: ${LATEST}"

# Download
FILENAME="voca-${LATEST}-${SUFFIX}.tar.gz"
URL="https://github.com/${REPO}/releases/download/${LATEST}/${FILENAME}"
echo "→ Downloading ${FILENAME}..."

TMPDIR=$(mktemp -d)
trap 'rm -rf "$TMPDIR"' EXIT

curl -fsSL "$URL" -o "${TMPDIR}/${FILENAME}"

# Extract
echo "→ Installing to ${INSTALL_DIR}..."
cd "$TMPDIR"
tar xzf "$FILENAME"

# Install
if [ -w "$INSTALL_DIR" ]; then
  mv voca "$INSTALL_DIR/voca"
else
  sudo mv voca "$INSTALL_DIR/voca"
fi

chmod +x "${INSTALL_DIR}/voca"

echo ""
echo "✓ Voca ${LATEST} installed successfully!"
echo "  Run 'voca --version' to verify."
