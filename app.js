const fs = require("fs")
const moment = require("moment")

let dados = fs.readFileSync(__dirname + "/dados.txt",'utf8')

console.log(dados)

let data = moment().format("MMM do YY")
console.log(data)