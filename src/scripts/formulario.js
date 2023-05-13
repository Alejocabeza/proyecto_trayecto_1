// const formulario = document.getElementById('formulario');
// const inputs = document.querySelectorAll('#formulario input')

// const expresiones = {
// 	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
// 	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
// 	password: /^.{4,12}$/, // 4 a 12 digitos.
// 	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
// 	telefono: /^\d{10}$/ // 7 a 14 numeros.
// }

// const validarFormulario = (e) => {
//     switch (e.target.name){
//         case "name":
//             if(expresiones.usuario.test(e.target.value)){
//                 document.getElementById('cont1-signin1').classList.remove('cont-signin-incorrecto');
//                 document.getElementById('cont1-signin1').classList.add('cont-signin-correcto');
//                 document.querySelector('#icon-error use').add('check-circle-fill');
//                 document.querySelector('#icon-error use').remove('x-circle-fill');
//             }else{
//                 document.getElementById('cont1-signin1').classList.add('cont-signin-incorrecto');
//                 document.getElementById('cont1-signin1').classList.remove('cont-signin-correcto');
//                 document.querySelector('#icon-error use').classList.add('x-circle-fill');
//                 document.querySelector('#icon-error use').classList.remove('check-circle-fill');
//             }
//         break;
//         case "email":
            
//         break;
//         case "signin-pass":
            
//         break;
//         case "signin-pass-confirm":
            
//         break;
//         case "signin-phone":
            
//         break;
//     }
// }

// inputs.forEach((input) =>{
//     input.addEventListener('keyup', validarFormulario);
//     input.addEventListener('blur', validarFormulario);
// })


// formulario.addEventListener('submit', (e) =>{
//     e.preventDefault();
// })

// function tomaDatos(){
//     let xnombre = document.getElementById('nombre').value;
//     let xemail = document.getElementById ('email').value;
//     let xpass = document.getElementById ('signin-pass').value;
//     let xphone = document.getElementById ('signin-phone').value;
//     let xdate = document.getElementById ('signin-date1').value;
//     let mensaje = 'Hola Sr.(a) '+xnombre+', su correo electronico es: '+xemail+', su contraseña es: '+xpass+', su numero de telefono es: '+xphone+', su fecha de nacimiento es: '+xdate1+', desea continuar con el proceso de registro';
//     alert(mensaje);
//     console.log(mensaje);
// }

function valida(){
    let xnombre1 = document.getElementById('nombre').value;
    let xemail1 = document.getElementById ('email').value;
    let xpass1 = document.getElementById ('signin-pass').value;
    let xphone = document.getElementById ('signin-phone').value;
    let xdate2 = document.getElementById ('signin-date1').value;

    var validacorreo= /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
    var nombreval=/^[a-zA-ZÀ-ÿ\s]{1,40}$/
    // if(xnombre1 ==='' || xemail1 === '' || xpass1 === '' || xphone1 === '' || xdate2 === ''){
    //     alert('Uno de los campos se encuentra vacio, por favor complete el formulario');
    //     return false;
    // }
    if(isNaN(xphone)){
        alert('Ingrese un numero de teléfono valido');
    };
    if(xphone.maxlength=10){
        alert('Longitud de caracteres no valida');
    };

}
