<div align="center">
  
  ![Voca Banner](https://voca.riteshrana.engineer/banner.png)

  <h1>Voca</h1>
  
  <p>
    <strong>The modern, recursive downloader for the distributed web.</strong>
  </p>

  <p>
    <a href="https://voca.riteshrana.engineer"><strong>Website</strong></a> ·
    <a href="https://voca.riteshrana.engineer/docs"><strong>Documentation</strong></a> ·
    <a href="https://github.com/ambicuity/voca-releases/releases"><strong>Releases</strong></a>
  </p>

  <p>
    <a href="https://github.com/ambicuity/voca-releases/blob/main/LICENSE">
      <img src="https://img.shields.io/badge/license-Voca_Proprietary-blue.svg?style=flat-square" alt="License" />
    </a>
    <a href="https://github.com/ambicuity/voca-releases/releases">
      <img src="https://img.shields.io/github/v/release/ambicuity/voca-releases?style=flat-square&color=blue" alt="Release" />
    </a>
  </p>

  <br />

</div>

## Why Voca?

Voca is built for speed, resilience, and simplicity. It replaces legacy tools like `wget` with a modern, zero-dependency binary that mirrors the web faster and more reliably.

| Feature | Voca 🚀 | Wget 🐢 |
| :--- | :--- | :--- |
| **Binary Size** | **~200KB** (Static) | ~4MB (Dynamic) |
| **Dependencies** | **Zero** (Self-contained) | OpenSSL, Libidn, etc. |
| **Recursive Engine** | **Smart & Fast** | Complex & Slow |
| **Security** | **Strict SSL/TLS** (Default) | Permissive |
| **Platform** | **Linux, macOS, Windows** | Linux-first |

## Installation

Install the latest version with a single command:

```bash
curl -fsSL voca.riteshrana.engineer/install.sh | sh
```

Or verify the signature (recommended):

```bash
curl -fsSL voca.riteshrana.engineer/install.sh | sh -s -- --verify
```

## Quick Start

Download a single file:
```bash
voca https://example.com/file.zip
```

Recursively mirror a website:
```bash
voca --recursive https://example.com
```

Ignore SSL errors (if you must):
```bash
voca --no-check-certificate https://internal.dev
```

## Support

If Voca saves you time, consider supporting its development.

<a href="https://buymeacoffee.com/ritesh.rana">
  <img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" width="150" />
</a>

## License

Copyright © 2025-2026 Ritesh Rana.
This project is licensed under the **Voca Proprietary Software License**.
See the [LICENSE](LICENSE) file for the full terms.

---
<div align="center">
  <sub>Designed for Velocity.</sub>
</div>
