const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descipcion de la tarea por hacer'
}

const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca como completado o pediente una tarea'
}


const  argv  = require("yargs")
.command('crear', 'comando para crear una tarea', 
{
    descripcion
})
.command('actualizar', 'Actualiza el estado completo de una tarea',
{
    descripcion,
    completado
})
.command('borrar', 'comando para borrar una tarea', 
{
    descripcion
})
.help()
.argv;

module.exports = {
    argv
}
