import { LifePage } from '../pageobjects/life.page'
const lifePage = new LifePage()

describe('life insu selectquote page',  () => {
    it('should redirect from https://life.selectquote.com/ to https://life.selectquote.com/life-insurance/', () => {
        browser.url('https://life.selectquote.com/')
        lifePage.lifeInsButton.click()

        const expected = "https://life.selectquote.com/life-insurance/"
        const value = browser.getUrl()
        expect(value).toEqual(expected)
    });
	
})

describe('life ins page flow to dob format error' , () => {
	
	it('after selecting getquote and inputing incorrectly formated dob, we should an error message for the user', () => {
		 browser.url('https://life.selectquote.com/')
		
		var dobText = '12/07/198'
		
		lifePage.lifeInsButton.click()
		lifePage.lifeQuoteButton.waitForClickable({ timeout: 3000 });
		lifePage.lifeQuoteButton.click()
		lifePage.maleRadButton.waitForClickable({ timeout: 3000 }); // we make a selection here so the dob error is isolated. 
		lifePage.maleRadButton.click();                            //otherwise, all fields populate, which might not be from the same function 
		lifePage.dobInput.setValue(dobText);
		lifePage.nextButton.click();
	  
		expect(lifePage.dobErrMsg).toBeExisting()
		
		
	});
	
})
	
	
	
	

