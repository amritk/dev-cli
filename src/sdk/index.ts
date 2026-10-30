// File generated from our OpenAPI spec by Scalar. See README.md for details.

export { Dedalus as default } from './client';

export { type Uploadable, toFile } from './core/uploads';
export { APIPromise } from './api-promise';
export { PagePromise } from './core/pagination';
export { Dedalus, type ClientOptions, type AuthTokenProvider } from './client';
export {
  DedalusError,
  APIError,
  APIConnectionError,
  APIConnectionTimeoutError,
  APIUserAbortError,
  NotFoundError,
  ConflictError,
  RateLimitError,
  BadRequestError,
  AuthenticationError,
  InternalServerError,
  PermissionDeniedError,
  UnprocessableEntityError,
} from './error';
