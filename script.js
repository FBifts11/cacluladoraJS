function ingresarDato(valor) {
    document.getElementById("display").value += valor;
}

function borrar() {
    document.getElementById("display").value = "";
}

function calcular() {
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