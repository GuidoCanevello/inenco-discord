import { ofetch, type FetchOptions, type FetchRequest } from 'ofetch';

const API_BASE = process.env.NUXT_PUBLIC_API_BASE || 'http://localhost:3000';

/**
 * Calls ofetch to make a request to the API
 * 
 * @param request The API to call (e.g. /users)
 * @param options The FetchOptions to pass to ofetch
 */
export default async function (request: FetchRequest, options?: FetchOptions): Promise<any> {
    return await ofetch(API_BASE + "/api" + request, options);
}
