
const { test, expect } = require('@playwright/test');
const RegisterPage = require('../../pages/RegisterPage');
const loginData = require('../../fixtures/web/login.json');
const Login = require('../../pages/LoginPage');


    test('@WEB Test Case 2: Logout User ', async ({ page }) => {
        const registerPage = new RegisterPage(page);
        const login = new Login(page)
       
        // Open the home page.
        await registerPage.baseUrl();

        // Step 1: Navigate to login page
        await registerPage.navigateToSignup();

        // Step 2: login user & password
        await login.login(loginData.validUser);
        
        // Step 3 logout 
        await login.logout();


    });

