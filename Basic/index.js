// test Module
// const test_module = require('./Module/Module_test.js') // สร้างตัวแปรมาเก็บ
// const getCurrentTime = require('./Module/Module_test.js').getCurrentTime //import ฟังชั่นก์มา

// console.log(getCurrentTime())
// console.log(test_module.cal(1, 4))

//Block
const fs = require('fs')

const data = fs.readFileSync('./file/input.txt', 'utf-8')
console.log(data)

const outputText = `Hello word\n ${data} \n Edit File new ${new Date()}`
fs.writeFileSync("./file/output.txt", outputText)
