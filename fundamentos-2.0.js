//Jonathan Ramirez

//LABORATORIO N° 03
//Pagina web de referencia: FYBECA (https://www.fybeca.com/)


//1. Tipos de datos compuestos

let productosFybeca = ['aspirina','ibuprofeno','paracetamol'];  //array 

let vitamina = {
    nombre:"Kaloba Com. 20 Mg C/15 Caja",       //objeto 
    precio: 10.57
}

//2. Strings 

    let nombreProducto = "Redoxon Total Tabletas Efervescentes T/30";

    //propiedades
    console.log(nombreProducto.length);

    //metodos
    console.log(nombreProducto.trim());  //quita espacios al inicio y el final
    console.log(nombreProducto.includes('30'));  //verifica si el numero existe en el password
    console.log(nombreProducto.toUpperCase());   //para convertir el texto en mayusculas
    console.log(nombreProducto.toLocaleLowerCase());  //para convertir en minusculas
    nombreProducto

// ----------------- ES6 ------------------------------------------
    //Template String : concatenar, mezclar texto con variables

    console.log(`El producto que seleecciono es: ${nombreProducto}`);

//3. Casting

let serumEffaclar_precio = "42.77"
let gelLimpiador_precio = 33.16

console.log(+serumEffaclar_precio+gelLimpiador_precio)


//4. Operador ternario

let stockProducto = 50;
let cantidadPedido = 30;

let estadoStock = cantidadPedido <= stockProducto ? "Disponible" : "Agotado";
console.log(estadoStock);



//5. Comparacion estricta

let idUsuario_fybeca = "123";
idUsuario_fybeca === "123" ? console.log("Usuario encontrado") : console.log("Usuario no existe");

//6. LOOP

const productosPiel = ['Protector Solar Sun Fresh Derm Care 40 G 1 Unidad', "Sérum Triple Efecto Dermopute Oil Control", "Crema Facial Hyaluron Filler Elasticity"];
productosPiel.forEach((producto) => {console.log(producto)});   //for each : recibe ptra funcion

//7. FUNCIONES

    //Funcion Anonima y Autoejecutada 
    (function(){
        console.log("Funcion anonima")
    })()

    //Funcion Declarada

    function getAvatar(){
        console.log('/logoFyebga/user.png');
    }

    getAvatar()

    //Funcion expresada
    const conecctionBDD = function(){
        console.log("Conexión exitosa JJ");
    }

//8. Argumentos

const validarEmailAndToken = function(email,token){
    console.log(`El token es ${token} y su email es ${email}`);

}
validarEmailAndToken('jonathan@gmail.com','555')


//9. Objetos

const protector_solar = {
    nombre: "Protector Solar Umbrella Emulsión Plus 120 G Spray",
    precio: 17.84,
    status: true
}

//10. Desestructuracion

    const {nombre,precio,status:estado} = protector_solar 
    console.log(`El producto: ${nombre} tiene un precio de $${precio}`);

    //Propiedades
    protector_solar.logo = 'fybeca.png'   //se puede añadir una nueva variable
    console.log(protector_solar)
    delete protector_solar.status             //asi se elimina algo especifico de un objeto
    console.log(protector_solar)


//11.Operador Spread

    const producto1 = {
        nombreProducto1: "Pack De Pañitos Húmedos Con Aceite De Emú Unidad",
        precio1: 3.79
    }

    const producto2 = {
        nombreProducto2: "Toallitas Húmedas Para Bebé Tripack One & Done Lim...",
        precio2: 15.44
    }

    const compraUsuario = {...producto1,...producto2}  // operador SPREAD para combinar los objetos
    console.log(compraUsuario)


    