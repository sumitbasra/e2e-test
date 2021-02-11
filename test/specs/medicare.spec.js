import { MedicarePage } from '../pageobjects/medicare.page'
const medicare = new MedicarePage()

describe('medicare selectquote home page',  () => {
  
   it('should open medicare home page', () => {
        browser.url("https://medicare.selectquote.com/")
       
        const expected = "https://medicare.selectquote.com/"
        const value = browser.getUrl()
        expect(value).toEqual(expected)
        browser.pause(3000);
    })

   it('should move to Plans and click on "Type of Plan Needed" button',() => {
     medicare.plansButton.moveTo()
 // medicare.plansButton.waitForClickable({timeout:2000})
     medicare.typeOfPlanNeeded.waitForClickable({timeout:2000})
     medicare.typeOfPlanNeeded.click()

    })

})