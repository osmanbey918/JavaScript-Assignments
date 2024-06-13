function appendToDisplay(value) {
    document.getElementById('display').textContent += value;
}

function clearDisplay() {
    document.getElementById('display').textContent = '';
}

function backspace() {
    let display = document.getElementById('display');
    display.textContent = display.textContent.slice(0, -1);
}

function calculate() {
    let display = document.getElementById('display');
    try {
        display.textContent = eval(display.textContent);
    } catch (error) {
        display.textContent = 'Error';
    }
}

function toggleScientific() {
    const scientificButtons = document.getElementById('scc');
    scientificButtons.classList.toggle('hidden');
}

function getNvalue(value) {
    let display = document.getElementById('display');
    display.textContent += value;
}

function sc() {
    document.getElementById('scc').style.display = 'block';
}