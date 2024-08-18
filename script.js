let onOff = false;
allowedEntry = true;

function encenderApagar() {
    let buttons = document.getElementsByClassName('btn');

    if (onOff == false) {
        document.getElementById('display').style.backgroundColor = "yellowgreen";
        document.getElementById('onOff').value = 'Off';
        document.getElementById('onOff').style.backgroundColor = 'orange';
        setTimeout(() => {
            document.getElementById('display').value = "0";

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

        document.getElementById('display').value = ""
        document.getElementById('display').style.backgroundColor = "gray";
        document.getElementById('onOff').value = 'On';
        document.getElementById('onOff').style.backgroundColor = 'green';
        onOff = false;
        allowedEntry = false;
    }

}

function ingresarDato(valor) {
    if (allowedEntry == false) {
        document.getElementById('display').value = '';
    } else {

        if (document.getElementById('display').value == "0") {
            document.getElementById("display").value = '';
        }
        document.getElementById("display").value += valor;
    }
}

function borrar() {
    if (allowedEntry == false) {
        document.getElementById("display").value = "";
    } else {

        document.getElementById("display").value = "0";
    }
}

function calcular() {
    if (allowedEntry == false) {
        document.getElementById("display").value = "";
    } else {
        const valorDisplay = document.getElementById('display').value;
    try {
        const resultado = eval(valorDisplay);
        console.log(resultado);
        document.getElementById('display').value = resultado;
    } catch (error) {
        console.log("Error: " + error.message);
        document.getElementById('display').value = "Error";
    }
    }
}

