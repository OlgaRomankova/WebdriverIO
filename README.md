**_WebdriverIO - Google Cloud Pricing Calculator_**

## Automated testing of Google Cloud Pricing Calculator using WebdriverIO

---

This repository contains a set of automated tests for [the Google Cloud Pricing Calculator page](https://cloud.google.com/products/calculator?hl=ru "Google Cloud Pricing Calculator"),
written using the WebdriverIO framework.

My first project in automated web page testing. In this project, I demonstrate basic skills
in VSC, npm, JS, WebdriverIO, Markdown, and locator and Xpath search skills.

This project presents the automated testing of functions on [the Google Cloud Pricing Calculator page](https://cloud.google.com/products/calculator?hl=ru "Google Cloud Pricing Calculator"),
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
    2.Go to the project directory, for example: `D:\Projects\Webdriverio`      
    3.Install dependencies: npm install  

---

Running tests:

```
npm run wdio
```

After automation to view allure report , give the following commands:

```
allure generate allure-results --clean -o allure-report
allure serve allure-results
```
