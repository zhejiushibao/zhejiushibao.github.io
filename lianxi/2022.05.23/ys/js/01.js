const a = document.getElementById('a');
const b = document.getElementById('b');
const c = document.getElementById('c');
const d = document.getElementById('d');
const e = document.getElementById('e');
console.log(a);

a.onclick = function () {
    a.style.width = "500px";
    a.style.filter = "blur(0px)";
    b.style.width = "100px";
    b.style.filter = "blur(5px)";
    c.style.width = "100px";
    c.style.filter = "blur(5px)";
    d.style.width = "100px";
    d.style.filter = "blur(5px)";
    e.style.width = "100px";
    e.style.filter = "blur(5px)";

}
b.onclick = function () {
    a.style.width = "100px";
    a.style.filter = "blur(5px)";
    b.style.width = "500px";
    b.style.filter = "blur(0px)";
    c.style.width = "100px";
    c.style.filter = "blur(5px)";
    d.style.width = "100px";
    d.style.filter = "blur(5px)";
    e.style.width = "100px";
    e.style.filter = "blur(5px)";

}
c.onclick = function () {
    a.style.width = "100px";
    a.style.filter = "blur(5px)";
    b.style.width = "100px";
    b.style.filter = "blur(5px)";
    c.style.width = "500px";
    c.style.filter = "blur(0px)";
    d.style.width = "100px";
    d.style.filter = "blur(5px)";
    e.style.width = "100px";
    e.style.filter = "blur(5px)";


}
d.onclick = function () {
    a.style.width = "100px";
    a.style.filter = "blur(5px)";
    b.style.width = "100px";
    b.style.filter = "blur(5px)";
    c.style.width = "100px";
    c.style.filter = "blur(5px)";
    d.style.width = "500px";
    d.style.filter = "blur(0px)";
    e.style.width = "100px";
    e.style.filter = "blur(5px)";

}


e.onclick = function () {
    a.style.width = "100px";
    a.style.filter = "blur(5px)";
    b.style.width = "100px";
    b.style.filter = "blur(5px)";
    c.style.width = "100px";
    c.style.filter = "blur(5px)";
    d.style.width = "100px";
    d.style.filter = "blur(5px)";
    e.style.width = "500px";
    e.style.filter = "blur(0px)";

}

