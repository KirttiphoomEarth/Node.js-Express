// //Block sysm
// const fs = require('fs')

// const data = fs.readFileSync('./file/input.txt', 'utf-8')
// console.log(data)

// const outputText = `Hello word\n ${data} \n Edit File new ${new Date()}`
// fs.writeFileSync("./file/output.txt", outputText)

//Non block asysn
const fs = require('fs')

fs.readFile('./file/input.txt', 'utf-8', (err, data)=>{
    if(err) return console.log("ERROR", err)
    const outputText = `Hello word\n ${data} \n Edit File new ${new Date()}`
    fs.writeFile('./file/output.txt', outputText, err=>{
        if(err) return console.log("ERROR", err)
        console.log("end")
    })
    console.log(data)
})

//const outputText = `Hello word\n ${data} \n Edit File new ${new Date()}`
//fs.writeFileSync("./file/output.txt", outputText)
