import { APIRequestContext, expect } from '@playwright/test';

export type AuthPayload = { email: string; password: string };

export class AuthApiClient {
  constructor(private readonly request: APIRequestContext, private readonly baseURL: string) {}

  async register(payload: AuthPayload) {
    return this.request.post(`${this.baseURL}/register`, { data: payload });
  }

  async login(payload: AuthPayload) {
    return this.request.post(`${this.baseURL}/login`, { data: payload });
  }

  async expectJson(response: Awaited<ReturnType<APIRequestContext['post']>>, status: number, msg?: string) {
    expect(response.status()).toBe(status);
    const body = await response.json();
    if (msg !== undefined) {
      expect(body.msg).toBe(msg);
    }
    return body;
  }
}
