**_WebdriverIO - Google Cloud Pricing Calculator_**

## Automated testing of Google Cloud Pricing Calculator using WebdriverIO

---

This repository contains a set of automated tests for [the Google Cloud Pricing Calculator page](https://cloud.google.com/products/calculator?hl=ru 'Google Cloud Pricing Calculator'),
written using the WebdriverIO framework.

My first project in automated web page testing. In this project, I demonstrate basic skills
in VSC, npm, JS, WebdriverIO, Markdown, and locator and Xpath search skills.

This project presents the automated testing of functions on [the Google Cloud Pricing Calculator page](https://cloud.google.com/products/calculator?hl=ru 'Google Cloud Pricing Calculator'),
such as clicking certain buttons and checking navigation through several links.
The testing was performed in Chrome and Microsoft Edge browsers, and an Allure report
is generated based on the test results.

---

Requirements:

- Node.js
- npm
- Web browsers (Chrome, Edge)

---

Technology:

- Tool: WebdriverIO
- Visual Studio Code
- Language: JavaScript

---

Installation:

1.Clone the repository: git clone https://github.com/OlgaRomankova/-Webdriverio.git  
2.Go to the project directory, for example: D:\Projects\Webdriverio  
3.Install dependencies: npm install

---
This case presents two options for running autotests for Chrome, Edge, or both browsers.
Option 1. Here is an option with three configuration files: one for Chrome, the second for Edge and the third for both browsers.

wdio.chrome.conf.js — to run tests only in Chrome.
wdio.edge.conf.js — for running tests only in Edge.
wdio.multi.conf.js — to run tests in both browsers.

---
Running tests:

Run the appropriate configuration file on the command line:
For Chrome: 
```
npm run chrome
```
For Edge: 
```
npm run edge
```
For both browsers: 
```
npm run multi
```
This approach allows you to flexibly select browsers to run tests, while maintaining the same basic configuration code.

Option 2. In order to be able to call autotests separately for Chrome, Edge, or for two browsers at the same time, you can make the configuration more dynamic by using an environment variable. Depending on the value of this variable, you can configure the launch of the desired browser (or browsers).
Running commands depending on the desired browser
Now you can use different BROWSER values to run the configuration:

For Chrome:

```
BROWSER=chrome npx wdio run ./wdio.var.conf.js

```

For Edge:

```
BROWSER=edge npx wdio run ./wdio.var.conf.js
```
For both:

```
BROWSER=both npx wdio run ./wdio.var.conf.js
```
This way, one configuration file supports multiple launch modes, and browser selection is easily controlled through the BROWSER environment variable.

After automation to view allure report , give the following commands:

```
allure generate allure-results --clean -o allure-report
```
```
allure serve allure-results
```
