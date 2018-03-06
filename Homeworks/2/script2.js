function addElem() {
    var elem = document.getElementById("par");
    var len = document.getElementsByTagName("p");

    if (elem.childNodes.length < 10){
        var item = document.createElement("p");
        item.innerHTML = "fgdfgd";
        elem.appendChild(item);
    } else {
        while (elem.lastChild){
            var rem = elem.lastChild;
            elem.removeChild(rem);
        }
    }
}