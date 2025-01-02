
const { test, expect } = require('@playwright/test');
const RegisterPage = require('../../pages/RegisterPage');
const registerData = require('../../fixtures/web/register.json');


    test('@WEB Test Case 1: Register a new user successfully ', async ({ page }) => {
        const registerPage = new RegisterPage(page);
        
        // Open the home page.
        await registerPage.baseUrl();

        // Step 1: Navigate to signup page
        await registerPage.navigateToSignup();

        // Step 2: Fill and submit the signup form
        await registerPage.fillSignupForm(registerData.validUser);

    });

