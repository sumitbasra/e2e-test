import { Page } from './page'

class HomePage extends Page {
    // Elements go here
    get searchInput () { return $('#searchInput') }
    get searchInputButton () { return $('#searchButton') }
    get overviewButton () { return $('a=Overview')}

    // Methods go here
}

export { HomePage }
