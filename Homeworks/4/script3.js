function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function changePos(elem) {
    var el = document.getElementById(elem);
    var top = getRandomInt(0,1000);
    el.style.top = top + "px";
    var left = getRandomInt(0,1000);
    el.style.left = left + "px";
}