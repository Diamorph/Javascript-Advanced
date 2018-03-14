window.addEventListener("load",init,false);

function init() {
    var form = document.forms["task0"];
    form.name.onchange = nameValidator;
    form.lastName.onchange = lastNameValidator;
    form.login.onchange = loginValidator;
    form.password.onchange = passwordValidator;
    form.confirmPassword.onchange = confirmPasswordValidator;
    form.email.onchange = emailValidator;
    form.onsubmit = submit;
}

function nameValidator() {
    document.getElementById("name-msg").style.visibility = "hidden";
    var valid;
    var pattern = /^[a-zа-яё]+$/i;
    if (this.value.length < 4) {
        document.getElementById("name-msg").style.visibility = "visible";
        document.getElementById("name-msg").innerHTML = "Ім'я повинно бути більше 4-х символів";
        valid = false;
    }
    if(!pattern.test(this.value)){
        document.getElementById("name-msg").style.visibility = "visible";
        document.getElementById("name-msg").innerHTML = "Ім'я може містити тільки букви";
        valid=false;
    }
    if(this.value == ""){
        document.getElementById("name-msg").style.visibility = "visible";
        document.getElementById("name-msg").innerHTML = "Введіть ім'я";
        valid = false;
    }
    if(valid == false){
        this.className="invalid";
    } else{
        this.className="valid";
    }
}

function lastNameValidator() {
    document.getElementById("lastName-msg").style.visibility = "hidden";
    var valid;
    var pattern = /^[a-zа-яё]+$/i;
    if (this.value.length < 4) {
        document.getElementById("lastName-msg").style.visibility = "visible";
        document.getElementById("lastName-msg").innerHTML = "Ім'я повинно містити більше 4-х символів";
        valid = false;
    }
    if(!pattern.test(this.value)){
        document.getElementById("lastName-msg").style.visibility = "visible";
        document.getElementById("lastName-msg").innerHTML = "Ім'я може містити тільки букви";
        valid=false;
    }
    if(this.value == ""){
        document.getElementById("lastName-msg").style.visibility = "visible";
        document.getElementById("lastName-msg").innerHTML = "Введіть прізвище";
        valid = false;
    }
    if(valid  == false){
        this.className="invalid";
    } else{
        this.className="valid";
    }
}

function loginValidator() {
    document.getElementById("login-msg").style.visibility = "hidden";
    var valid;
    var pattern = /^[a-zA-Z0-9]+$/i;
    if (this.value.length < 4){
        document.getElementById("login-msg").style.visibility = "visible";
        document.getElementById("login-msg").innerHTML = "Логін повинен містити більше 4-х символів";
        valid = false;
    }
    if(!pattern.test(this.value)){
        document.getElementById("login-msg").style.visibility = "visible";
        document.getElementById("login-msg").innerHTML = "Логін може містити тільки англійські букви і цифри";
        valid = false;
    }
    if(this.value == ""){
        document.getElementById("login-msg").style.visibility = "visible";
        document.getElementById("login-msg").innerHTML = "Введіть логін";
        valid = false;
    }
    if(valid  == false){
        this.className="invalid";
    } else{
        this.className="valid";
    }
}

function passwordValidator() {
    document.getElementById("password-msg").style.visibility = "hidden";
    var valid;
    var pattern = /^[a-zA-Z0-9]+$/i;
    if(this.value.length < 6){
        document.getElementById("password-msg").style.visibility = "visible";
        document.getElementById("password-msg").innerHTML = "Пароль повинен містити більше 6-х символів";
        valid = false;
    }
    if(!pattern.test(this.value)){
        document.getElementById("password-msg").style.visibility = "visible";
        document.getElementById("password-msg").innerHTML = "Пароль може містити тільки англійські букви і цифри";
        valid = false;
    }
    if(this.value == "") {
        document.getElementById("password-msg").style.visibility = "visible";
        document.getElementById("password-msg").innerHTML = "Введіть пароль";
        valid = false;
    }
    if(valid  == false){
        this.className="invalid";
    } else{
        this.className="valid";
    }
}

function confirmPasswordValidator() {
    document.getElementById("passwordConfirm-msg").style.visibility = "hidden";
    var valid;
    if(this.value == "") {
        document.getElementById("passwordConfirm-msg").style.visibility = "visible";
        document.getElementById("passwordConfirm-msg").innerHTML = "Введіть пароль";
        valid = false;
    }
    if (this.value != document.forms["task0"].password.value){
        document.getElementById("passwordConfirm-msg").style.visibility = "visible";
        document.getElementById("passwordConfirm-msg").innerHTML = "Паролі не співпадають";
        valid = false;
    }
    if(valid  == false){
        this.className="invalid";
    } else{
        this.className="valid";
    }
}

function emailValidator() {
    document.getElementById("email-msg").style.visibility = "hidden";
    var valid;
    var pattern = /\b[a-z0-9._]+@[a-z0-9.-]+\.[a-z]{2,4}\b/i;
    if (this.value == ""){
        document.getElementById("email-msg").style.visibility = "visible";
        document.getElementById("email-msg").innerHTML = "Введіть E-mail";
        valid = false;
    }
    if(!pattern.test(this.value)){
        document.getElementById("email-msg").style.visibility = "visible";
        document.getElementById("email-msg").innerHTML = "Некоректний формат E-mail";
        valid = false;
    }
    if(valid  == false){
        this.className="invalid";
    } else{
        this.className="valid";
    }
}

function submit() {
    var invalid = false;
    var form = document.forms["task0"];
    for (var i = 0; i < form.elements.length; ++i) {
        var e = form.elements[i];
            // проверка типа элемента и наличия обработчика события onchange.
        if (e.onchange) {
            e.onchange(); // запуск события onchanhe
            if (e.className == "invalid") {
                invalid = true;
                }
            }
        }
        if (invalid) {
            alert("Допущены ошибки при заполнении формы.");
            return false; // отмена отправки формы.
        }
}