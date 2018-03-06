var Task = {};


Task.FindElem = function(str){
    var e =  document.getElementsByClassName(str);
    for (var i = 0; i< e.length; i++){
        document.write(e[i].innerHTML + "<br/>");
    }
};