let registros = [];

function agregarRegistro(){
    
    let nombre = document.getElementById("dato_nombre_usuario").value;
    // let edad = document.getElementById("dato_edad_usuario").value;
    let contrasena = document.getElementById("dato_contrasena").value;
    let caracteresUsuario = /^[a-zA-Z\s]+$/;

    // =================== validar nombre ======================

        if (!caracteresUsuario.test(nombre)){
            alert("el usuarios solo puede contener letras de la A a la Z");
            return false;
        }
    
        else if (nombre != nombre.trim()) {
            alert("el usuario no debe incluir espacios al comienzo ni final");
            return false;
        }
        
        else if (nombre != capitalize(nombre)) {
            alert("Usuario debe ingresar en modo capital");
            return false;
        }
        function capitalize(nombre) {
            return nombre.split(" ").map((item) => item.charAt(0).toUpperCase() + item.substring(1).toLowerCase()).join(" ");
        }
        
// ======================== edad ===========================

        // if (Number.isInteger(edad)){
        //     alert("debe ser un numero");
        //     return false;
        // }
    
        // else  if (edad<0){
        //     alert("debe ser un numero positivo");
        //     return false;
        // }
    
        // else if (edad < 13 || edad >= 110){
        //     alert("debe ser mayor o igual a 13 y menor de 110");
        //     return false;
        // }
// ====================== contraseña =========================

var caracteres = /^[a-z0-9]+$/i;
    var validar = caracteres.test(contrasena);

    if (!validar){
        alert("solo se permiten caracteres alfanumericos");
        return validar;
    }
    else if (contrasena.length < 6 ){
        alert("solo se permiten mínimo 6 caracteres");
        return !validar;
    }

//   ======= instancia objeto =======
    else{
        let usuario = {
            usuario : nombre,
            // edad : edad,
            contrasena : contrasena,
        };
        document.getElementById("dato_nombre_usuario").value = "";
        // document.getElementById("dato_edad_usuario").value = "";
        contrasena = document.getElementById("dato_contrasena").value = "";

//   ======== objeto envio =========

        registros.push(usuario);  
        // console.log(registros);

        console.log(registros);
        return true;
    
    }
}



function iniciar_sesion(usuario, contrasena, rcaptcha){
    //  ======== validar usuario ========    
        
        let isUsuario = false;
        for (i = 0; i < registros.length; i++) {

            if (registros[i].usuario==usuario && registros[i].contrasena==contrasena){
                isUsuario = true;
                break;
            }

        }

        let isCaptcha = false;
        if (validar_captcha(rcaptcha)){
            isCaptcha = true;
        }
        

        if (isUsuario && isCaptcha){
            return true;
        }else{
            return false;
        }
        
    
}


    
function validar_captcha(rcaptcha){

    // this.rcaptcha = rcaptcha;
    comparar = "bogota";
    rcaptcha = rcaptcha.toLowerCase();

    if ((comparar == rcaptcha) || rcaptcha == "bogotá" ){
        return true;
    }
    else {
        return false;
    }

}


module.exports.registros = registros;
module.exports.validar_captcha = validar_captcha;
module.exports.iniciar_sesion = iniciar_sesion;