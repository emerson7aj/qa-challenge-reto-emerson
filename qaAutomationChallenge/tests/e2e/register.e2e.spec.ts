import { test } from '@playwright/test';
import { RegisterPage } from '../../src/pages/RegisterPage';
import { uiBaseUrl } from '../../src/config/env';

test.describe('E2E — Registro UI', () => {
  test('TC-06 muestra SAVED tras registro válido', async ({ page }) => {
    const registerPage = new RegisterPage(page);
    await registerPage.goto(uiBaseUrl);
    await registerPage.submit('e2e.register@utp.test', '123456');
    await registerPage.expectMessage('SAVED');
  });

  test('TC-06 muestra REQUIRED cuando campos vacíos', async ({ page }) => {
    const registerPage = new RegisterPage(page);
    await registerPage.goto(uiBaseUrl);
    await registerPage.submit('', '');
    await registerPage.expectMessage('REQUIRED');
  });

  test('TC-06 muestra INVALID con email sin @', async ({ page }) => {
    const registerPage = new RegisterPage(page);
    await registerPage.goto(uiBaseUrl);
    await registerPage.submit('malcorreo', '123456');
    await registerPage.expectMessage('INVALID');
  });
});
