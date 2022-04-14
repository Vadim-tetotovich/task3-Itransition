import Hmac from 'hmac-js'
import pkg from 'js-sha3'
const { sha3_256 } = pkg
import Rules from './rules.js'
import conif from 'node-console-input'
import Table from './table.js'

class GenHMAC {

    constructor(hmac, move, moves) {
        this.hmac = hmac
        this.move = move
        this.moves = moves
    }

    generateHMAC() {
        let secretKey = sha3_256((this.hmac).toString())

        const hash = Hmac.generateHash({
            algorithm: "sha256",
            secret: secretKey,
            payload: this.move,
        });

        console.log('HMAC:', hash)
        console.log('Available moves:')

        menu(this.moves)

        let userMove = getUserMove(this.moves)
        console.log("Your move: " + userMove);

        console.log('Computer move:', this.move)

        let rule = new Rules(this.moves)
        console.log(rule.getRules(this.move, userMove))

        console.log('HMAC Key:', secretKey)
    }

}

function menu(moves) {
    moves.forEach((element, index) => {
        console.log(++index + ' -', element)
    })
    console.log('0 - exit')
    console.log('? - help')
}

function getUserMove(moves) {
    let userMove
    do {
        userMove = conif.getConsoleInput('Enter your move: ', false)
    } while (!(checkUserMove(userMove, moves)))

    for (let i = 1; i <= moves.length; i++) {
        if (i == userMove) userMove = moves[i - 1]
    }

    return userMove
}

function checkUserMove(move, moves) {
    if (move == 0) process.exit(1)
    if (move == '?') {
        new Table(moves).getTable()
    } else if (move >= '1' && move <= moves.length.toString()) {
        return true
    } else {
        console.log('Error! Enter the correct number!')
        return false
    }
}

export default GenHMAC