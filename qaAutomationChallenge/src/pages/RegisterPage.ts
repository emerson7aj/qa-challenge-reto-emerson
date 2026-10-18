import { Locator, Page, expect } from '@playwright/test';

export class RegisterPage {
  readonly email: Locator;
  readonly password: Locator;
  readonly registerButton: Locator;
  readonly message: Locator;

  constructor(private readonly page: Page) {
    this.email = page.locator('#email');
    this.password = page.locator('#password');
    this.registerButton = page.locator('#register');
    this.message = page.locator('#msg');
  }

  async goto(baseURL: string) {
    await this.page.goto(`${baseURL}/register`);
    await expect(this.page.getByRole('heading', { name: 'Registro' })).toBeVisible();
  }

  async submit(email: string, password: string) {
    await this.email.fill(email);
    await this.password.fill(password);
    await this.registerButton.click();
  }

  async expectMessage(text: string) {
    await expect(this.message).toHaveText(text);
  }
}
