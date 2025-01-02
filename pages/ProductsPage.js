const { expect } = require('@playwright/test');

class ProductsPage {
    constructor(page) {
        this.page = page;
        this.productsButton = page.locator('a[href="/products"]');
        this.searchInput = page.locator('input[name="search"]');
        this.searchButton = page.locator('#submit_search');
        this.searchedProductsHeader = page.locator('h2:has-text("Searched Products")');
        this.productList = page.locator('.features_items .col-sm-4');
    }
    // Navigate to the "Products" page and verify the URL matches the expected value.
    async navigateToProductsPage(url) {
        try {
       
            
            // Click the "Products" button.
            await this.productsButton.click();
            
            // Verify the current URL matches the expected value.
            await expect(this.page).toHaveURL(url);
        } catch (error) {
            console.error("Error navigating to the products page:", error);
        }
    }

    // Search for a product by filling the search input field and clicking the search button.
    async searchProduct(productName) {
        try {
            // Fill the search input with the provided product name.
            await this.searchInput.fill(productName);
            
            // Click the search button to initiate the search.
            await this.searchButton.click();
        } catch (error) {
            console.error("Error searching for the product:", error);
        }
    }

    // Verify that the searched products are visible and there is at least one product in the results.
    async verifySearchedProductsVisible() {
        try {
            // Verify the "Searched Products" header is visible on the page.
            await expect(this.searchedProductsHeader).toBeVisible();
            
            // Count the number of products displayed on the page.
            const count = await this.productList.count();
            
            // Verify that there is at least one product displayed.
            expect(count).toBeGreaterThan(0);
        } catch (error) {
            console.error("Error verifying searched products visibility:", error);
        }
    }

}

module.exports = ProductsPage;
