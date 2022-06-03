const q = document.getElementsByClassName('b')[0];
const w = document.getElementsByClassName('b')[1];
const e = document.getElementsByClassName('b')[2];
const icon = document.getElementsByClassName('icon')[0];
const iconi = document.getElementsByClassName('icon')[1];
const iconia = document.getElementsByClassName('icon')[2];
let v = 0;
const y = setInterval(() => {
    q.innerText = v++;
    if (v === 101) {
        clearInterval(y)
        icon.style.width = '8em';
        icon.style.height = '8em';
        icon.style.transitionDuration = '2s';

        if (v === 100) {
            icon.style.width = '5em';
            icon.style.height = '5em';
            v = 101;
        }
    }

}, 5);

let n = 0;
const s = setInterval(() => {
    w.innerText = n++;
    if (n === 101) {
        clearInterval(s)
        iconi.style.width = '8em';
        iconi.style.height = '8em';
        iconi.style.transitionDuration = '2s';

    }

}, 5); 

let m = 0;
const l = setInterval(() => {
    e.innerText = m++;
    if (m === 101) {
        clearInterval(l)
        iconia.style.width = '8em';
        iconia.style.height = '8em';
        iconia.style.transitionDuration = '2s';

    }

}, 5); 
