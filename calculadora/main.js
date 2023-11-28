var resultado = document.getElementById('result');


function inserir(valor) {
    resultado.innerHTML += valor;
}

function limpar() {
    resultado.innerHTML = '';
}

function confirmar() {
    if (resultado.textContent != 'Error') {
        document.getElementById('result').innerHTML = eval(resultado.innerHTML);
    }
}

