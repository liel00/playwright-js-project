class apiClient {
    constructor(request) {
        this.request = request;
        this.baseUrl = 'https://automationexercise.com/api';
    }

    // Method to fetch all products
    async getAllProducts() {
        return this.request.get(`${this.baseUrl}/productsList`);
    }


    // Method for searching products without search_product parameter
    async searchProductWithoutParam() {
        const response = await this.request.post(`${this.baseUrl}/searchProduct`);
        return response;
    }
}

// Export the apiClient class
module.exports = { apiClient };
