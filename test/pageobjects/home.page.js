import { Page } from './page'

class HomePage extends Page {
    // Elements go here

    get overviewButton () { return $('a=Overview')}  
 	get firstZipInput () { return $("(//Input[contains(@name, 'zip')])[1]") }
	get firstZipSearchButton () { return $("((//button[contains(.,'Get Free Quote')])[1])") }
	get secondZipInput () { return $("(//Input[contains(@name, 'zip')])[2]") }
	get secondZipSearchButton () { return $("((//button[contains(.,'Get Free Quote')])[2])") }
	get mainGetQuoteButton () { return $('#sq-main-btn') }
	get footerGetQuoteButton () {return $("//div[@class='mak_cta_btn']/a[contains(text(),'Start Quote')]") }


    // Methods go here
}

export { HomePage }
