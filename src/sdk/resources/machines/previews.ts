// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../../resource';
import { APIPromise } from '../../api-promise';
import { CursorPage, type CursorPageParams, type PagePromise } from '../../core/pagination';
import type { RequestOptions } from '../../internal/request-options';
import { path as __scalarPath } from '../../internal/utils/path';

export class Previews extends APIResource {
  /**
   * List previews
   *
   * @param {PreviewListParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {PagePromise<PreviewsCursorPage, Preview>} OK
   *
   * @example
   * ```ts
   * const page = await client.machines.previews.list({
   *   machine_id: 'machineID',
   * });
   * ```
   */
  list(params: PreviewListParams, options?: RequestOptions): PagePromise<PreviewsCursorPage, Preview> {
    const { machine_id, ...query } = params;
    return this._client.getAPIList(__scalarPath`/v1/machines/${machine_id}/previews`, CursorPage<Preview>, {
      query,
      ...options,
    });
  }

  /**
   * Create preview
   *
   * @param {PreviewCreateParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<Preview>} OK
   *
   * @example
   * ```ts
   * const preview = await client.machines.previews.create({
   *   machine_id: 'machineID',
   *   port: 0,
   * });
   * ```
   */
  create(params: PreviewCreateParams, options?: RequestOptions): APIPromise<Preview> {
    const { machine_id, ...body } = params;
    return this._client.post(__scalarPath`/v1/machines/${machine_id}/previews`, { body, ...options });
  }

  /**
   * Get preview
   *
   * @param {PreviewRetrieveParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<Preview>} OK
   *
   * @example
   * ```ts
   * const preview = await client.machines.previews.retrieve({
   *   machine_id: 'machineID',
   *   preview_id: 'previewID',
   * });
   * ```
   */
  retrieve(params: PreviewRetrieveParams, options?: RequestOptions): APIPromise<Preview> {
    const { machine_id, preview_id } = params;
    return this._client.get(__scalarPath`/v1/machines/${machine_id}/previews/${preview_id}`, options);
  }

  /**
   * Delete preview
   *
   * @param {PreviewDeleteParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<Preview>} OK
   *
   * @example
   * ```ts
   * const preview = await client.machines.previews.delete({
   *   machine_id: 'machineID',
   *   preview_id: 'previewID',
   * });
   * ```
   */
  delete(params: PreviewDeleteParams, options?: RequestOptions): APIPromise<Preview> {
    const { machine_id, preview_id } = params;
    return this._client.delete(__scalarPath`/v1/machines/${machine_id}/previews/${preview_id}`, options);
  }
}

export interface PreviewCreateParams {
  /**
   * @format int64
   */
  port: number;
  protocol?: 'http' | 'https';
  visibility?: 'public' | 'private' | 'org';
}

export interface Preview {
  /**
   * @format date-time
   */
  created_at: string;
  machine_id: string;
  /**
   * @format int64
   */
  port: number;
  preview_id: string;
  status: 'wake_in_progress' | 'ready' | 'closed' | 'expired' | 'failed';
  visibility: 'public' | 'private' | 'org';
  error_code?: string;
  error_message?: string;
  /**
   * @format date-time
   */
  expires_at?: string;
  protocol?: 'http' | 'https';
  /**
   * @format date-time
   */
  ready_at?: string;
  /**
   * @format int64
   */
  retry_after_ms?: number;
  url?: string;
}

export interface PreviewList {
  items: Array<Preview> | null;
  next_cursor?: string;
}

export interface PreviewListParams extends CursorPageParams {
  /**
   * @minLength 4
   * @maxLength 253
   * @pattern ^dm-[a-z0-9]([a-z0-9-]*[a-z0-9])?$
   */
  machine_id: string;
}

export type PreviewsCursorPage = CursorPage<Preview>;

export interface PreviewCreateParams {
  /**
   * Path param
   * @minLength 4
   * @maxLength 253
   * @pattern ^dm-[a-z0-9]([a-z0-9-]*[a-z0-9])?$
   */
  machine_id: string;
  /**
   * Body param
   * @format int64
   */
  port: number;
  /**
   * Body param
   */
  protocol?: 'http' | 'https';
  /**
   * Body param
   */
  visibility?: 'public' | 'private' | 'org';
}

export interface PreviewRetrieveParams {
  /**
   * @minLength 4
   * @maxLength 253
   * @pattern ^dm-[a-z0-9]([a-z0-9-]*[a-z0-9])?$
   */
  machine_id: string;
  /**
   * @minLength 1
   * @maxLength 253
   * @pattern ^[A-Za-z0-9]([A-Za-z0-9._-]*[A-Za-z0-9])?$
   */
  preview_id: string;
}

export interface PreviewDeleteParams {
  /**
   * @minLength 4
   * @maxLength 253
   * @pattern ^dm-[a-z0-9]([a-z0-9-]*[a-z0-9])?$
   */
  machine_id: string;
  /**
   * @minLength 1
   * @maxLength 253
   * @pattern ^[A-Za-z0-9]([A-Za-z0-9._-]*[A-Za-z0-9])?$
   */
  preview_id: string;
}
export declare namespace Previews {
  export {
    type PreviewCreateParams as PreviewCreateParams,
    type Preview as Preview,
    type PreviewList as PreviewList,
    type PreviewsCursorPage as PreviewsCursorPage,
    type PreviewListParams as PreviewListParams,
    type PreviewRetrieveParams as PreviewRetrieveParams,
    type PreviewDeleteParams as PreviewDeleteParams,
  };
}
