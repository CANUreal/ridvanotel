#!/usr/bin/env bash
# GitHub'da boş "ridvan-otel" reposu oluşturduktan sonra:
#   ./scripts/github-remote.sh KULLANICI_ADIN
set -euo pipefail
cd "$(dirname "$0")/.."

USER="${1:?GitHub kullanıcı adı gerekli: ./scripts/github-remote.sh kullanici}"

if git remote get-url origin &>/dev/null; then
  git remote set-url origin "https://github.com/${USER}/ridvan-otel.git"
else
  git remote add origin "https://github.com/${USER}/ridvan-otel.git"
fi

echo "Remote: $(git remote get-url origin)"
echo "Push: git push -u origin main"
