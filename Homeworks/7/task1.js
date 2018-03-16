window.addEventListener("load", function () {
    // Проверка на введенные пользователем данные, используя пользовательские атрибуты
    var priceSize;
    var priceIngr = 0;
    var price = 25;
    var div = document.getElementById('total');
    div.innerHTML = 'Total Price: ' + price + ' uah';
// Вывод данных по цене пиццы
    for (el in document.pizza.elements) {
        var currentEl = document.pizza.elements[el];
        if (currentEl.name === "size" || currentEl.name === "ingr") {
            currentEl.addEventListener("change", function (e) {
                if (e.target.value === "small") {
                    priceSize = 25;
                }
                else if (e.target.value === "normal") {
                    priceSize = 50;
                }
                else if (e.target.value === "big") {
                    priceSize = 75;
                }
                else if (e.target.value === "mushrooms") {
                    if (e.target.checked == false) {
                        priceIngr -= 5;
                    }
                    else {
                        priceIngr += 5;
                    }
                }
                else if (e.target.value === "bacon") {
                    if (e.target.checked == false) {
                        priceIngr -= 10;
                    }
                    else {
                        priceIngr += 10;
                    }
                }
                else if (e.target.value === "tomatoes") {
                    if (e.target.checked == false) {
                        priceIngr -= 10;
                    }
                    else {
                        priceIngr += 10;
                    }
                }
                else if (e.target.value === "cheese") {
                    if (e.target.checked == false) {
                        priceIngr -= 15;
                    }
                    else {
                        priceIngr += 15;
                    }
                }
                else if (e.target.value === "olives") {
                    if (e.target.checked == false) {
                        priceIngr -= 5;
                    }
                    else {
                        priceIngr += 5;
                    }
                }
                price = priceSize + priceIngr;
                div.innerHTML = 'Total Price: ' + price + ' uah';
            });
        }
    }
});