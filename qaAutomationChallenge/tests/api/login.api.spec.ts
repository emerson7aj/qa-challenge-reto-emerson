import { test } from '@playwright/test';
import { AuthApiClient } from '../../src/api/AuthApiClient';
import { apiBaseUrl } from '../../src/config/env';

test.describe('API — Login (casos críticos Reto 1)', () => {
  test('TC-07 login con credenciales inválidas debe rechazar', async ({ request }) => {
    const api = new AuthApiClient(request, apiBaseUrl);
    const response = await api.login({ email: 'noexiste@utp.test', password: 'wrongpass' });
    await api.expectJson(response, 401, 'INVALID');
  });

  test('TC-08 email sin @ en login debe retornar INVALID', async ({ request }) => {
    const api = new AuthApiClient(request, apiBaseUrl);
    const response = await api.login({ email: 'sinarroba', password: '123456' });
    await api.expectJson(response, 422, 'INVALID');
  });

  test('TC-09 contraseña menor a 5 en login debe retornar INVALID', async ({ request }) => {
    const api = new AuthApiClient(request, apiBaseUrl);
    const response = await api.login({ email: 'user@utp.test', password: '123' });
    await api.expectJson(response, 422, 'INVALID');
  });

  test('TC-02b campos vacíos retornan REQUIRED', async ({ request }) => {
    const api = new AuthApiClient(request, apiBaseUrl);
    const response = await api.login({ email: '', password: '' });
    await api.expectJson(response, 422, 'REQUIRED');
  });
});
