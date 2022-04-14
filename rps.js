import GenKey from './key.js'

let allUniqe = true
let args = [];
process.argv.slice(2).forEach(x => {
    if (args.indexOf(x) != -1) {
        console.error('Error! The elements should not be repeated!')
        allUniqe = false
        return
    } else {
        args.push(x);
    }
})


if (allUniqe) {
    if (args.length < 3) {
        console.error('Error! There must be at least 3 arguments!')
    } else if (args.length % 2 == 0) {
        console.error('Error! There must be an odd number of arguments!')
    } else {
        let moves = new GenKey(args)
        moves.key
    }
}