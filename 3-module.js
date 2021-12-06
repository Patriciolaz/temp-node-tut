//Commonjs - every file is module (by default)
//Module - Encapsulated Code (only share minimum)


const names = require('./4-names-modules')
const sayHi = require ('./5-utils-modules')
const data  = require ('./6-alternative-flavors')

require('./7-mindgrenade')

console.log(data)
sayHi('susan')
sayHi(names.john)
sayHi(names.peter)

