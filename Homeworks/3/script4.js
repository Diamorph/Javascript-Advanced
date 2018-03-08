var Link = {

};
Link.flag = 0;

function Url(str) {
    /*var obj = document.getElementById(str);
    var link = obj.getAttribute('href');
    var w = window.open(link, "Window Name", "width=400,height=400,status=yes,resizable=no");*/
    if (Link.flag == 0) {
        Link.flag = 1;
        var obj = document.getElementById(str);
        var link = obj.getAttribute('href');
        alert(link);
        var w = window.open(link, "Window Name", "width=400,height=400,status=yes,resizable=no");
        obj.innerHTML += " (відкрито)";
    } else {
        Link.flag = 0;
        w.close();
    }
}