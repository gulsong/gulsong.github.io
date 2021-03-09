setInterval(function() {
    var date = new Date();
    document.getElementsByClassName('date')[0].innerHTML = date.getFullYear() + '年';
    if ((date.getMonth() + 1) < 10) {
        document.getElementsByClassName('date')[0].innerHTML += ('0' + (date.getMonth() + 1) + '月');
    } else {
        document.getElementsByClassName('date')[0].innerHTML += ((date.getMonth() + 1) + '月');
    }
    if (date.getDate() < 10) {
        document.getElementsByClassName('date')[0].innerHTML += ('0' + date.getDate() + '日&nbsp;&nbsp;');
    } else {
        document.getElementsByClassName('date')[0].innerHTML += (date.getDate() + '日&nbsp;&nbsp;');
    }
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
    if (date.getHours() < 10) {
        document.getElementsByClassName('date')[0].innerHTML += ('0' + date.getHours() + ':');
    } else {
        document.getElementsByClassName('date')[0].innerHTML += (date.getHours() + ':');
    }
    if (date.getMinutes() < 10) {
        document.getElementsByClassName('date')[0].innerHTML += ('0' + date.getMinutes() + ':');
    } else {
        document.getElementsByClassName('date')[0].innerHTML += (date.getMinutes() + ':');
    }
    if (date.getSeconds() < 10) {
        document.getElementsByClassName('date')[0].innerHTML += ('0' + date.getSeconds());
    } else {
        document.getElementsByClassName('date')[0].innerHTML += date.getSeconds();
    }
}, 1);