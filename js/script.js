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