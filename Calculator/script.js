/*var display = ''
function getNvalue(button) {
    let value = parseInt(button.value);
    display += value
    console.log(display)
    document.getElementById('display').innerHTML = display;
}
function op(op) {

    if(display[display.length - 1] !== '+'  && display[display.length - 1] !== '-'  && display[display.length - 1] !== '/'  && display[display.length - 1] !== '*' ){

        display += op.value
        console.log(display)
        document.getElementById('display').innerHTML = display
    }
}

function clr(clr) {
    display = ''
    document.getElementById('display').innerHTML = '0'

}


function getans() {
    eval(display);
    let dis = eval(display)
    console.log(dis)
    document.getElementById('display').innerHTML = dis
}








document.addEventListener("DOMContentLoaded", function() {
    const button1 = document.getElementById('button1');
    const button2 = document.getElementById('button2');

    button1.addEventListener('click', function() {
        button1.classList.add('hidden');
        button2.classList.remove('hidden');
    });

    button2.addEventListener('click', function() {
        button2.classList.add('hidden');
        button1.classList.remove('hidden');
    });
});
*/





function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function backspace() {
    let display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function calculate() {
    let display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}


function toggleScientific() {
    const scientificButtons = document.querySelector('.scientific-buttons');
    scientificButtons.classList.toggle('hidden');
}
