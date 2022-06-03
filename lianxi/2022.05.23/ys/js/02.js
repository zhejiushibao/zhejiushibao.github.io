const e = document.getElementById('e');
const s = document.getElementById('s');

let a = 0;
let b = '%';
let u = 10;

let y = setInterval(() => {
    e.innerText = (a++) + b
    console.log(a);

    if (a === 101) {
        e.style.display = "none"
        clearInterval(y)
    }
}, 50);

let h =setInterval(() => {
    u = u - 0.06;
    s.style.filter = "blur("+u+'px'+")";
    if(u<=0){
        u=0;
        clearInterval(h)
    }
    console.log(u);

}, 30);







