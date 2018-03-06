var Script1 = {};

Script1.p = document.getElementsByTagName("p");
Script1.changeText = function() {
    for (var i = 0; i < Script1.p.length; i++) {
        Script1.p[i].innerHTML = "text1";
    }
}