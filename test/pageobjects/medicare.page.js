import { Page } from './page'

class MedicarePage extends Page {
    // Elements go here

    get plansButton () { return $('a=Plans')}
    get typeOfPlanNeeded () { return $('a=Type of Plan Needed')}
    
}
export { MedicarePage }
