document.getElementById("form").addEventListener('submit', (e) => {
    converterValores();
    e.preventDefault();
});

function converterValores() {
    var retorno = "";

    var tipoConversao = document.getElementById("tipoConversao");
    var nome = document.getElementById("nome").value;
    var valor = document.getElementById("valor").value;

    if (nome == "") {
        retorno = "Informe seu nome";
    }
    else if (valor == "") {
        retorno = "Informe um valor para converter";
    }
    else if (isNaN(Number(valor))) {
        retorno = "A temperatura deve ser um número";
    }
    else {
        var chave = tipoConversao.value;
        valor = Number(valor);
        
        retorno = "Olá " + nome + '<br/>'
        if (chave == "C-F") {
            retorno += valor.toFixed(2) + " ºC = " + celsiusParaFahrenheit(valor).toFixed(2) + " ºF<br/>";
        }
        else if (chave == "C-K") {
            retorno += valor.toFixed(2) + " ºC = " + celsiusParaKelvin(valor).toFixed(2) + " K<br/>";
        }
        else if (chave == "F-C") {
            retorno += valor.toFixed(2) + " ºF = " + fahrenheitParaCelsius(valor).toFixed(2) + " ºC<br/>";
        }
        else if (chave == "F-K") {
            retorno += valor.toFixed(2) + " ºF = " + fahrenheitParaKelvin(valor).toFixed(2) + " K<br/>";
        }
        else if (chave == "K-C") {
            retorno += valor.toFixed(2) + " K = " + kelvinParaCelsius(valor).toFixed(2) + " ºC<br/>";
        }
        else if (chave == "K-F") {
            retorno += valor.toFixed(2) + " K = " + kelvinParaFahrenheit(valor).toFixed(2) + " ºF<br/>";
        }
    }

    document.getElementById("resultado").innerHTML = retorno;
}

function celsiusParaKelvin(temperatura) {
    return temperatura + 273.15;
}

function fahrenheitParaCelsius(temperatura) {
    return (temperatura - 32) * 5 / 9;
}

function fahrenheitParaKelvin(temperatura) {
    return ((temperatura - 32) * 5 / 9) + 273.15;
}

function celsiusParaFahrenheit(temperatura) {
    return (9 * temperatura / 5) + 32;
}

function kelvinParaCelsius(temperatura) {
    return temperatura - 273.15;
}

function kelvinParaFahrenheit(temperatura) {
    return ((temperatura - 273.15) * 9 / 5) + 32;
}