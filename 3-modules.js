// COmmonJs, every file is a module (by default)
// Modules- Encapsulated code(only share minimum)

const names = require('./4-names')
const sayHi = require('./5-utils')


 sayHi(names.john)
 sayHi(names.peter)
 sayHi("susan")