import { $ } from "@wdio/globals";

class actions {
  async open(path) {
    await browser.url(
      `https://cloud.google.com/products/calculator?hl=ru/${path}`
    );
  }

  async clickElement(selector) {
    const element = await $(selector);
    await element.waitForExist({ timeout: 5000 });
    await element.click();
  }
}

export default new actions();
