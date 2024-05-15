import { $ } from '@wdio/globals';

class actions {
  async open(path) {
    await browser.url(`https://cloud.google.com/products/calculator?hl=ru/${path}`);
  }

  async clickElement(selector) {
    const element = await $(selector);

    await element.scrollIntoView({
      block: 'center',
    });

    const elementIsDisplayed = await element.waitForDisplayed({ timeout: 12000 });

    if (elementIsDisplayed) {
      await element.moveTo();
      await element.click();
    } else {
      console.log('the element is not Displayed');
    }
  }
}

export default new actions();
