---
name: dedalus-cli-sdk
description: "CLI SDK for Dedalus API. Use when writing CLI code that calls Dedalus API with the dedalus-cli package: installing it, constructing and authenticating the client, and calling API operations."
---

# Dedalus CLI SDK

Generated CLI client for Dedalus API, published as `dedalus-cli`. Use the generated client instead of hand-writing HTTP requests.

## Install

```sh
# Install script — standalone binary for macOS and Linux, no Node.js required
curl -fsSL https://github.com/amritk/dev-cli/releases/latest/download/install.sh | bash
# Installs into ~/.local/bin; set DEVCLI_INSTALL_DIR to choose another directory

# Direct download — standalone binary, no Node.js required
curl -fsSL "https://github.com/amritk/dev-cli/releases/latest/download/devcli-$(uname -s | tr '[:upper:]' '[:lower:]')-$(uname -m | sed 's/x86_64/x64/;s/aarch64/arm64/').tar.gz" | tar xz devcli
sudo mv devcli /usr/local/bin/

# Windows — download and extract devcli-windows-x64.zip, then add it to PATH
# https://github.com/amritk/dev-cli/releases/latest/download/devcli-windows-x64.zip
```

## Client setup and authentication

Provide credentials using the options below. Environment variables are read automatically when the target runtime supports them:

- `--api-key` (env: `DEDALUS_API_KEY`) — Dedalus API key in Authorization: Bearer <key>.
- `--x-api-key` (env: `DEDALUS_X_API_KEY`) — Dedalus API key. Alternative to Bearer token.

## Calling operations

```sh
devcli [resource] [command] [flags]

devcli machines create \
  --api-key "$DEDALUS_API_KEY" \
  --memory-mib '2048' \
  --storage-gib '10' \
  --vcpu '1'
```

Method names, parameter shapes, and response types are generated from the API description — do not guess them. Look up the exact call signature in [api.md](./api.md) before writing a call.

## Pagination

Paginated commands fetch subsequent pages for you. Use `--max-items <count>` to cap the total number of items returned.

## Streaming

Streaming commands emit one result per line as the server sends it. Use `--max-items <count>` to stop after N items.

## WebSockets

WebSocket commands stay connected and stream messages. Use `--send <json>` to send a message (or pipe JSON/YAML on stdin) and `--max-items <count>` to bound output.

## Error handling

Failed requests print a structured error to standard error and exit with a status that identifies the failure class. The error body carries the API's own `message` plus a stable `code`, the HTTP `status`, the `requestId`, and — where one applies — an actionable `hint`. Usage errors (exit `2`) are reported as a plain message instead, since no request was made. Exit statuses: `0` success, `1` `error`, `2` `usage`, `10` `auth-failed`, `11` `not-found`, `12` `rate-limited`, `13` `client-error`, `14` `server-error`, `15` `connection-error`.

## Working with this SDK programmatically

- Pass `--format toon` for token-efficient structured output: a uniform list collapses into one header plus a row per item, with a definitive `[N]` count. Use `--format json` when the output is fed to a JSON parser.
- Use `--max-items <count>` to bound paginated, streaming, and WebSocket commands before they fill the context, and `--transform <dot.path>` to keep only the field you need.
- Endpoint commands never prompt, so they are safe to run non-interactively. Credentials come from the documented environment variables or their flags. `login` is meant for a human at a terminal, so do not drive it: a flow that reads a credential refuses a non-terminal stdin outright, and a browser or device flow waits for a person to finish signing in elsewhere before it gives up. Set the credential through its environment variable or flag instead.
- Branch on the exit status rather than on stderr text: `0` success, `1` `error`, `2` `usage`, `10` `auth-failed`, `11` `not-found`, `12` `rate-limited`, `13` `client-error`, `14` `server-error`, `15` `connection-error`. A failed request repeats its class on stderr as a stable `code`, with a `hint` when there is a concrete next step; exit `2` is a plain message with no structured body, because the command never ran.
- Run `devcli --help` or `devcli <resource> --help` to discover commands and flags, and `man devcli` for the full reference.

## Requirements

- None — the standalone binaries bundle their own runtime.

## Reference files

- [README.md](./README.md) — full feature tour: client options, retries and timeouts, logging.
- [api.md](./api.md) — complete catalogue of every operation with request and response types.
