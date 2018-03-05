function Human(name, age) {
    this.name = name;
    this.age = age;
}

// Переопределние метода toString()
Human.prototype.toString = function() {
    return "[Name: " + this.name + " Age: " + this.age + " ]" + "<br/>";
}
var humans = [new Human("Vlad",1),new Human("Anton",4), new Human("Stas", 3), new Human("Sanya", 10),new Human("Bodya",2)];

document.write(humans + "<br/>");

// Функция sort([compareFunction]) вызывается на массиве и принимает параметр в виде функции compareTo()
humans.sort(function(a,b){
    var q = a.age;
    var w = b.age;
    if(q<w){
        return -1;
    }
    else if(q>w){
        return 1;
    }
    else{
        return 0;
    }
})

document.write(humans + "<br/>");
