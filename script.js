let onOff = false;
let allowedEntry = true;
let displayById = document.getElementById('display');
let onOffById = document.getElementById('onOff');

function encenderApagar() {
    let buttons = document.getElementsByClassName('btn');

    if (onOff == false) {
        displayById.style.backgroundColor = "yellowgreen";
        onOffById.value = 'Off';
        onOffById.style.backgroundColor = 'orange';
        setTimeout(() => {
            displayById.value = "0";

        }, 500);
        onOff = true;
        allowedEntry = true;
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
        onOffById.style.backgroundColor = 'green';
        onOff = false;
        allowedEntry = false;
    }

}

function ingresarDato(valor) {
    if (allowedEntry == false) {
        displayById.value = '';
    } else {

        if (displayById.value == "0") {
            displayById.value = '';
        }
        displayById.value += valor;
    }
}

function borrar() {
    if (allowedEntry == false) {
        displayById.value = "";
    } else {

        displayById.value = "0";
    }
}

function calcular() {
    if (allowedEntry == false) {
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
}

