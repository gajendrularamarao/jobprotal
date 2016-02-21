$(document).bind('contextmenu', function (e) {
    e.preventDefault();
});

//$(document).ready(function () {
//    $('input[type="text"]').bind('copy paste', function (e) {
//        e.preventDefault();
//    });
//});

   function disableBack() {
                    window.history.forward();
                }
                window.onload = disableBack();
                window.onpageshow = function (evt) {
                    if (evt.persisted)
                        disableBack();
                };


$(document).ready(function() {
 $('input[type="text"]').bind('copy paste cut',function(e) { 
 e.preventDefault(); //disable cut,copy,paste
 alert('cut,copy & paste options are disabled !!');
 });
});
//courtesy of BoogieJack.com
function killCopy(e) {
    return false;
}
function reEnable() {
    return true;
}
document.onselectstart = new Function("return false");
if (window.sidebar) {
    document.onmousedown = killCopy;
    document.onclick = reEnable;
}

document.onkeypress = function (event) {
    event = (event || window.event);
    if (event.keyCode === 123) {
        //alert('No F-12');
        return false;
    }
};
document.onmousedown = function (event) {
    event = (event || window.event);
    if (event.keyCode === 123) {
        //alert('No F-keys');
        return false;
    }
};
document.onkeydown = function (event) {
    event = (event || window.event);
    if (event.keyCode === 123) {
        //alert('No F-keys');
        return false;
    }
};