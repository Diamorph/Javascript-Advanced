
window.addEventListener("load",init,false);

function init() {

    var savedColor = findCookieValue("page-color");
    var fontSize = findCookieValue("font-size");
    if(fontSize){
        document.body.style.fontSize = fontSize + "px";
    }
    if (savedColor) {
        document.body.style.backgroundColor = savedColor;
    }

    document.getElementById("submit").addEventListener("click", function () {
        var select = document.getElementById("color");
        var color = select.options[select.selectedIndex].value;
        document.cookie = "page-color=" + encodeURIComponent(color) + ";max-age=" + (60 * 600);
        document.body.style.backgroundColor = color;
        var type = +document.getElementById("type").value;
        document.cookie = "font-size=" + encodeURIComponent(type) + ";max-age=" + (60 * 600);
        document.body.style.fontSize = type + "px";
    });

}

function findCookieValue(cookieName) {
    var allcookies = document.cookie;
    var pos = allcookies.indexOf(cookieName + "=");

    // Если cookie с указанным именем найден, извлечь его значения.
    if (pos != -1) {
        var start = pos + cookieName.length + 1;
        var end = allcookies.indexOf(";", start);

        if (end == -1) end = allcookies.length;

        var value = allcookies.substring(start, end);
        value = decodeURIComponent(value);
        return value;
    }
}