import { HomePage } from '../pageobjects/home.page'
const homePage = new HomePage()

describe('homeandauto selectquote home page',  () => {
    it('should redirect from https://homeandauto.selectquote.com/ to https://homeandauto.selectquote.com/insurance-overview/', () => {
        browser.url('https://homeandauto.selectquote.com/')
        homePage.overviewButton.click()

        const expected = "https://homeandauto.selectquote.com/insurance-overview/"
        const value = browser.getUrl()
        expect(value).toEqual(expected)
    });
	
	
	// validating that both zipcode search buttons on home page redirects the same
	
	   it('should redirect from https://homeandauto.selectquote.com/ to https://homeandauto.selectquote.com/quote-form/?zip={value}', () => {
        browser.url('https://homeandauto.selectquote.com/')
	
		var zipValue = '64118';
        homePage.firstZipInput.setValue(zipValue);
		browser.pause(1000); // browser was not recongnizing input without waiting here. 
		homePage.firstZipSearchButton.click();
		
		const expected = "https://homeandauto.selectquote.com/quote-form/?zip=" + zipValue
        const value = browser.getUrl();
        expect(value).toEqual(expected);
    });
	
	//second zipcode search button on home page.. 
	it('should redirect from https://homeandauto.selectquote.com/ to https://homeandauto.selectquote.com/quote-form/?zip={value}', () => {
        browser.url('https://homeandauto.selectquote.com/')
	
		var zipValue2 = '64118';
        homePage.secondZipInput.setValue(zipValue2);
		browser.pause(1000); // browser was not recongnizing input without waiting here. 
		homePage.secondZipSearchButton.click();
		
		const expected = "https://homeandauto.selectquote.com/quote-form/?zip=" + zipValue2
        const value = browser.getUrl();
        expect(value).toEqual(expected);
    });
	
	//while we're at it, let's check out main & footer quote buttons are redirecting correctly
	
	//main quote button
	it('should redirect from https://homeandauto.selectquote.com/ to https://homeandauto.selectquote.com/quote-form', () => {
        browser.url('https://homeandauto.selectquote.com/')
	
		homePage.mainGetQuoteButton.click();
		
		const expected = "https://homeandauto.selectquote.com/quote-form/"
        const value = browser.getUrl();
        expect(value).toEqual(expected);
    });
	
	
	it('should redirect from https://homeandauto.selectquote.com/ to https://homeandauto.selectquote.com/quote-form', () => {
        browser.url('https://homeandauto.selectquote.com/')
	
		homePage.footerGetQuoteButton.click();
	
		browser.pause(1000);  //this condition wouldn't pass without pausing here first
		const expected = "https://homeandauto.selectquote.com/quote-form/"
        const value = browser.getUrl();
        expect(value).toEqual(expected);
    });
	
})
