let onOff = false;
let ingresoPermitido = true;
let ResultadoMostrado = false;
let displayById = document.getElementById('display');
let onOffById = document.getElementById('onOff');

function encenderApagar() {
    let buttons = document.getElementsByClassName('btn');

    if (onOff == false) {
        displayById.style.backgroundColor = "yellowgreen";
        onOffById.value = 'Off';
        onOffById.style.backgroundColor = 'orange';
        onOffById.style.cssText = "background-color:orange; font-weight: bold; color: black"
        setTimeout(() => {
            displayById.value = "0";

        }, 500);
        onOff = true;
        ingresoPermitido = true;
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].disabled = false;
        };

    } else {

        for (var i = 0; i < buttons.length; i++) {
            buttons[i].disabled = true;
        };

        displayById.value = ""
        displayById.style.backgroundColor = "gray";
        onOffById.value = 'On';
        onOffById.style.cssText = "background-color:green; font-weight: bold; color: white"
        onOff = false;
        ingresoPermitido = false;
    }

}

function ingresarDato(valor) {
    if (ingresoPermitido == false) {
        displayById.value = '';
    } else {

        if (displayById.value == "0") {
            displayById.value = '';
        } if (!ResultadoMostrado) {
            displayById.value += valor;
        } else {
            displayById.value = valor;
            ResultadoMostrado = false
        }
    }
}
function ingresarOperador(valor) {
    if (ingresoPermitido == false) {
        displayById.value = '';
    } else {
        displayById.value += valor;
        ResultadoMostrado = false
    }
}

function borrar() {
    if (ingresoPermitido == false) {
        displayById.value = "";
    } else {

        displayById.value = "0";
    }
}

function calcular() {
    console.log(displayById.value)
    if (ingresoPermitido == false) {
        displayById.value = "";
    } else {
        const valorDisplay = displayById.value;
        try {
            const resultado = eval(valorDisplay);
            console.log(resultado);
            displayById.value = resultado;
        } catch (error) {
            console.log("Error: " + error.message);
            displayById.value = "Error";
        }
    }
    ResultadoMostrado = true;
}

