
// Функция-конструктор
function Task(name){
    // Свойство экземпляра
    this.name = name;
}

// Свойство на функции-конструкторе (статическое свойство)
Task.newValue = 1;

// Метод на функции конструкторе (статический метод)
Task.a = function () {
    document.write(Task.newValue + "<br/>");
}

// Метод на экземпляре
Task.prototype.newMet = function () {
    this.name = "Vlad1";
    document.write(this.name + "<br/>");
}



var exp = new Task("Vlad");
Task.a();
exp.newMet();
document.write(Task.newValue + "<br/>");