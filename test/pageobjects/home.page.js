import { Page } from './page'

class HomePage extends Page {
    // Elements go here

    get searchResult() { return $ ("//*[contains(@class,'keyword') or contains(text(),'No results found for')]")}
    get searchInput() { return $ ("(//input[@type='search'])[2]")}
    get searchInputButton () { return $('#toggle-desktop')}
    get overviewButton () { return $('a=Overview')}
    get closeButton () { return $('#close')}
    
    get homeInsuranceButton () { return $('a=Home Insurance')}
    get homeBannerTitle () { return $("//p[contains(text(),'Find the home insurance policy that’s right for you.')]")}
    get freeQuoteButton () { return $("//a[@id='hp_reviews_sqah']")}
   

   // Methods go here
  
}
export { HomePage }
