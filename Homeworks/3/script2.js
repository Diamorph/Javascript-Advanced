function Url(){
    var args = {};
    var str = location.search.substr(1);
    var pairs = str.split("&");

    for (var i = 0; i < pairs.length; i++){
        var pos = pairs[i].indexOf("=");
        if (pos == -1){
            continue;
        }
        var argname = pairs[i].substr(0,pos);
        var value = pairs[i].substr(pos+1);
        args[argname] = value;
    }
    return args;
}

function PrintSum() {
    var args = Url();
    var p = document.createElement("p");
    var sum = +args.a + +args.b;

    p.innerHTML = "a=" + args.a + "</br>";
    p.innerHTML += "b=" + args.b + "</br>";
    p.innerHTML += "Sum=" + sum;
    document.body.appendChild(p);
}