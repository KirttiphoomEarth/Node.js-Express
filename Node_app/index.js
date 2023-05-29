
// Node
/*const http = require('http')
const fs = require('fs')
const url = require('url')

const indexPgae = fs.readFileSync(`${__dirname}/templates/index.html`, 'utf-8')
const productpage1 = fs.readFileSync(`${__dirname}/templates/product1.html`, 'utf-8')
const productpage2 = fs.readFileSync(`${__dirname}/templates/product2.html`, 'utf-8')
const productpage3 = fs.readFileSync(`${__dirname}/templates/product3.html`, 'utf-8')


const server = http.createServer((req, res)=>{
    
    const {pathname, query} = url.parse(req.url, true)
    //const pathName = req.url
    if(pathname === "/" || pathname === "/home"){
        res.end(indexPgae)
    }
    else if(pathname === "/product"){
        console.log(query.id)
        if(query.id === "1"){
            res.end(productpage1)
        }
        else if(query.id === "2"){
            res.end(productpage2)
        }
        else if(query.id === "3"){
            res.end(productpage3)
        }else{
            res.writeHead(404)
            const html = `
            <h1>404</h1>`
            res.end(html)
        }
    }
    else{
        res.writeHead(404)
        const html = `
        <h1>404</h1>`
        res.end(html)
    }
    
})

server.listen(3000, 'localhost',()=>{
    console.log("PORT 3000")
})*/

// express
const express = require('express')
//const path = require('path')
const router = require('./Router/myRouter')

const app = express()   //app เป็นคนจักการเรื่อง path และ URL
//const router = express.Router() //Router เป็นคนจัดการรับส่งข้อมูล

//const indexPgae = path.join(__dirname, "/templates/index.html")

// router.get('/', (req, res)=>{      //app.use ใช้ได้แค่ 1-2 path ถ้าเยอะใช้ get หรือ router แทน
//     res.status(200)
//     res.type('text/html')
//     res.sendFile(indexPgae)              

// })

// router.get('/product', (req, res)=>{              
//     res.send("Hello Kub non ๆ")
// })

app.use(router)

app.listen(3000,()=>{
    console.log("Run...")
})