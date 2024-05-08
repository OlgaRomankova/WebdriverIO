import { $ } from '@wdio/globals'
import Page from './Welcome to GooglePage.js';


class SecurePage extends Page {
    
    get flashAlert () {
        return $('#flash');
    }
}

export default new SecurePage();
