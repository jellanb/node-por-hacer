const  argv  = require("./config/yargs").argv;

const porHacer = require("./por-hacer/por-hacer");
const colors = require('colors');

let comando = argv._[0];

switch (comando) {
    case 'crear':
        console.log(porHacer.crear(argv.descripcion));
        break;
    case 'listar':
        const taskList = porHacer.getListadoTareas();
        for (const tarea of taskList) {
            console.log('========Por hacer========'.green)
            console.log(tarea.descripcion);
            console.log('Estado: ', tarea.completado);
            console.log('========================='.green)
        }
        break;
    case 'actualizar':
        console.log(porHacer.actualizar(argv.descripcion, argv.completado));
        break;
        case 'borrar':
                console.log(porHacer.borrar(argv.descripcion));
                break;
    default:
        console.log('Comando no es reconocido');
}

