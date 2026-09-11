---
name: demo-api-scalar-galaxy-cli-sdk
description: "CLI SDK for Demo API (Scalar Galaxy). Use when writing CLI code that calls Demo API (Scalar Galaxy) with the demo-api-scalar-galaxy-cli package: installing it, constructing and authenticating the client, and calling API operations."
---

# Demo API (Scalar Galaxy) CLI SDK

Generated CLI client for Demo API (Scalar Galaxy), published as `demo-api-scalar-galaxy-cli`. Use the generated client instead of hand-writing HTTP requests.

## Install

```sh
# npm (requires Node.js)
npm install -g demo-api-scalar-galaxy-cli
```

## Client setup and authentication

Provide credentials using the options below. Environment variables are read automatically when the target runtime supports them:

- `--bearer-auth` (env: `BEARER_AUTH`) — JWT Bearer token authentication
- `--basic-auth-username` (env: `BASIC_AUTH_USERNAME`) — Basic HTTP authentication
- `--basic-auth-password` (env: `BASIC_AUTH_PASSWORD`) — Basic HTTP authentication
- `--api-key-header` (env: `API_KEY_HEADER`) — API key request header
- `--api-key-query` (env: `API_KEY_QUERY`) — API key query parameter
- `--api-key-cookie` (env: `API_KEY_COOKIE`) — API key browser cookie
- `--o-auth2` (env: `O_AUTH2`) — OAuth 2.0 authentication
- `--open-id-connect` (env: `OPEN_ID_CONNECT`) — OpenID Connect Authentication

## Calling operations

```sh
demoapiscalargalaxy [resource] [command] [flags]

demoapiscalargalaxy planets list --bearer-auth "$BEARER_AUTH" --limit '10' --offset '0'
```

Method names, parameter shapes, and response types are generated from the API description — do not guess them. Look up the exact call signature in [api.md](../../../api.md) before writing a call.

## Error handling

Failed requests print a structured error to standard error and exit with a status that identifies the failure class. The error body carries the API's own `message` plus a stable `code`, the HTTP `status`, the `requestId`, and — where one applies — an actionable `hint`. Usage errors (exit `2`) are reported as a plain message instead, since no request was made. Exit statuses: `0` success, `1` `error`, `2` `usage`, `10` `auth-failed`, `11` `not-found`, `12` `rate-limited`, `13` `client-error`, `14` `server-error`, `15` `connection-error`.

## Working with this SDK programmatically

- Pass `--format toon` for token-efficient structured output: a uniform list collapses into one header plus a row per item, with a definitive `[N]` count. Use `--format json` when the output is fed to a JSON parser.
- Use `--max-items <count>` to bound paginated, streaming, and WebSocket commands before they fill the context, and `--transform <dot.path>` to keep only the field you need.
- Commands never prompt, so they are safe to run non-interactively. Credentials come from the documented environment variables or their flags.
- Branch on the exit status rather than on stderr text: `0` success, `1` `error`, `2` `usage`, `10` `auth-failed`, `11` `not-found`, `12` `rate-limited`, `13` `client-error`, `14` `server-error`, `15` `connection-error`. A failed request repeats its class on stderr as a stable `code`, with a `hint` when there is a concrete next step; exit `2` is a plain message with no structured body, because the command never ran.
- Run `demoapiscalargalaxy --help` or `demoapiscalargalaxy <resource> --help` to discover commands and flags, and `man demoapiscalargalaxy` for the full reference.

## Requirements

- Node.js 20 or newer

## Reference files

- [README.md](../../../README.md) — full feature tour: client options, retries and timeouts, logging.
- [api.md](../../../api.md) — complete catalogue of every operation with request and response types.
