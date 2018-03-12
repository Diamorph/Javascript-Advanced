function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
};

(function() {
    window.addEventListener("load", init, false);

    function init() {
        var elem = document.getElementById("but");
        elem.addEventListener("mouseover", function (e) {
            var x = getRandomArbitrary(-50,50);
            var y = getRandomArbitrary(-50,50);
            this.style.left = e.clientX + x + "px";
            this.style.top = e.clientY + y + "px";
        })
    };
})();
