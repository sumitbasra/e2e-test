import { Page } from './page'

class LifePage extends Page {
    // Elements go here

    get lifeInsButton () { return $("//ul[@id='menu-sq-life-subnav']/li/a[text()='Life Insurance']")}  
	get lifeQuoteButton() { return $("//div[@id='et-boc']/div/div/div[5]/div/div/div/a")}
 	get maleRadButton() { return $("//input[@value='m']") }
	get dobInput() { return $("//label[contains(.,'Birthday')]/following-sibling::input")}
	get dobErrMsg() { return $("//label[contains(.,'Birthday')]/following-sibling::div[contains(text(),'Date is invalid')]")}
	get nextButton() {return $("//div[@class='frm_submit']/button") }
	
	
    // Methods go here
}

export { LifePage }
