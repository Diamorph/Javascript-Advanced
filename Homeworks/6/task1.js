window.onload = function () {
    document.getElementById("main").onkeypress = function (e) {
        var sym = String.fromCharCode(e.charCode);
        if (sym == "r") {
            clear();
            document.getElementById("test1").style.color = "red";
        }
        if (sym == "b") {
            clear();
            document.getElementById("test2").style.color = "blue";
        }
        if (sym == "g") {
            clear();
            document.getElementById("test3").style.color = "green";
        }
    }
    function clear() {
        document.getElementById("test1").style.color = "black";
        document.getElementById("test2").style.color = "black";
        document.getElementById("test3").style.color = "black";
    }
}