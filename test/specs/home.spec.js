import { HomePage } from '../pageobjects/home.page'
const homePage = new HomePage()

describe('homeandauto selectquote home page',  () => {
    it('should redirect from https://homeandauto.selectquote.com/ to https://homeandauto.selectquote.com/insurance-overview/', () => {
        browser.url('https://homeandauto.selectquote.com/')
        homePage.overviewButton.click()

        const expected = "https://homeandauto.selectquote.com/insurance-overview/"
        const value = browser.getUrl()
        expect(value).toEqual(expected)
    })
})
