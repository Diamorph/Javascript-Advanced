(function () {
    window.addEventListener("load",init,false);
    function init() {
        var x = document.getElementById("main");
        x.addEventListener("keypress",function (e) {
            var sym = String.fromCharCode(e.charCode);
            if(sym=="q"){
                var p = document.createElement("p");
                p.innerHTML = "збережено";
                document.body.appendChild(p);
            }
        },false);
    }
})();