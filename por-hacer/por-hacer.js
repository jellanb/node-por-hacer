const fs = require('fs');

let listadoPorHacer = [];

const guardarDB = (listadoPorHacer) => {
    const data = JSON.stringify(listadoPorHacer);

    fs.writeFile('./db/data.json', data, (err) => {
        if(err)
        {
            throw new Error('no se puedo guardar');
        }
        console.log('tarea guardada.');
    });
}

const cargarDB = () => {
    
    try {
        listadoPorHacer = require("../db/data.json");
    } catch (error) {
        listadoPorHacer = [];
    }
}

const getListadoTareas = () => {
    try {
        cargarDB();
       return listadoPorHacer;
    } catch (error) {
        console.log(error);
    }

}

const crear = (descripcion) => {

    cargarDB();

    let porHacer = {
        descripcion,
        completado: false
    };

    listadoPorHacer.push(porHacer);
    guardarDB(listadoPorHacer);

    return porHacer;

}

const actualizar = (descripcion, completado) => {
    cargarDB();

    const index = listadoPorHacer.findIndex( tarea => tarea.descripcion === descripcion );
    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB(listadoPorHacer);
        return true;
    }else{
        return false;
    }    
}

const borrar = (descripcion) => {
    cargarDB();

    const newListadoPorHacer = listadoPorHacer.filter( tarea =>{        
        return tarea.descripcion !== descripcion
    })
    console.log(newListadoPorHacer.length);
    console.log(listadoPorHacer.length);
    if (newListadoPorHacer.length !== listadoPorHacer.length) {       
        guardarDB(newListadoPorHacer);
        return true;
    }else{
        return false;
    }    
    
}

module.exports = {
    crear,
    getListadoTareas,
    actualizar,
    borrar
}