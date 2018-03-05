function  Human(name,surname,age){
    this.name = name;
    this.surname = surname;
    this.age = age;
}

Human.prototype.sayHi = function () {
    return "Hi, " + this.name + "<br/>";
}
Human.prototype.toString = function () {
    return "Name: " + this.name + "<br/>" + "Surname: " + this.surname + "<br/>" +
        "Age: " + this.age + "<br/>" + "Nationality: " + this.nationality + "<br/>";
}
Human.prototype.sendMessage = function (human) {
    document.write(this.name + " sended message to " + human.name);
}

Human.nationality = function (whereFrom) {
    switch (whereFrom){
        case "Ukraine": return "Ukrainian"; break;
        case "USA": return "American"; break;
        case "Russia": return "Russian"; break;
        default: return "Undefined"; break;
    }
}

var h1 = new Human("Vlad", "Tymoshenko", 19);
var h2 = new Human("Anton", "Mazun", 19);
h1.nationality = Human.nationality("USA");
document.write(h1.sayHi());
document.write(h1);
h1.sendMessage(h2);