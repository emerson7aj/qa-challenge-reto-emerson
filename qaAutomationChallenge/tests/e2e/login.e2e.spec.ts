import { test } from '@playwright/test';
import { LoginPage } from '../../src/pages/LoginPage';
import { uiBaseUrl } from '../../src/config/env';

test.describe('E2E — Login UI', () => {
  test('TC-10 muestra REQUIRED cuando campos vacíos', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto(uiBaseUrl);
    await loginPage.submit('', '');
    await loginPage.expectMessage('REQUIRED');
  });

  test('TC-10 login con credenciales inválidas debe mostrar INVALID (criterio de aceptación)', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto(uiBaseUrl);
    await loginPage.submit('invalid@utp.test', 'badpassword');
    await loginPage.expectMessage('INVALID');
  });
});
