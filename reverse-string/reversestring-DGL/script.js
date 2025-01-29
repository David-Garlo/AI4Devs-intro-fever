function invertirTexto() {
    const inputText = document.getElementById('inputText').value;
    const resultText = inputText.split('').reverse().join('');
    document.getElementById('result').textContent = resultText;
}

function copiarAlPortapapeles() {
    const resultText = document.getElementById('result').textContent;

    if (resultText) {
        navigator.clipboard.writeText(resultText)
            .then(() => {
                alert("Texto copiado al portapapeles");
            })
            .catch(err => {
                alert("Error al copiar al portapapeles: " + err);
            });
    } else {
        alert("Primero invierte el texto.");
    }
}