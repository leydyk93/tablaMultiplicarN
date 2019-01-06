const fs = require('fs');
const colors = require('colors/safe');

let listarTable = (base, limite) => {
   
    return new Promise((resolve, reject)=>{
        let data = ''
        if (!Number(base) || (!Number(limite) && limite>1)){
            reject(`la base ${base}  y el limite deben ser numeros, el limite debe ser mayor a 1`)
            return 
        }
        for(let i=1; i<=limite; i++){
            data += `${base} * ${i} = ${base*i} \n`
        }
        resolve (data) 
    })
    
}
let crearArchivo = (base, limite = 10) =>{
    let data = ''
    return new Promise((resolve, reject)=>{

        if (!Number(base)){
            reject(`la base ${base} no es un número`)
            return 
        }
        for(let i=1; i<=limite; i++){
            data += `${base} * ${i} = ${base*i} \n`
        }
        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) 
                reject(err)
            else 
                resolve(colors.green(`tabla-${base}.txt archivo creado con éxito`))
            
          });
    })
}

module.exports = {
    crearArchivo, 
    listarTable
}
