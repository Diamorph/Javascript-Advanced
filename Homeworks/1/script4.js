function Human(name,surname,age) {
    this.name = name;
    this.surname = surname;
    this.age = age;
}

Human.prototype.toString = function(){
    return "Name: " + this.name + "<br/>" + "Surname: " + this.surname + "<br/>" + "Age: "
        + this.age + "<br/>" + "Nationality: " + this.nation + "<br/>";
}

var h = new Human("Vlad", "Tymoshenko", 19);
h.nation = "Ukrainian";
var h1 = new Human("Anton", "Mazun",19);
document.write(h);
document.write(h1);