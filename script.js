
let display = '';

function insert(num) {
    if (num === '=') {
        calcular();
    } else {
        display += num;
        document.getElementById('resultado').textContent = display;
    }
}

function C() {
    // Apagar 1 número (último caractere)
    display = display.slice(0, -1);
    document.getElementById('resultado').textContent = display;
}

function CE() {
    // Apagar tudo
    display = "";
    document.getElementById('resultado').textContent = display;
}

function calcular() {
    try {
        // Avaliar a expressão
        let resultado = eval(display);
        display = resultado.toString();
        document.getElementById('resultado').textContent = display;
    } catch (erro) {
        document.getElementById('resultado').textContent = 'Erro';
        display = '';
    }
}