function aut(){
    var login = document.getElementById("login");
    var password = document.getElementById("password");
    var p = document.getElementById("message");
    if (login.value == "admin" && password.value=="12345"){
        login.style.borderColor = "";
        password.style.borderColor = "";
        if (p){
            p.style.color="green";
            p.innerHTML = "Ви авторизовані";
        } else {
            p = createP("Ви авторизовані");
            p.style.color="green";
            document.body.appendChild(p);
        }
    } else if (login.value=="" && password.value==""){
        login.style.borderColor = "red";
        password.style.borderColor = "red";
        if (p){
            p.innerHTML = "Введіть логін та пароль";
            p.style.color = "black";
        }  else {
            document.body.appendChild(createP("Введіть логін та пароль"));
        }
    } else if(login.value == "") {
        login.style.borderColor = "red";
        password.style.borderColor = "";
        if (p) {
            p.innerHTML = "Введіть логін";
            p.style.color = "black";
        } else {
            document.body.appendChild(createP("Введіть логін"));
        }
    }else if(password.value == ""){
        login.style.borderColor= "";
        password.style.borderColor = "red";
        if (p) {
            p.innerHTML = "Введіть пароль";
            p.style.color = "black";
        } else {
            document.body.appendChild(createP("Введіть пароль"));
        }
    } else {
        login.style.borderColor = "red";
        password.style.borderColor = "red";
        if (p) {
            p.innerHTML = "Данні не вірні";
            p.style.color = "black";
        } else {
            document.body.appendChild(createP("Данні не вірні"));
        }
    }
}

function createP(str) {
    var p = document.createElement("p");
    p.id="message";
    p.innerHTML = str;
    p.style.position="relative";
    p.style.textAlign="center";
    //document.body.appendChild("p");
    return p;
}

function checkP() {
    var p = document.getElementById("message");
    return p;
}
