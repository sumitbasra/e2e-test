import { HomePage } from '../pageobjects/home.page'
const homePage = new HomePage()

describe('homeandauto selectquote home page',  () => {
  
   it('should redirect from https://homeandauto.selectquote.com/ to https://homeandauto.selectquote.com/insurance-overview/', () => {
        browser.url("https://homeandauto.selectquote.com/")
        homePage.overviewButton.click()

        const expected = "https://homeandauto.selectquote.com/insurance-overview/"
        const value = browser.getUrl()
        expect(value).toEqual(expected)
        browser.pause(3000);
    })

    it('should click on the searchInputButton and display search value',() => {
    homePage.searchInputButton.click()
    browser.pause(3000)
    homePage.searchInput.click()
    homePage.searchInput.setValue("Home")
    homePage.searchInput.click()
    browser.pause(5000);
   
   })

   it('should move to close button and click on it', () => {
      homePage.closeButton.moveTo()
      homePage.closeButton.click()
      browser.pause(3000);

   })  
   it('should click on Home Insurance button', () => {
      homePage.homeInsuranceButton.moveTo()
      homePage.homeInsuranceButton.click()
      browser.pause(3000)
   })

  it('verify if the banner container displaying its title', () => {
  expect(homePage.homeBannerTitle).toHaveTextContaining('Find the home insurance policy that’s right for you.')
  browser.pause(3000)

})

   it('should move to Quote button, verify if its clickable and click on it', () => {
      homePage.freeQuoteButton.moveTo()
      expect(homePage.freeQuoteButton).toBeClickable()
      homePage.freeQuoteButton.click()
      browser.pause(3000)

   }) 

   it('should verify new url after clicking on Quote button', () => {
   expect(browser).toHaveUrl('https://homeandauto.selectquote.com/quote-form/')
   browser.pause(3000)
   })   

})







