const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const reporter = require('cucumber-html-reporter');

// Ensure report directories exist
const reportsDir = path.join(__dirname, 'reports');
const htmlDir = path.join(reportsDir, 'html');

if (!fs.existsSync(reportsDir)) fs.mkdirSync(reportsDir);
if (!fs.existsSync(htmlDir)) fs.mkdirSync(htmlDir);

// Timestamp for uniqueness
const timestamp = new Date().toISOString().replace(/[:.]/g, '-');

// JSON and HTML report paths
const jsonReport = path.join(reportsDir, `cucumber-${timestamp}.json`);
const htmlReport = path.join(htmlDir, `cucumber-report-${timestamp}.html`);

console.log(`Running Cucumber tests and saving JSON to: ${jsonReport}`);

// Run Cucumber tests and generate JSON report
execSync(`npx cucumber-js --format json:${jsonReport}`, { stdio: 'inherit' });

// Generate HTML report
reporter.generate({
  theme: 'bootstrap',
  jsonFile: jsonReport,
  output: htmlReport,
  reportSuiteAsScenarios: true,
  launchReport: false, // Change to true if you want it to open automatically
});

console.log(`HTML report generated at: ${htmlReport}`);
