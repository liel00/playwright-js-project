const { test, expect } = require('@playwright/test');
const ProductsPage = require('../../pages/ProductsPage');
const ProductData = require('../../fixtures/web/search-product.json');
const RegisterPage = require('../../pages/RegisterPage');




    test('@WEB Test Case 3 Search for a "T-shirt" product successfully ', async ({ page }) => {
        const productsPage = new ProductsPage(page);
        const registerPage = new RegisterPage(page);
       
         // Open the home page.
        await registerPage.baseUrl();

        // Step 1: Navigate to Products page
        await productsPage.navigateToProductsPage(ProductData.url);


        // Step 2: Search for a "T-shirt"
      
        await productsPage.searchProduct(ProductData.productName);

        // Step 3: Verify searched products are visible
        await productsPage.verifySearchedProductsVisible();
    });
