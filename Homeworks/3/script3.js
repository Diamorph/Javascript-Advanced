function Sum(){
    var str = document.getElementById("str");
    var substr = str.value.split(" ");
    var a = +substr[0];
    var param = substr[1];
    var b = +substr[2];
    var result = "Невірний формат";
    if(param == "+"){
        result = a + b;
    }
    if (param == "-"){
        result = a - b;
    }

    var p = document.createElement("p");
    p.innerHTML = result;
    document.body.appendChild(p);

}