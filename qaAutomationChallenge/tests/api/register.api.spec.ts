import { test } from '@playwright/test';
import { AuthApiClient } from '../../src/api/AuthApiClient';
import { apiBaseUrl } from '../../src/config/env';

test.describe('API — Registro (casos críticos Reto 1)', () => {
  test('TC-01 registro exitoso con email válido y contraseña ≥5', async ({ request }) => {
    const api = new AuthApiClient(request, apiBaseUrl);
    const response = await api.register({ email: 'qa.user@utp.test', password: '123456' });
    await api.expectJson(response, 200, 'SAVED');
  });

  test('TC-02 campos vacíos retornan REQUIRED', async ({ request }) => {
    const api = new AuthApiClient(request, apiBaseUrl);
    const response = await api.register({ email: '', password: '' });
    await api.expectJson(response, 422, 'REQUIRED');
  });

  test('TC-03 email sin @ retorna INVALID', async ({ request }) => {
    const api = new AuthApiClient(request, apiBaseUrl);
    const response = await api.register({ email: 'correo-invalido', password: '123456' });
    await api.expectJson(response, 422, 'INVALID');
  });

  test('TC-04 contraseña de 4 caracteres retorna INVALID', async ({ request }) => {
    const api = new AuthApiClient(request, apiBaseUrl);
    const response = await api.register({ email: 'qa@utp.test', password: '1234' });
    await api.expectJson(response, 422, 'INVALID');
  });

  test('TC-05 boundary: contraseña de exactamente 5 caracteres (criterio de aceptación)', async ({ request }) => {
    const api = new AuthApiClient(request, apiBaseUrl);
    const response = await api.register({ email: 'boundary@utp.test', password: '12345' });
    // Documenta defecto BUG-R01 si falla: el backend exige >5 en lugar de >=5
    await api.expectJson(response, 200, 'SAVED');
  });
});
