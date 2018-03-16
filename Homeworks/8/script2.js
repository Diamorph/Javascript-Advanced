window.addEventListener("load",init,false);


function init() {
    var color = window.localStorage.getItem("page-color");
    alert(color);
    if(color){
        document.body.style.backgroundColor = color;
    }
    var fontSize = window.localStorage.getItem("font-size");
    alert(fontSize);
    if(fontSize){
        document.body.style.fontSize = fontSize + "px";
    }
    document.getElementById("submit").addEventListener("click", function () {
        var select = document.getElementById("color");
        var color = select.options[select.selectedIndex].value;
        window.localStorage.setItem("page-color",color);
        document.body.style.backgroundColor = color;
        var fontSize = document.getElementById("type").value;
        window.localStorage.setItem("font-size",fontSize);
        document.body.style.fontSize = 30 + "px";
    });
}