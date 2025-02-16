let disp = document.getElementById("ip");

function cal() {
    try {
        disp.value = eval(disp.value);
    } catch (error) {
        disp.value = 'ERROR';
    }
}

function display(ip) {
    disp.value += ip;
}

function clearscreen() {
    disp.value = "";
}
