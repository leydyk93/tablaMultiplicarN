
const argv = require('./configs/yargs').argv
const colors = require('colors')
const { crearArchivo, listarTable } = require('./Multiplicar/multiplicar');

// let parametro = process.argv[2]
// let base = parametro.split("=")[1]

let comando = argv._[0]
console.log(argv)
switch (comando) {
    case "listar":
        listarTable(argv.base, argv.limite).then(resp=>{
            console.log("=================".green)
            console.log(`${argv.base}`.green)
            console.log("=================".green)
            console.log(resp)
        })
        break;
    case "crear":
        crearArchivo(argv.base, argv.limite).then(archivo=>{
            console.log(archivo)
        }).catch(err => {
            console.log(err)
        })
        break;

    default:
        console.log("comando no reconocido")
        break;
}



