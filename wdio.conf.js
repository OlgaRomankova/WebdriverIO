import allure from "allure-commandline";

export const config = {
  runner: "local",
  specs: ["./test/specs/**/*.js"],
  exclude: [],

  maxInstances: 10,

  capabilities: [
    {
      browserName: "chrome",
    },
  ],

  logLevel: "warn",

  bail: 0,

  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,

  framework: "mocha",

  mochaOpts: {
    ui: "bdd",
    timeout: 60000,
  },

  reporters: [
    "spec",
    [
      "allure",
      {
        outputDir: "allure-results",
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: false,
        disableWebdriver: true,
      },
    ],
  ],

  async before() {
    await browser.maximizeWindow();
  },

  // async onComplete() {
  //   // const reportError = new Error("Could not generate Allure report");
  //   const generation = allure(["generate", "allure-results", "--clean"]);
  //   return new Promise((resolve, reject) => {
  //     const generationTimeout = setTimeout(() => reject(reportError), 5000);

  //     generation.on("exit", function (exitCode) {
  //       clearTimeout(generationTimeout);

  //       if (exitCode !== 0) {
  //         return reject(reportError);
  //       }

  //       console.log("Allure report successfully generated");
  //       resolve();
  //     });
  //   });
  // },

  async afterTest(test, context, { error, result, duration, passed, retries }) {
    if (error) {
      await browser.takeScreenshot();
    }
  },
};
