/* Constantes */
const formulario = $("#modalForm");
const formRows=$(".form-group")
const nombre = $("#primerNombre");
const apellido = $("#primerApellido");


/* Funciones */

function validarNombre(str){
    if(str.search(/[0-9]/)>=0){
        return false;
    }
    return true;
}

function validarInput(element){
    let texto = element.value;
    if(!validarNombre(texto)){
        element.value="";
        alert("Por favor introducir solo letras");
    }
}



/* Eventos del formulario */

formulario.on("submit",function(){
    alert("Gracias "+formRows[0].children[1].value+", uno de nuestros asesores se pondra en contacto contigo pronto")
});

nombre.on("change",function(){
    validarInput(nombre[0]);
});

apellido.on("change",function(){
    validarInput(apellido[0]);
})









 