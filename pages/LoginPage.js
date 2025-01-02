const { expect } = require('@playwright/test');

class Login {
    constructor(page) {
        this.page = page;
        this.emailLogin = page.locator('input[data-qa="login-email"]');
        this.password = page.locator('input[data-qa="login-password"]');
        this.loginButton = page.locator('button[data-qa="login-button"]');

        this.logoutButton = page.locator('a:has-text("Logo")');


        
    }

  
       // Perform the login action by filling in the user's email and password and clicking the login button.
       async login(user) {
        try {
            // Fill the email input field with the user's email.
            await this.emailLogin.fill(user.email);

            // Fill the password input field with the user's password.
            await this.password.fill(user.password);

            // Click the login button to submit the form.
            await this.loginButton.click();
        } catch (error) {
            console.error("Error during login:", error);
        }
    }

    // Perform the logout action and verify that the user is redirected to the login page.
    async logout() {
        try {
            // Click the logout button to log out the user.
            await this.logoutButton.click();

            // Verify the current URL matches the login page URL.
            await expect(this.page).toHaveURL('https://www.automationexercise.com/login');
        } catch (error) {
            console.error("Error during logout:", error);
        }
    }

  }
  
  module.exports = Login;
  