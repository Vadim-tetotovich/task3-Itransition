import cTable from 'console.table';
import Rules from './rules.js'

class Table {

    constructor(moves) {
        this.moves = moves
    }

    getTable() {
        let rule = new Rules(this.moves)
        let columNames = ['']
        let rows = []
        this.moves.forEach(el => {
            columNames.push(el)
            let row = []
            row.push(el)
            this.moves.forEach(element => {
                row.push(rule.getRules(element, el))
            });
            rows.push(row)
        });
        console.table(columNames, rows);
    }
}

export default Table