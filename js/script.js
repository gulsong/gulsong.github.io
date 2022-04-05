var client_h = document.documentElement.clientHeight || document.body.clientHeight;
var scroll_h = document.documentElement.scrollHeight || document.body.scrollHeight;
var footer_h = document.getElementsByClassName('footer')[0].scrollHeight;

function addTimeString(time_string, time_unit) {
    document.getElementsByClassName('date')[0].innerHTML +=
        (((time_string < 10) ? ('0' + time_string) : (time_string)) + time_unit);
}
setInterval(function showTime() {
    var date = new Date();
    document.getElementsByClassName('date')[0].innerHTML = null;
    addTimeString(date.getFullYear(), '年');
    addTimeString((date.getMonth() + 1), '月');
    addTimeString(date.getDate(), '日&nbsp;&nbsp;');
    switch (date.getDay()) {
        case 1:
            document.getElementsByClassName('date')[0].innerHTML += '周一&nbsp;&nbsp;&nbsp;&nbsp;';
            break
        case 2:
            document.getElementsByClassName('date')[0].innerHTML += '周二&nbsp;&nbsp;&nbsp;&nbsp;';
            break
        case 3:
            document.getElementsByClassName('date')[0].innerHTML += '周三&nbsp;&nbsp;&nbsp;&nbsp;';
            break
        case 4:
            document.getElementsByClassName('date')[0].innerHTML += '周四&nbsp;&nbsp;&nbsp;&nbsp;';
            break
        case 5:
            document.getElementsByClassName('date')[0].innerHTML += '周五&nbsp;&nbsp;&nbsp;&nbsp;';
            break
        case 6:
            document.getElementsByClassName('date')[0].innerHTML += '周六&nbsp;&nbsp;&nbsp;&nbsp;';
            break
        default:
            document.getElementsByClassName('date')[0].innerHTML += '周日&nbsp;&nbsp;&nbsp;&nbsp;';
    }
    addTimeString(date.getHours(), ':');
    addTimeString(date.getMinutes(), ':');
    addTimeString(date.getSeconds(), '');
}, 1);
var scrollFunc = function(e) {
    e = e || window.event;
    var scroll_Top = document.documentElement.scrollTop || document.body.scrollTop;
    if (e.wheelDelta) {
        if (scroll_Top + client_h >= scroll_h - (footer_h + 20)) {
            document.getElementsByClassName('music')[0].style.position = "absolute";
            document.getElementsByClassName('music')[0].style.bottom = "220px";
        } else {
            document.getElementsByClassName('music')[0].style.position = "fixed";
            document.getElementsByClassName('music')[0].style.bottom = "20px";
        }
    } else if (e.detail) {
        if (scroll_Top + client_h >= scroll_h - 200) {
            console.log(scroll_Top);
            console.log(client_h);
            console.log(scroll_h);
        }
    }
}
window.onmousewheel = document.onmousewheel = scrollFunc;