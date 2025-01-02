const { expect } = require('@playwright/test');

class RegisterPage {
  constructor(page) {
      this.page = page;
      this.signupButton = page.locator('a[href="/login"]');
      this.nameField = page.locator('input[name="name"]');
      this.emailField = page.locator('input[name=email][data-qa="signup-email"]');
      this.signupSubmitButton = page.locator('button:has-text("Signup")');
      this.passwordField = page.locator('input[name="password"]');
      this.dayDropdown = page.locator('select[name="days"]');
      this.monthDropdown = page.locator('select[name="months"]');
      this.yearDropdown = page.locator('select[name="years"]');
      this.firstNameField = page.locator('input[name="first_name"]');
      this.lastNameField = page.locator('input[name="last_name"]');
      this.addressField = page.locator('input[name="address1"]');
      this.stateField = page.locator('input[name="state"]');
      this.cityField = page.locator('input[name="city"]');
      this.zipCodeField = page.locator('input[name="zipcode"]');
      this.mobileNumberField = page.locator('input[name="mobile_number"]');
      this.createAccountButton = page.locator('button:has-text("Create Account")');
      this.accountCreatedMessage = page.locator('h2[data-qa="account-created"]');
      this.continue = page.locator('text =Continue')
      this.deleteAccount = page.locator('a:has-text("Delete Account")')
      
  }
    // Navigate to the base URL of the application.
    async baseUrl() {
      try {
          await this.page.goto('/');
      } catch (error) {
          console.error("Error navigating to base URL:", error);
      }
  }

  // Click on the signup button to navigate to the signup page.
  async navigateToSignup() {
      try {
          await this.signupButton.click();
      } catch (error) {
          console.error("Error navigating to signup page:", error);
      }
  }

  // Fill out the signup form with the provided user data and complete the account creation process.
  async fillSignupForm(user) {
      try {
          // Fill name and email fields, then submit to proceed to the next step.
          await this.nameField.fill(user.name);
          await this.emailField.fill(user.email);
          await this.signupSubmitButton.click();

          // Fill in the password and date of birth details.
          await this.passwordField.fill(user.password);
          await this.dayDropdown.selectOption(user.dateOfBirth.day);
          await this.monthDropdown.selectOption(user.dateOfBirth.month);
          await this.yearDropdown.selectOption(user.dateOfBirth.year);

          // Fill in address details.
          await this.firstNameField.fill(user.address.firstName);
          await this.lastNameField.fill(user.address.lastName);
          await this.addressField.fill(user.address.address1);
          await this.stateField.fill(user.address.state);
          await this.cityField.fill(user.address.city);
          await this.zipCodeField.fill(user.address.zipcode);
          await this.mobileNumberField.fill(user.address.mobileNumber);

          // Submit the form to create an account.
          await this.createAccountButton.click();

          // Verify that the account creation success message is visible.
          if (await this.accountCreatedMessage.isVisible()) {
              console.log("Account successfully created!");
          } else {
              console.error("Account creation message not visible.");
          }

          // Click to continue after account creation.
          await this.continue.click();

          // Delete the account for cleanup.
          await this.deleteAccount.click();

          // Verify the account deletion success message is visible.
          if (await this.accountCreatedMessage.isVisible()) {
              console.log("Account successfully deleted!");
          } else {
              console.error("Account deletion message not visible.");
          }

          // Click to continue after account deletion.
          await this.continue.click();

      } catch (error) {
          console.error("Error during the signup process:", error);
      }
  }

}

module.exports = RegisterPage;
