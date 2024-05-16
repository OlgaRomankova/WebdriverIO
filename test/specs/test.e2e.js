// import { expect } from '@wdio/globals'
import addToEstimatePage from "../pageobjects/addToEstimatePage.js";
import calculatorPage from "../pageobjects/calculatorPage.js";
import cloudStoragePage from "../pageobjects/cloudStoragePage.js";
import welcomePage from "../pageobjects/welcomePage.js";
import actions from "./../actions.js";

describe("Open calculator", () => {
  it("should open welcomePage", async () => {
    await actions.open();
    // добавить expect проверка title действительно ли я на этой стр
  });

  it("should click on add to Estimate", async () => {
    await actions.clickElement(welcomePage.addToEstimateButton);
  });
  it("should click on Compute engine", async () => {
    await actions.clickElement(addToEstimatePage.addToComputeEngineButton);
    // добавить 2 expect проверка title действительно ли я на этой стр калькулятор по слову calculator и на expect url contain
  });
  it("should click on minus one button", async () => {
    await actions.clickElement(calculatorPage.minusOneButton);
  });
  it("should click on plus one button", async () => {
    await actions.clickElement(calculatorPage.plusOneButton);
  });
  it("should click on minus two button", async () => {
    await actions.clickElement(calculatorPage.minusTwoButton);
  });
  it("should click on plus two button", async () => {
    await actions.clickElement(calculatorPage.plusTwoButton);
  });
  it("should click on minus three button", async () => {
    await actions.clickElement(calculatorPage.minusThreeButton);
  });
  it("should click on plus three button", async () => {
    await actions.clickElement(calculatorPage.plusThreeButton);
  });
  it("should click on spot button", async () => {
    await actions.clickElement(calculatorPage.spotButton);
  });
  it("should click on regular button", async () => {
    await actions.clickElement(calculatorPage.regularButton);
  });
  it("should click on balancedPersistentDisk button", async () => {
    await actions.clickElement(calculatorPage.balancedPersistentDiskButton);
  });
  it("should click on three year button", async () => {
    await actions.clickElement(calculatorPage.threeyearsButton);
  });
  it("should click on add to estimate 1", async () => {
    await actions.clickElement(calculatorPage.addToEstimateButton1);
  });
  it("should click on minus one button", async () => {
    await actions.clickElement(cloudStoragePage.cloudStorageButton);
  });
});
