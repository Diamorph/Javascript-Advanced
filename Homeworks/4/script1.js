function Task1() {
    var myNumber = 13;
    var obj = document.getElementById("task1");
    var number = +obj.value;
    var item = document.createElement("p");
    if(myNumber == number){
        item.innerHTML = "Ви вгадали";
        item.style.color = "green";
        document.body.appendChild(item);
    } else if (number > myNumber){
        item.innerHTML = "Ваше число більше, ніж задане, спробуйте ще раз";
        item.style.color = "red";
        document.body.appendChild(item);
    } else {
        item.innerHTML = "Ваше число менше, ніж задане, спробуйте ще раз";
        item.style.color = "red";
        document.body.appendChild(item);
    }
}
