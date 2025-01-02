const { test, expect } = require('@playwright/test');
const { apiClient } = require('../../../utils/apiClient'); // Import the apiClient
const searchProductErrorResponse = require('../../../fixtures/api/post-searchProductErrorResponse.json'); // Import the fixture

test.describe('API Tests - Search Product without search_product', () => {
    let productsAPI;

    // Before each test, initialize the apiClient
    test.beforeEach(async ({ request }) => {
        productsAPI = new apiClient(request);
    });

    test('@API Test Case 4 Search for a product without search_product parameter ', async () => {
        // Send the POST request without the 'search_product' parameter
        const response = await productsAPI.searchProductWithoutParam();

        // Assert that the response status is 200
        expect(response.status()).toBe(200);

        // Assert that the response matches the expected error message from the fixture
        const responseBody = await response.json();

        // Compare the response body with the fixture
        expect(responseBody).toEqual(searchProductErrorResponse);
    });
});
