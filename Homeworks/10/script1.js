window.addEventListener("load",function () {
    document.getElementById("but").addEventListener("click",function () {
        var xhr = new XMLHttpRequest();
        xhr.open("POST","CalcHandler.ashx");
        // Content-Type - HTTP заголовок, который указывает серверу, как интерпретировать тело запроса.

        // функция-обработчик срабатывает при изменении свойства readyState
        // Значения свойства readyState:
        // 0 - Метод open() еще не вызывался
        // 1 - Метод open() уже был вызван, но метод send() еще не вызывался.
        // 2 - Метод send() был вызван, но ответ от сервера еще не получен
        // 3 - Идет прием данных от сервера. Для значения 3 Firefox вызывает обработчик события несколько раз IE только один раз.
        // 4 - Ответ от сервера полностью получен (Запрос успешно завершен).

        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                var p = document.createElement("p");
                p.innerHTML = xhr.responseText;
                p.innerHTML += "324";
                document.body.appendChild(p);
                //document.getElementById("result").innerHTML = xhr.responseText;
            }
        };

        // отправка запроса с указанием данных.
        xhr.send();
    })
});
