function plus() {
    var a = document.getElementById("a");
    var b = document.getElementById("b");
    var res = +a.value + +b.value;
    alert(res);
}

function minus() {
    var a = document.getElementById("a");
    var b = document.getElementById("b");
    var res = +a.value - +b.value
    alert(res);
}

function multiplication() {
    var a = document.getElementById("a");
    var b = document.getElementById("b");
    var res = +a.value * +b.value
    alert(res);
}

function division() {
    var a = document.getElementById("a");
    var b = document.getElementById("b");
    var res = +a.value / +b.value
    alert(res);
}