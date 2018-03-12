window.onload = function () {
    var a = document.getElementById("a");
    var b = document.getElementById("b");
    //alert(a.value);
    var plus = document.getElementById("plus");
    var minus = document.getElementById("minus");
    var multiplication = document.getElementById("multiplication");
    var division = document.getElementById("division");
    plus.addEventListener("click",
        function () {
        var res = +a.value + +b.value;
        alert(res);
    }, true);
    minus.addEventListener("click",
        function () {
        var res = +a.value - +b.value;
            alert(res);
        },true);
    multiplication.addEventListener("click",
        function () {
        var res = +a.value * +b.value;
            alert(res);
        }, true);
    division.addEventListener("click",
        function () {
        var res = +a.value / +b.value;
            alert(res);
        }, true);
}

window.addEventListener("load", function () {

    var a = document.getElementById("a");

    a.addEventListener("keypress", function (e) {

        if (String.fromCharCode(e.charCode) != '0'
            && String.fromCharCode(e.charCode) != '1'
            && String.fromCharCode(e.charCode) != '2'
            && String.fromCharCode(e.charCode) != '3'
            && String.fromCharCode(e.charCode) != '4'
            && String.fromCharCode(e.charCode) != '5'
            && String.fromCharCode(e.charCode) != '6'
            && String.fromCharCode(e.charCode) != '7'
            && String.fromCharCode(e.charCode) != '8'
            && String.fromCharCode(e.charCode) != '9') {
            // если нажатая кнопка не 0 или 1 отменить действие по умолчанию.
            e.preventDefault();
        }

    }, true);

}, false);