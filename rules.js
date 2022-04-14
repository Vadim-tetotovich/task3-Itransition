class Rules {

    constructor(moves) {
        this.moves = moves
        this.half = Math.floor(this.moves.length / 2)
    }

    getRules(computerMove, userMove) {
        let indexComputerMove, indexUserMove

        this.moves.forEach((el, index) => {
            if (el == computerMove) indexComputerMove = ++index
            if (el == userMove) indexUserMove = ++index
        })

        if (computerMove == userMove)
            return 'draw'
        else if (!((indexComputerMove > indexUserMove) && (indexComputerMove <= indexUserMove + this.half) ||
                (indexComputerMove < indexUserMove - this.half))) {
            return 'lose'
        } else {
            return 'win'
        }
    }

}

export default Rules