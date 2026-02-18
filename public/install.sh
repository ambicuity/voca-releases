#!/bin/sh
# Voca installer — detects platform and downloads the latest release.
# Usage: curl -fsSL voca.riteshrana.engineer/install.sh | sh

set -e

# ─── Config ───
REPO="ambicuity/voca-releases"
INSTALL_DIR="/usr/local/bin"
BINARY_NAME="voca"

# ─── Formatting helpers ───
info()  { printf "\033[0;34m→\033[0m %s\n" "$1"; }
ok()    { printf "\033[0;32m✓\033[0m %s\n" "$1"; }
warn()  { printf "\033[0;33m!\033[0m %s\n" "$1"; }
err()   { printf "\033[0;31m✗ Error:\033[0m %s\n" "$1" >&2; exit 1; }
bold()  { printf "\033[1m%s\033[0m" "$1"; }

# ─── Help ───
if [ "$1" = "--help" ] || [ "$1" = "-h" ]; then
  cat <<EOF
Voca Installer

Usage:
  curl -fsSL voca.riteshrana.engineer/install.sh | sh
  curl -fsSL voca.riteshrana.engineer/install.sh | sh -s -- --dir /opt/bin

Options:
  --dir DIR     Install to DIR instead of /usr/local/bin
  --help, -h    Show this help

EOF
  exit 0
fi

# ─── Parse args ───
while [ $# -gt 0 ]; do
  case "$1" in
    --dir) INSTALL_DIR="$2"; shift 2 ;;
    *) shift ;;
  esac
done

# ─── Detect OS ───
OS="$(uname -s | tr '[:upper:]' '[:lower:]')"
ARCH="$(uname -m)"

case "$OS" in
  linux)  PLATFORM="linux" ;;
  darwin) PLATFORM="macos" ;;
  *)      err "Unsupported OS: $OS (only linux and macOS are supported)" ;;
esac

case "$ARCH" in
  x86_64|amd64)  ARCH_TAG="x86_64" ;;
  aarch64|arm64) ARCH_TAG="arm64" ;;
  *)             err "Unsupported architecture: $ARCH" ;;
esac

SUFFIX="${PLATFORM}-${ARCH_TAG}"
info "Detected platform: $(bold "$SUFFIX")"

# ─── Check dependencies ───
command -v curl  >/dev/null 2>&1 || err "curl is required but not found"
command -v tar   >/dev/null 2>&1 || err "tar is required but not found"

# ─── Get latest release ───
info "Fetching latest release from github.com/${REPO}..."

API_RESPONSE=$(curl -fsSL "https://api.github.com/repos/${REPO}/releases/latest" 2>/dev/null) || true

if [ -z "$API_RESPONSE" ]; then
  err "Could not reach GitHub API. Check your internet connection."
fi

LATEST=$(echo "$API_RESPONSE" | grep '"tag_name"' | head -1 | sed 's/.*"tag_name": *"\([^"]*\)".*/\1/')

if [ -z "$LATEST" ]; then
  # Check if the API returned an error message
  API_MSG=$(echo "$API_RESPONSE" | grep '"message"' | head -1 | sed 's/.*"message": *"\([^"]*\)".*/\1/')
  if [ -n "$API_MSG" ]; then
    err "GitHub API: ${API_MSG}. Visit https://github.com/${REPO}/releases"
  fi
  err "Could not determine latest release. Visit https://github.com/${REPO}/releases"
fi

info "Latest version: $(bold "$LATEST")"

# ─── Download ───
FILENAME="voca-${LATEST}-${SUFFIX}.tar.gz"
URL="https://github.com/${REPO}/releases/download/${LATEST}/${FILENAME}"
info "Downloading ${FILENAME}..."

TMPDIR=$(mktemp -d)
trap 'rm -rf "$TMPDIR"' EXIT

if ! curl -fSL --progress-bar "$URL" -o "${TMPDIR}/${FILENAME}" 2>/dev/null; then
  err "Download failed. The binary may not be available for ${SUFFIX}. Check: ${URL}"
fi

# ─── Extract ───
info "Extracting..."
cd "$TMPDIR"
tar xzf "$FILENAME"

if [ ! -f "voca" ]; then
  err "Binary 'voca' not found in archive"
fi

# ─── Install ───
info "Installing to ${INSTALL_DIR}..."

# Create install dir if it doesn't exist
if [ ! -d "$INSTALL_DIR" ]; then
  sudo mkdir -p "$INSTALL_DIR"
fi

if [ -w "$INSTALL_DIR" ]; then
  mv voca "${INSTALL_DIR}/${BINARY_NAME}"
else
  sudo mv voca "${INSTALL_DIR}/${BINARY_NAME}"
fi

chmod +x "${INSTALL_DIR}/${BINARY_NAME}"

# ─── Verify ───
INSTALLED_VERSION=$("${INSTALL_DIR}/${BINARY_NAME}" --version 2>/dev/null | head -1) || true

echo ""
ok "Voca $(bold "$LATEST") installed successfully!"
echo ""
printf "  \033[2mLocation:\033[0m  %s\n" "${INSTALL_DIR}/${BINARY_NAME}"
if [ -n "$INSTALLED_VERSION" ]; then
  printf "  \033[2mVersion:\033[0m   %s\n" "$INSTALLED_VERSION"
fi
echo ""
printf "  Run \033[1mvoca --version\033[0m to verify.\n"
echo ""
