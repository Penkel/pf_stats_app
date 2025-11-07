import DicesAmountClass from "./DicesClass"

export default class StatsCompiler {
    constructor() {
        this.dices_given_to_allies = new DicesAmountClass
        this.dices_rolled = new DicesAmountClass
        this.times_explored = 0
        this.pluses_added = 0
    }
}