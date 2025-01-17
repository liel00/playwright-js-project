
# Playwright JS Automation Project

## 📚 Description
This project uses [Playwright](https://playwright.dev/) for automation testing. It includes tests for **Web** and **API** functionalities, designed with scalability and maintainability in mind.

---

## 🚀 Features
- **Web Automation**: Test scenarios for login, registration, and more.
- **API Testing**: Covers endpoints for product listing, searching, and orders.
- **Data-Driven Testing**: Uses JSON fixtures for dynamic test data management.
- **Page Object Model (POM)**: Modular and reusable test code.
- **Custom Utilities**: Shared utilities for API interactions and helper functions.

---

## 🛠️ Installation

### Prerequisites
- Node.js (v16+)
- npm (v7+)
- Git installed locally

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/liel00/playwright-js-project.git
   ```
2. Navigate to the project directory:
   ```bash
   cd playwright-js-project
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Install Playwright browsers:
   ```bash
   npx playwright install
   ```

---

## 📂 Project Structure

```
playwright-js-project/
├── tests/
│   ├── web/                # Web test cases
│   │   ├── test-login.spec.js
│   │   ├── test-registration.spec.js
│   ├── api/                # API test cases
│   │   ├── test-products.spec.js
│   │   ├── test-orders.spec.js
├── fixtures/               # Test data
│   ├── web/
│   │   ├── login.json
│   │   ├── registration.json
│   ├── api/
│   │   ├── products.json
│   │   ├── orders.json
├── pages/                  # Page Object Models
│   ├── LoginPage.js
│   ├── RegistrationPage.js
├── utils/                  # Shared utilities
│   ├── apiClient.js
│   ├── helpers.js
├── playwright.config.js    # Playwright configuration
└── package.json            # Project dependencies
```

---

## 🧪 Running Tests

### Run All Tests
```bash
npx playwright test
```

### Run Web Tests
```bash
npx playwright test tests/web
```

### Run API Tests
```bash
npx playwright test tests/api
```

### Run Tests with Tags
To run only tests tagged with `@API` or `@WEB`:
```bash
npx playwright test --grep @API
```

---

## 📄 License
This project is licensed under the MIT License.

---

## 🤝 Contributing
Contributions are welcome! Please fork the repository and submit a pull request.

---

## 🛠️ Configuration

### `playwright.config.js`
```javascript
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  use: {
    baseURL: 'https://automationexercise.com',
    timeout: 30000,
  },
  projects: [
    {
      name: 'API Tests',
      testDir: './tests/api',
    },
    {
      name: 'Web Tests',
      testDir: './tests/web',
    },
  ],
});
```
