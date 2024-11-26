let display = document.getElementById('display');
let memory = 0;

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = 'Error';
    }
}

function squareRoot() {
    try {
        display.value = Math.sqrt(eval(display.value));
    } catch (e) {
        display.value = 'Error';
    }
}

function sin() {
    try {
        display.value = Math.sin(eval(display.value) * Math.PI / 180);
    } catch (e) {
        display.value = 'Error';
    }
}

function cos() {
    try {
        display.value = Math.cos(eval(display.value) * Math.PI / 180);
    } catch (e) {
        display.value = 'Error';
    }
}

function tan() {
    try {
        display.value = Math.tan(eval(display.value) * Math.PI / 180);
    } catch (e) {
        display.value = 'Error';
    }
}

function memorySave() {
    memory = parseFloat(display.value);
}

function memoryRecall() {
    display.value = memory;
}

function memoryClear() {
    memory = 0;
}
