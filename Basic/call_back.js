//------------------ Call Back -------------------
function cal(x, y, callback){
   console.log("กำลัง...")
    setTimeout(()=>{
        const s =  x+y
        callback(s)
    },3000)
}

function display(resu){
    console.log(`ผลบวก = ${resu}`)
}

cal(1, 2, display)