const multiplicando= (a,b)=>{
    const result = a*b
    return new Promise ((resolve)=>{
        setTimeout(()=> {
            resolve(result)
    },1000)
})
}
multiplicando(2,2)
    .then (result=>console.log(result + ' resuelto'))