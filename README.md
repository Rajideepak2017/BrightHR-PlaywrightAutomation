# BrightHR-AutomationTest
Automation suite built for BrightHR technical assessment. Features employee flow validation, CI pipeline, and HTML report
├── .github/workflows/           # GitHub Actions CI/CD pipeline config
│   └── playwright.yml           # Automates test execution on push/pull requests
│
├── pageObjects/                 # Page Object Model classes
│   ├── loginPage.js             # Encapsulates login page interactions
│   ├── employeePage.js          # Encapsulates employee page actions
│   └── POTestManager.js         # Centralized access to page objects
│
├── features/                    # Cucumber BDD structure
│   ├── step-definitions/        # Gherkin step definitions
│   │   ├── loginSteps.spec.js
│   │   ├── employeeehardcode.spec.js
│   │   └── employeeJSON.spec.js
│
├── utility/                     # Custom setup, config, and reporting
│   ├── config.json              # Environment/test configuration
│   ├── customWorld.js           # Cucumber World object for shared context
│   └── Cucumber-report.html     # Generated HTML report
│
├── tests/                       # playwright in built tests
│   └── test.spec.js           
│
├── playwright-report/           # Playwright trace and HTML report output
├── test-results/                # Raw test output, screenshots, traces
│
├── generateReports.js           # Script to generate timestamped HTML reports
├── cucumber.js                  # Cucumber CLI configuration
├── playwright.config.js         # Playwright test runner config
├── package.json                 # Project metadata and dependencies
├── package-lock.json            # Dependency lock file
└── README.md                    # Project overview, setup, and usage instructions

# Framework Highlights
- Hybrid architecture: Combines Cucumber BDD +Playwright and  playwright in built runner 
- Modular Page Object Model: Centralized access via POTestManager.js
- CI/CD pipeline: GitHub Actions auto-triggered on push/pull requests
- Timestamped HTML reports: Audit-friendly and non-overwriting
- Environment-driven config: Easily switchable via config.json

# Setup & Installation Instructions

# Install dependencies
npm install

# Run tests with Cucumber + Playwright and playwright in built tests
npm run testWithReport (To Cucumber test and html reports)
npm run playwrightTest(To playwright test and html reports)
(Please check package.json for more scripts)

# Included Test Scenarios
This project includes three automated test scenarios implemented using Cucumber (BDD) and Playwright:
# Cucumber Scenarios (2)
# Add Two Employees (Hardcoded Values)
- Adds two employee records using predefined values.
- Verifies both entries are successfully created and visible.
# Add Employees from JSON File
- Reads employee data from an external JSON file.
- Dynamically adds multiple employees and verifies each entry.
# Playwright Scenario (1)
# Add and Verify Employees
- Adds two employee records using Playwright directly.
- Sources data from a JSON file.


