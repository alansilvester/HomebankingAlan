//Declaración de variables
var nombreUsuario = "Alan Silvester";
var saldoCuenta = 20000;
var limiteExtraccion = 5000;
var agua = 350;
var telefono = 425;
var luz = 210;
var internet = 570;
var cuantaAmiga1 = 1234567;
var cuentaAmiga2 = 7654321;


var contraseña = 1234;
var verificarCodigo = 1234;




function validarNumeros(monto) {
    if ((monto == null) || Number.isNaN(monto)) {
        alert("El monto ingresado no es valido")
    }

}




//Ejecución de las funciones que actualizan los valores de las variables en el HTML.
window.onload = function () {
    iniciarSesion();
    cargarNombreEnPantalla();
    actualizarSaldoEnPantalla();
    actualizarLimiteEnPantalla();
}


//Funciones que tenes que completar
function cambiarLimiteDeExtraccion() {
    var actualizarLimite = (parseInt(prompt("Ingrese nuevo limite de extraccion diario")));
    validarNumeros(actualizarLimite);
    if (limiteExtraccion = actualizarLimite) {
        actualizarLimiteEnPantalla();
        alert("Su límite de extracción diario se actualizo a: " + limiteExtraccion);
    }

}

function extraerDinero() {
    var extraccion = parseInt(prompt("Ingrese un monto para extraer"));
    validarNumeros(extraccion);
    if (extraccion % 100 == 0) {
        if (extraccion <= limiteExtraccion && extraccion <= saldoCuenta) {
            let saldoAnterior = saldoCuenta;
            saldoCuenta -= extraccion;
            alert("Retiró: " + extraccion + "\n" + "Saldo anterior: " + saldoAnterior + "\n" + "Su saldo ahora es de: " + saldoCuenta);
            actualizarSaldoEnPantalla();
            return;
        } else if (extraccion > limiteExtraccion) {
            alert("Su limite de extracción diario son $10000")
            return;
        } else (extraccion > saldoCuenta); {
            alert("Su saldo no es suficiente")
            return;
        }
    } else {
        alert("Ingrese monto multiplo de 100");
        return;

    }



}

function depositarDinero() {
    var deposito = parseInt(prompt("Ingrese el monto que quiere depositar."));
    validarNumeros(deposito);
    if (saldoCuenta += deposito) {
        actualizarSaldoEnPantalla();
        alert("Deposito " + deposito + "\n" + "Su saldo se actualizó a: " + saldoCuenta);
    }
}
function pagarServicio() {
    var servicio = (parseInt(prompt("Ingrese el número que corresponda con el servicio que quiere pagar" + "\n" +
        "1 - Agua" + "\n" +
        "2 - Luz" + "\n" +
        "3 - Internet" + "\n" +
        "4 - Teléfono")))
    validarNumeros(servicio);
    if (saldoCuenta > agua && saldoCuenta > luz && saldoCuenta > internet && saldoCuenta > telefono) {
        switch (servicio) {
            case 1:
                var saldoAnterior = saldoCuenta;
                saldoCuenta -= agua;
                actualizarSaldoEnPantalla();
                alert("Servicio de agua abonado" + "\n" +
                    "Saldo anterior: " + saldoAnterior + "\n" +
                    "Dinero Descontado: 350" + "\n" +
                    "Saldo actual: " + saldoCuenta);

                break;

            case 2:
                var saldoAnterior = saldoCuenta;
                saldoCuenta -= luz;
                actualizarSaldoEnPantalla();
                alert("Servicio de luz abonado" + "\n" +
                    "Saldo anterior: " + saldoAnterior + "\n" +
                    "Dinero Descontado: 210" + "\n" +
                    "Saldo actual: " + saldoCuenta);

                break;

            case 3:
                var saldoAnterior = saldoCuenta;
                saldoCuenta -= internet;
                actualizarSaldoEnPantalla();
                alert("Servicio de internet abonado" + "\n" +
                    "Saldo anterior: " + saldoAnterior + "\n" +
                    "Dinero Descontado: 570" + "\n" +
                    "Saldo actual: " + saldoCuenta);

                break;

            case 4:
                var saldoAnterior = saldoCuenta;
                saldoCuenta -= telefono;
                actualizarSaldoEnPantalla();
                alert("Servicio de telefono abonado" + "\n" +
                    "Saldo anterior: " + saldoAnterior + "\n" +
                    "Dinero Descontado: 425" + "\n" +
                    "Saldo actual: " + saldoCuenta);

                break;

            default: alert("Debe ingresar un numero entre 1 y 4")
                break;
        }
    } else {
        alert("No cuenta con saldo suficiente para abonar el serivico.");
    }


}

function transferirDinero() {

    var transferencia = parseInt(prompt("Ingrese un monto que quere transferir."));
    validarNumeros(transferencia);
    if (transferencia % 100 == 0) {
        if (transferencia <= saldoCuenta) {

            var cuenta = parseInt(prompt("ingrese numero de cuenta"))
            if (cuenta == cuantaAmiga1 | cuenta == cuentaAmiga2) {
                var saldoAnterior = saldoCuenta;
                saldoCuenta -= transferencia;
                alert("Transferiste: " + transferencia + "\n" + "Saldo anterior: " +
                    saldoAnterior + "\n" + "Su saldo ahora es de: " + saldoCuenta + "\n" +
                    "Transfirio a cuenta: " + cuenta);
                actualizarSaldoEnPantalla();
                return;
            } else {
                alert("La cuenta no es correcta")
                return;
            }

        } else (transferencia > saldoCuenta); {
            alert("Su saldo no es suficiente para realizar trasnferencia")
        }
    } else {
        alert("Ingrese monto multiplo de 100");
        return;
    }


}




function alertaCodigoIncorrecto(mensaje) {
    alert(mensaje);
    nombreUsuario = "";
    saldoCuenta = 0;
    actualizarSaldoEnPantalla();
    actualizarNombreEnPantalla("");
}

function iniciarSesion() {
    var verificarCodigo = prompt("Ingresa tu código de verificación:");
    if (verificarCodigo == null || verificarCodigo == "") {
        alertaCodigoIncorrecto("Usted no ingreso un código de verficación.");
    } else {
        if (verificarCodigo == contraseña) {
            alert(
                "Bienvenido/a " +
                nombreUsuario +
                " ya puedes comenzar a realizar operaciones."
            );
        } else {
            alertaCodigoIncorrecto(
                "Código incorrecto." + "\n\n" +
                "Tu dinero ha sido retenido por cuestiones de seguridad." + "\n\n"
            );
        }
    }
}


//Funciones que actualizan el valor de las variables en el HTML
function cargarNombreEnPantalla() {
    document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
}

function actualizarSaldoEnPantalla() {
    document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
}

function actualizarLimiteEnPantalla() {
    document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + limiteExtraccion;
}