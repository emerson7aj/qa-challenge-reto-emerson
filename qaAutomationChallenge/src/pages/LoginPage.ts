import { Locator, Page, expect } from '@playwright/test';

export class LoginPage {
  readonly email: Locator;
  readonly password: Locator;
  readonly loginButton: Locator;
  readonly message: Locator;

  constructor(private readonly page: Page) {
    this.email = page.locator('#email');
    this.password = page.locator('#password');
    this.loginButton = page.locator('#login');
    this.message = page.locator('#msg');
  }

  async goto(baseURL: string) {
    await this.page.goto(`${baseURL}/login`);
    await expect(this.page.getByRole('heading', { name: 'Login' })).toBeVisible();
  }

  async submit(email: string, password: string) {
    await this.email.fill(email);
    await this.password.fill(password);
    await this.loginButton.click();
  }

  async expectMessage(text: string) {
    await expect(this.message).toHaveText(text);
  }
}
