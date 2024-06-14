// calculate function

function calculate() {
    let display = document.getElementById('display');

    try {
        display.textContent = eval(display.textContent);
    } catch (error) {
        display.textContent = 'Error';
    }
}

// geting values from all the buttons 
function getNvalue(value) {
    let display = document.getElementById('display');
    let lastChar = display.textContent.slice(-1);
    if (display.textContent == '0') {
        display.textContent = value;
        return;
    }
    if (lastChar === '+' || lastChar === '-' || lastChar === '*' || lastChar === '/') {
        if (value === '+' || value === '-' || value === '*' || value === '/') {
            return;
        }
    }
    display.textContent += value;
}


//  scientific buttons on/off function
function scientifiBtn() {
    let btn = document.getElementById('scc');
    if (btn.style.display === 'none' || btn.style.display === '') {
        btn.style.display = 'flex';

    } else {
        btn.style.display = 'none';
    }
}

//                 clearing display
function clearDisplay() {
    document.getElementById('display').textContent = '0';
}

// button functiion for backspace
function backspace() {
    let display = document.getElementById('display');
    display.textContent = display.textContent.slice(0, -1);
}

// Completed