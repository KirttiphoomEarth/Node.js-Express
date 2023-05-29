const url1 = "eeeee1"
const url2 = "eeeee2"
const url3 = "eeeee3"
const url4 = "eeeee4"
const url5 = "eeeee5"
const connet = true
function deownloadling(url)
{
    return new Promise(function(resolve, reject){
        setTimeout(()=>{
            if(connet)
            {
                resolve(`โหลด ${url} OK`)
            }
            else
            {
                reject("Fall") 
            }
        },1000)
    })
} 
 
// Promise hell
// deownloadling(url1).then(result =>{
//     console.log(result)
//     deownloadling(url2).then(result =>{
//         console.log(result)
//     })
// })

deownloadling(url1).then(result =>{
    console.log(result)
    return deownloadling(url2)
}).then(function(result){
    console.log(result)
    return deownloadling(url3)
}).then(function(result){
    console.log(result)
    //return deownloadling(url3)
})
