#!/bin/sh
# Voca installer — detects platform and downloads the latest release.
# Usage: curl -fsSL voca.riteshrana.engineer/install.sh | sh

set -e

# ─── Config ───
REPO="ambicuity/voca"
INSTALL_DIR="/usr/local/bin"
BINARY_NAME="voca"

# ─── Colors ───
RED='\033[0;31m'
GREEN='\033[0;32m'
BLUE='\033[0;34m'
DIM='\033[2m'
BOLD='\033[1m'
NC='\033[0m'

info()  { printf "${BLUE}→${NC} %s\n" "$1"; }
ok()    { printf "${GREEN}✓${NC} %s\n" "$1"; }
err()   { printf "${RED}✗ Error:${NC} %s\n" "$1" >&2; exit 1; }

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
info "Detected platform: ${BOLD}${SUFFIX}${NC}"

# ─── Check dependencies ───
command -v curl  >/dev/null 2>&1 || err "curl is required but not found"
command -v tar   >/dev/null 2>&1 || err "tar is required but not found"

# ─── Get latest release ───
info "Fetching latest release from github.com/${REPO}..."

LATEST=$(curl -fsSL "https://api.github.com/repos/${REPO}/releases/latest" 2>/dev/null | \
  grep '"tag_name"' | head -1 | sed 's/.*"tag_name": *"\([^"]*\)".*/\1/')

if [ -z "$LATEST" ]; then
  err "Could not determine latest release. Check https://github.com/${REPO}/releases"
fi

info "Latest version: ${BOLD}${LATEST}${NC}"

# ─── Download ───
FILENAME="voca-${LATEST}-${SUFFIX}.tar.gz"
URL="https://github.com/${REPO}/releases/download/${LATEST}/${FILENAME}"
info "Downloading ${FILENAME}..."

TMPDIR=$(mktemp -d)
trap 'rm -rf "$TMPDIR"' EXIT

HTTP_CODE=$(curl -fsSL -w "%{http_code}" "$URL" -o "${TMPDIR}/${FILENAME}" 2>/dev/null) || true

if [ "$HTTP_CODE" != "200" ] && [ ! -s "${TMPDIR}/${FILENAME}" ]; then
  err "Download failed (HTTP ${HTTP_CODE}). URL: ${URL}"
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

if [ -w "$INSTALL_DIR" ]; then
  mv voca "${INSTALL_DIR}/${BINARY_NAME}"
else
  sudo mv voca "${INSTALL_DIR}/${BINARY_NAME}"
fi

chmod +x "${INSTALL_DIR}/${BINARY_NAME}"

# ─── Verify ───
INSTALLED_VERSION=$("${INSTALL_DIR}/${BINARY_NAME}" --version 2>/dev/null | head -1) || true

echo ""
ok "${BOLD}Voca ${LATEST}${NC} installed successfully!"
echo ""
printf "  ${DIM}Location:${NC}  %s\n" "${INSTALL_DIR}/${BINARY_NAME}"
if [ -n "$INSTALLED_VERSION" ]; then
  printf "  ${DIM}Version:${NC}   %s\n" "$INSTALLED_VERSION"
fi
echo ""
printf "  Run ${BOLD}voca --version${NC} to verify.\n"
echo ""
