# CyREST Framework

This is a ready-to-use framework template based on Cypress with integrated libraries and project structure for implementing automated tests using Gherkin and the JSON Model Pattern (similar to the Page Object Model). The framework also includes integrated OAUTH2 implementation.

Feel free to adapt it into your project.

## Setup Instructions

### 1. Install Node.js

Ensure you have Node.js installed. You can download it from [nodejs.org](https://nodejs.org/).

### 2. Install Cypress

Install Cypress and other dependencies by running:

```bash
npm install
```

### 3. Open Cypress Test Runner

You can open the Cypress Test Runner by running:

```bash
npx cypress open
```

### 4. Running the Tests

To run the tests headlessly, use the following command:

```bash
npx cypress run
```

## Project Structure

- **cypress/**: Contains all the Cypress tests and configurations.
  - **e2e/**: Contains feature files for Gherkin syntax.
    - **sample.feature**: Sample feature file.
  - **fixtures/**: Contains test data files.
    - **example.json**: Sample test data.
  - **support/**: Contains support files and commands.
    - **helpers/**: Helper functions.
    - **json_model/**: JSON Model pattern files.
    - **commands.js**: Custom Cypress commands.
    - **e2e.js**: Configuration and setup for Cypress.
  - **step_definitions/**: Contains step definitions for Gherkin features.
    - **common.steps.js**: Common step definitions.
    - **sample.steps.js**: Sample step definitions.
- **cypress.config.js**: Cypress configuration file.
- **package.json**: Node.js project configuration file.

## Additional Information

- Ensure you have Node.js and npm installed.
- For any issues, please create an issue on the GitHub repository.