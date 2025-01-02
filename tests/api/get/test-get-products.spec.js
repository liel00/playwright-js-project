// Import necessary modules and classes
const { test, expect } = require('@playwright/test');
const { apiClient } = require('../../../utils/apiClient.js');

// Test suite for API tests related to "Get All Products"
test.describe('API Tests - Get All Products', () => {
    let productsAPI;

    // Before each test, initialize the ProductsAPI with the request context
    test.beforeEach(async ({ request }) => {
        productsAPI = new apiClient(request);
    });

    // Test case: Verify fetching all products list successfully
    test('@API Test Case 5 Get all products list successfully ', async () => {
        // Send the GET request to fetch the products list
        const response = await productsAPI.getAllProducts();

        // Check if the response is successful (HTTP 200)
        expect(response.ok()).toBeTruthy();

        // Parse the response body as JSON
        const responseBody = await response.json();

        // Assert that the response contains the "products" property
        expect(responseBody).toHaveProperty('products');

        // Verify the products array is not empty
        expect(responseBody.products.length).toBeGreaterThan(0);

        // Validate if the product contains the expected properties
        expect(responseBody.products[0]).toEqual(
            expect.objectContaining({
                brand: expect.any(String),
                category: expect.objectContaining({
                    category: expect.any(String),
                    usertype: expect.objectContaining({
                        usertype: expect.any(String),
                    }),
                }),
                id: expect.any(Number),
                name: expect.any(String),
                price: expect.any(String),
            })
        );
    });
});
