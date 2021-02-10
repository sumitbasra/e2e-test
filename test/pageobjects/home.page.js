import { Page } from './page'

class HomePage extends Page {
    // Elements go here

    get searchInput () { return $("//body/section[@id='overlay']")}
    get searchInputButton () { return $('#toggle-desktop')}
    get overviewButton () { return $('a=Overview')}
    get closeButton () { return $("//*[@id='close']")}
    
    get homeInsuranceButton () { return $('a=Home Insurance')}
    get homeBannerTitle () { return $("//p[contains(text(),'Find the home insurance policy that’s right for you.')]")}
    get freeQuoteButton () { return $("//a[@id='hp_reviews_sqah']")}
   

   // Methods go here
  
}
export { HomePage }
