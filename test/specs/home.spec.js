import { HomePage } from '../pageobjects/home.page'
const homePage = new HomePage()

describe('homeandauto selectquote home page',  () => {
  
   it('should redirect from https://homeandauto.selectquote.com/ to https://homeandauto.selectquote.com/insurance-overview/', () => {
        browser.url("https://homeandauto.selectquote.com/")
        homePage.overviewButton.click()

        const expected = "https://homeandauto.selectquote.com/insurance-overview/"
        const value = browser.getUrl()
        expect(value).toEqual(expected)
        browser.pause(5000);

    })

   it('should click on the searchInputButton and display search feature',() => {
      homePage.searchInputButton.waitForClickable({timeout:2000})
      homePage.searchInputButton.click()
      homePage.searchInput.waitForClickable({timeout:2000})
      homePage.searchInput.click()

   })

   it('should move to close button and click on it', () => {
      homePage.closeButton.moveTo()
      homePage.closeButton.waitForClickable({timeout:2000})
      homePage.closeButton.click()

    }) 
   
   it('should click on Home Insurance button', () => {
      homePage.homeInsuranceButton.moveTo()
      homePage.homeInsuranceButton.waitForClickable({timeout:2000})
      homePage.homeInsuranceButton.click()

   })

   it('verify if the banner container displaying its title', () => {
    expect(homePage.homeBannerTitle).toHaveTextContaining('Find the home insurance policy that’s right for you.')
    homePage.homeBannerTitle.waitForDisplayed({timeout:2000})

  })

   it('should move to Quote button, verify if its clickable and click on it', () => {
      homePage.freeQuoteButton.moveTo()
      expect(homePage.freeQuoteButton).toBeClickable()
      homePage.freeQuoteButton.waitForClickable({timeout:2000})
      homePage.freeQuoteButton.click()

   }) 

   it('should verify new url after clicking on Quote button', () => {
   expect(browser).toHaveUrl('https://homeandauto.selectquote.com/quote-form/')
   browser.pause(2000)

    })   

})







