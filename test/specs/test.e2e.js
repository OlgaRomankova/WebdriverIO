import { expect } from '@wdio/globals'
import actions from './../actions.js';

describe('Open calculator', () => {
    it('should open welcomePage', async () => {
        await actions.open()
    })
})

