var display = ''
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