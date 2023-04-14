var client_h = document.documentElement.clientHeight || document.body.clientHeight;
var scroll_h = document.documentElement.scrollHeight || document.body.scrollHeight;
var footer_h = document.getElementsByClassName('footer')[0].scrollHeight;
let lunarYearArr = [
  0x0b557, //1949
  0x06ca0, 0x0b550, 0x15355, 0x04da0, 0x0a5b0, 0x14573, 0x052b0, 0x0a9a8, 0x0e950, 0x06aa0, //1950-1959
  0x0aea6, 0x0ab50, 0x04b60, 0x0aae4, 0x0a570, 0x05260, 0x0f263, 0x0d950, 0x05b57, 0x056a0, //1960-1969
  0x096d0, 0x04dd5, 0x04ad0, 0x0a4d0, 0x0d4d4, 0x0d250, 0x0d558, 0x0b540, 0x0b6a0, 0x195a6, //1970-1979
  0x095b0, 0x049b0, 0x0a974, 0x0a4b0, 0x0b27a, 0x06a50, 0x06d40, 0x0af46, 0x0ab60, 0x09570, //1980-1989
  0x04af5, 0x04970, 0x064b0, 0x074a3, 0x0ea50, 0x06b58, 0x055c0, 0x0ab60, 0x096d5, 0x092e0, //1990-1999
  0x0c960, 0x0d954, 0x0d4a0, 0x0da50, 0x07552, 0x056a0, 0x0abb7, 0x025d0, 0x092d0, 0x0cab5, //2000-2009
  0x0a950, 0x0b4a0, 0x0baa4, 0x0ad50, 0x055d9, 0x04ba0, 0x0a5b0, 0x15176, 0x052b0, 0x0a930, //2010-2019
  0x07954, 0x06aa0, 0x0ad50, 0x05b52, 0x04b60, 0x0a6e6, 0x0a4e0, 0x0d260, 0x0ea65, 0x0d530, //2020-2029
  0x05aa0, 0x076a3, 0x096d0, 0x04afb, 0x04ad0, 0x0a4d0, 0x1d0b6, 0x0d250, 0x0d520, 0x0dd45, //2030-2039
  0x0b5a0, 0x056d0, 0x055b2, 0x049b0, 0x0a577, 0x0a4b0, 0x0aa50, 0x1b255, 0x06d20, 0x0ada0, //2040-2049
  0x14b63, 0x09370, 0x049f8, 0x04970, 0x064b0, 0x168a6, 0x0ea50, 0x06b20, 0x1a6c4, 0x0aae0, //2050-2059
  0x0a2e0, 0x0d2e3, 0x0c960, 0x0d557, 0x0d4a0, 0x0da50, 0x05d55, 0x056a0, 0x0a6d0, 0x055d4, //2060-2069
  0x052d0, 0x0a9b8, 0x0a950, 0x0b4a0, 0x0b6a6, 0x0ad50, 0x055a0, 0x0aba4, 0x0a5b0, 0x052b0, //2070-2079
  0x0b273, 0x06930, 0x07337, 0x06aa0, 0x0ad50, 0x14b55, 0x04b60, 0x0a570, 0x054e4, 0x0d160, //2080-2089
  0x0e968, 0x0d520, 0x0daa0, 0x16aa6, 0x056d0, 0x04ae0, 0x0a9d4, 0x0a2d0, 0x0d150, 0x0f252, //2090-2099
  0x0d520 //2100
];
let lunarMonth = ['正', '二', '三', '四', '五', '六', '七', '八', '九', '十', '冬', '腊'];
let lunarDay = ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '初', '廿'];
let tianGan = ['甲', '乙', '丙', '丁', '戊', '己', '庚', '辛', '壬', '癸'];
let diZhi = ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥'];

function addTimeString(time_string, time_unit) {
  document.getElementsByClassName('date')[0].innerHTML +=
  (((time_string < 10) ? ('0' + time_string) : (time_string)) + time_unit);
}
function setMusic() {
  var musicID = 459115010;
  var mDate = new Date();
  var mLunar = sloarToLunar(mDate.getFullYear(), (mDate.getMonth() + 1), mDate.getDate());
  switch (mDate.getMonth() + 1) {
    case 1:
      if (mDate.getDate() === 6) {
        musicID = 1414044214;
      }
      if (mDate.getDate() === 20) {
        musicID = 1416959692;
      }
      if (mDate.getDate() === 1) {
        musicID = 1429505324;
      }
      break;
    case 2:
      if (mDate.getDate() === 4) {
        musicID = 1420663042;
      }
      if (mDate.getDate() === 19) {
        musicID = 1423985980;
      }
      if (mDate.getDate() === 14) {
        musicID = 574781715;
      }
      break;
    case 3:
      if (mDate.getDate() === 6) {
        musicID = 862099159;
      }
      if (mDate.getDate() === 21) {
        musicID = 1353034144;
      }
      if (mDate.getDate() === 8) {
        musicID = 1420295382;
      }
      if (mDate.getDate() === 12) {
        musicID = 437755663;
      }
      if (mDate.getDate() === 14) {
        musicID = 31352790;
      }
      if (mDate.getDate() === 15) {
        musicID = 1297742752;
      }
      if (mDate.getDate() > 21) {
        if (mDate.getDay() === 0) {
          switch (sloarToLunar(mDate.getFullYear(), 6, 21).lunarDay) {
            case '初六':
              if (mDate.getDate() > 30) {
                musicID = 1827002464;
              }
              break;
            case '初七':
              if (mDate.getDate() > 29) {
                musicID = 1827002464;
              }
              break;
            case '初八':
              if (mDate.getDate() > 28) {
                musicID = 1827002464;
              }
              break;
            case '初九':
              if (mDate.getDate() > 27) {
                musicID = 1827002464;
              }
              break;
            case '初十':
              if (mDate.getDate() > 26) {
                musicID = 1827002464;
              }
              break;
            case '十一':
              if (mDate.getDate() > 25) {
                musicID = 1827002464;
              }
              break;
            case '十二':
              if (mDate.getDate() > 24) {
                musicID = 1827002464;
              }
              break;
            case '十三':
              if (mDate.getDate() > 23 && mDate.getDate() < 31) {
                musicID = 1827002464;
              }
              break;
            case '十四':
              if (mDate.getDate() > 22 && mDate.getDate() < 30) {
                musicID = 1827002464;
              }
              break;
            case '十五':
              if (mDate.getDate() < 29) {
                musicID = 1827002464;
              }
              break;
            default:
              break;
          }
        }
      }
      break;
    case 4:
      if (mDate.getDate() === 5) {
        musicID = 1437228010;
      }
      if (mDate.getDate() === 20) {
        musicID = 1359548761;
      }
      if (mDate.getDate() === 1) {
        musicID = 536332577;
      }
      if (mDate.getDay() === 0) {
        var mLunarMonthDays = 30;
        switch (sloarToLunar(mDate.getFullYear(), 3, 21).lunarMonth) {
          case '正':
            mLunarMonthDays = lunarYearMonths(lunarYearArr[mDate.getFullYear() - 1949])[1];
            break;
          case '闰正':
            mLunarMonthDays = lunarYearMonths(lunarYearArr[mDate.getFullYear() - 1949])[1];
            break;
          case '二':
            mLunarMonthDays = lunarYearMonths(lunarYearArr[mDate.getFullYear() - 1949])[2];
            break;
          case '闰二':
            mLunarMonthDays = lunarYearMonths(lunarYearArr[mDate.getFullYear() - 1949])[2];
            break;
          case '三':
            mLunarMonthDays = lunarYearMonths(lunarYearArr[mDate.getFullYear() - 1949])[3];
            break;
          case '闰三':
            mLunarMonthDays = lunarYearMonths(lunarYearArr[mDate.getFullYear() - 1949])[3];
            break;
          case '四':
            mLunarMonthDays = lunarYearMonths(lunarYearArr[mDate.getFullYear() - 1949])[4];
            break;
          case '闰四':
            mLunarMonthDays = lunarYearMonths(lunarYearArr[mDate.getFullYear() - 1949])[4];
            break;
          case '五':
            mLunarMonthDays = lunarYearMonths(lunarYearArr[mDate.getFullYear() - 1949])[5];
            break;
          case '闰五':
            mLunarMonthDays = lunarYearMonths(lunarYearArr[mDate.getFullYear() - 1949])[5];
            break;
          case '六':
            mLunarMonthDays = lunarYearMonths(lunarYearArr[mDate.getFullYear() - 1949])[6];
            break;
          case '闰六':
            mLunarMonthDays = lunarYearMonths(lunarYearArr[mDate.getFullYear() - 1949])[6];
            break;
          case '七':
            mLunarMonthDays = lunarYearMonths(lunarYearArr[mDate.getFullYear() - 1949])[7];
            break;
          case '闰七':
            mLunarMonthDays = lunarYearMonths(lunarYearArr[mDate.getFullYear() - 1949])[7];
            break;
          case '八':
            mLunarMonthDays = lunarYearMonths(lunarYearArr[mDate.getFullYear() - 1949])[8];
            break;
          case '闰八':
            mLunarMonthDays = lunarYearMonths(lunarYearArr[mDate.getFullYear() - 1949])[8];
            break;
          case '九':
            mLunarMonthDays = lunarYearMonths(lunarYearArr[mDate.getFullYear() - 1949])[9];
            break;
          case '闰九':
            mLunarMonthDays = lunarYearMonths(lunarYearArr[mDate.getFullYear() - 1949])[9];
            break;
          case '十':
            mLunarMonthDays = lunarYearMonths(lunarYearArr[mDate.getFullYear() - 1949])[10];
            break;
          case '闰十':
            mLunarMonthDays = lunarYearMonths(lunarYearArr[mDate.getFullYear() - 1949])[10];
            break;
          case '冬':
            mLunarMonthDays = lunarYearMonths(lunarYearArr[mDate.getFullYear() - 1949])[11];
            break;
          case '闰冬':
            mLunarMonthDays = lunarYearMonths(lunarYearArr[mDate.getFullYear() - 1949])[11];
            break;
          case '腊':
            mLunarMonthDays = lunarYearMonths(lunarYearArr[mDate.getFullYear() - 1949])[12];
            break;
          case '闰腊':
            mLunarMonthDays = lunarYearMonths(lunarYearArr[mDate.getFullYear() - 1949])[12];
            break;
          default:
            mLunarMonthDays = 30;
        } 
        switch (sloarToLunar(mDate.getFullYear(), 3, 21).lunarDay) {
          case '十六':
            if (mDate.getDate() > (mLunarMonthDays - 11) && mDate.getDate() < (mLunarMonthDays - 3)) {
              musicID = 1827002464;
            }
            break;
          case '十七':
            if (mDate.getDate() > ( mLunarMonthDays - 12) && mDate.getDate() < (mLunarMonthDays - 4)) {
              musicID = 1827002464;
            }
            break;
          case '十八':
            if (mDate.getDate() > (mLunarMonthDays - 13) && mDate.getDate() < (mLunarMonthDays - 5)) {
              musicID = 1827002464;
            }
            break;
          case '十九':
            if (mDate.getDate() > (mLunarMonthDays - 14) && mDate.getDate() < (mLunarMonthDays - 6)) {
              musicID = 1827002464;
            }
            break;
          case '二十':
            if (mDate.getDate() > (mLunarMonthDays - 15) && mDate.getDate() < (mLunarMonthDays - 7)) {
              musicID = 1827002464;
            }
            break;
          case '廿一':
            if (mDate.getDate() > (mLunarMonthDays - 16) && mDate.getDate() < (mLunarMonthDays - 8)) {
              musicID = 1827002464;
            }
            break;
          case '廿二':
            if (mDate.getDate() > (mLunarMonthDays - 17) && mDate.getDate() < (mLunarMonthDays - 9)) {
              musicID = 1827002464;
            }
            break;
          case '廿三':
            if (mDate.getDate() > (mLunarMonthDays - 18) && mDate.getDate() < (mLunarMonthDays - 10)) {
              musicID = 1827002464;
            }
            break;
          case '廿四':
            if (mDate.getDate() > (mLunarMonthDays - 19) && mDate.getDate() < (mLunarMonthDays - 11)) {
              musicID = 1827002464;
            }
            break;
          case '廿五':
            if (mDate.getDate() > (mLunarMonthDays - 20) && mDate.getDate() < (mLunarMonthDays - 12)) {
              musicID = 1827002464;
            }
            break;
          case '廿六':
            if (mDate.getDate() > (mLunarMonthDays - 21) && mDate.getDate() < (mLunarMonthDays - 13)) {
              musicID = 1827002464;
            }
            break;
          case '廿七':
            if (mDate.getDate() > (mLunarMonthDays - 22) && mDate.getDate() < (mLunarMonthDays - 14)) {
              musicID = 1827002464;
            }
            break;
          case '廿八':
            if (mDate.getDate() > (mLunarMonthDays - 23) && mDate.getDate() < (mLunarMonthDays - 15)) {
              musicID = 1827002464;
            }
            break;
          case '廿九':
            if (mDate.getDate() > (mLunarMonthDays - 24) && mDate.getDate() < (mLunarMonthDays - 16)) {
              musicID = 1827002464;
            }
            break;
          case '三十':
            if (mDate.getDate() > (mLunarMonthDays - 25) && mDate.getDate() < (mLunarMonthDays - 17)) {
              musicID = 1827002464;
            }
            break;
          case '初一':
            if (mDate.getDate() > 4 && mDate.getDate() < 12) {
              musicID = 1827002464;
            }
            break;
          case '初二':
            if (mDate.getDate() > 3 && mDate.getDate() < 11) {
              musicID = 1827002464;
            }
            break;
          case '初三':
            if (mDate.getDate() > 2 && mDate.getDate() < 10) {
              musicID = 1827002464;
            }
            break;
          case '初四':
            if (mDate.getDate() > 1 && mDate.getDate() < 9) {
              musicID = 1827002464;
            }
            break;
          case '初五':
            if (mDate.getDate() < 8) {
              musicID = 1827002464;
            }
            break;
          default:
            break;
        }
      }
      break;
    case 5:
      if (mDate.getDate() === 6) {
        musicID = 1363363719;
      }
      if (mDate.getDate() === 21) {
        musicID = 1366551442;
      }
      if (mDate.getDate() === 1) {
        musicID = 1813240982;
      }
      if (mDate.getDate() === 4) {
        musicID = 1808492017;
      }
      if (mDate.getDay() === 0) {
        if ((mDate.getDate() - 7) > 0 && (mDate.getDate() - 14) <= 0) {
          musicID = 333006;
        }
      }
      break;
    case 6:
      if (mDate.getDate() === 6) {
        musicID = 1369798757;
      }
      if (mDate.getDate() === 21) {
        musicID = 1373003590;
      }
      if (mDate.getDate() === 1) {
        musicID = 413829859;
      }
      if (mDate.getDay() === 0) {
        if ((mDate.getDate() - 14) > 0 && (mDate.getDate() - 21) <= 0) {
          musicID = 464647429;
        }
      }
      break;
    case 7:
      if (mDate.getDate() === 7) {
        musicID = 1376125044;
      }
      if (mDate.getDate() === 23) {
        musicID = 1379486285;
      }
      if (mDate.getDate() === 1) {
        musicID = 108653;
      }
      break;
    case 8:
      if (mDate.getDate() === 8) {
        musicID = 1382781647;
      }
      if (mDate.getDate() === 21) {
        musicID = 1385858356;
      }
      if (mDate.getDate() === 1) {
        musicID = 29755371;
      }
      break;
    case 9:
      if (mDate.getDate() === 8) {
        musicID = 1389431504;
      }
      if (mDate.getDate() === 23) {
        musicID = 1392177451;
      }
      if (mDate.getDate() === 3) {
        musicID = 1831474139;
      }
      if (mDate.getDate() === 10) {
        musicID = 445546970;
      }
      break;
    case 10:
      if (mDate.getDate() === 8) {
        musicID = 1394096908;
      }
      if (mDate.getDate() === 23) {
        musicID = 1318877229;
      }
      if (mDate.getDate() === 1) {
        musicID = 545733601;
      }
      if (mDate.getDate() === 24) {
        musicID = 1300936430;
      }
      if (mDate.getDate() === 28) {
        musicID = 1988849953;
      }
      if (mDate.getDate() === 31) {
        musicID = 406730499;
      }
      break;
    case 11:
      if (mDate.getDate() === 7) {
        musicID = 1401497267;
      }
      if (mDate.getDate() === 22) {
        musicID = 1404492361;
      }
      if (mDate.getDate() === 1) {
        musicID = 864962415;
      }
      if (mDate.getDate() === 11) {
        musicID = 86365;
      }
      if (mDate.getDay() === 4) {
        if ((mDate.getDate() - 21) > 0 && (mDate.getDate() - 28) <= 0) {
          musicID = 34228371;
        }
      }
      if (mDate.getDay() === 5) {
        if ((mDate.getDate() - 21) > 0 && (mDate.getDate() - 28) <= 0) {
          musicID = 409288060;
        }
      }
      break;
    case 12:
      if (mDate.getDate() === 7) {
        musicID = 1407970468;
      }
      if (mDate.getDate() === 22) {
        musicID = 1410831831;
      }
      if (mDate.getDate() === 13) {
        musicID = 33410648;
      }
      if (mDate.getDate() === 20) {
        musicID = 406347945;
      }
      if (mDate.getDate() === 24) {
        musicID = 32272865;
      }
      if (mDate.getDate() === 25) {
        musicID = 22509038;
      }
      break;
    default:
      break;
  }
  switch (mLunar.lunarMonth) {
    case '正':
      if (mLunar.lunarDay === '初一') {
        musicID = 1973080765;
      }
      if (mLunar.lunarDay === '十五') {
        musicID = 1973081095;
      }
      break;
    case '二':
      if (mLunar.lunarDay === '初二') {
        musicID = 1345368792;
      }
      break;
    case '五':
      if (mLunar.lunarDay === '初五') {
        musicID = 478854449;
      }
      break;
    case '七':
      if (mLunar.lunarDay === '初七') {
        musicID = 1363071413;
      }
      if (mLunar.lunarDay === '十五') {
        musicID = 188175;
      }
      break;
    case '八':
      if (mLunar.lunarDay === '十五') {
        musicID = 405242498;
      }
      break;
    case '九':
      if (mLunar.lunarDay === '初九') {
        musicID = 1976554773;
      }
      break;
    case '腊':
      var chuxi = '三十';
      if (lunarYearMonths(lunarYearArr[mDate.getFullYear() - 1949])[12] === 29) {
        chuxi = '廿九';
      } else {
        chuxi = '三十';
      }
      if (mLunar.lunarDay === '初八') {
        musicID = 1824454149;
      }
      if (mLunar.lunarDay === '廿三') {
        musicID = 1831474117;
      }
      if (mLunar.lunarDay === '廿四') {
        musicID = 1831474123;
      }
      if (mLunar.lunarDay === chuxi) {
        musicID = 1918849688;
      }
      break;
    default:
      break;
  }
  document.getElementById('music_box').src = 'https://music.163.com/outchain/player?type=2&id='+musicID+'&auto=1&height=66';
}
function sloarToLunar(sy, sm, sd) {
  let ly, lm, ld;
  sm -= 1;
  let daySpan = (Date.UTC(sy, sm, sd) - Date.UTC(1949, 0, 29)) / (24 * 60 * 60 * 1000) + 1;
  for (let j = 0; j < lunarYearArr.length; j ++) {
    daySpan -= lunarYearDays(lunarYearArr[j]);
    if (daySpan <= 0) {
      ly = 1949 + j;
      daySpan += lunarYearDays(lunarYearArr[j]);
      break;
    }
  }
  for (let k = 0; k < lunarYearMonths(lunarYearArr[ly - 1949]).length; k ++) {
    daySpan -= lunarYearMonths(lunarYearArr[ly - 1949])[k];
    if (daySpan <= 0) {
      if (hasLeapMonth(lunarYearArr[ly - 1949]) && hasLeapMonth(lunarYearArr[ly - 1949]) <= k) {
        if (hasLeapMonth(lunarYearArr[ly - 1949]) < k) {
          lm = k;
        } else if (hasLeapMonth(lunarYearArr[ly - 1949]) === k) {
          lm = '闰' + k;
        } else {
          lm = k + 1;
        }
      } else {
        lm = k + 1;
      }
      daySpan += lunarYearMonths(lunarYearArr[ly - 1949])[k];
      break;
    }
  }
  ld = daySpan;
  if (hasLeapMonth(lunarYearArr[ly - 1949]) && (typeof (lm) === 'string' && lm.indexOf('闰') > -1)) {
    lm = `闰${lunarMonth[/\d/.exec(lm) - 1]}`;
  } else {
    lm = lunarMonth[lm - 1];
  }
  ly = getTianGan(ly) + getDiZhi(ly);
  if (ld < 11) {
    ld = `${lunarDay[10]}${lunarDay[ld-1]}`;
  } else if (ld > 10 && ld < 20) {
    ld = `${lunarDay[9]}${lunarDay[ld-11]}`;
  } else if (ld === 20) {
    ld = `${lunarDay[1]}${lunarDay[9]}`;
  } else if (ld > 20 && ld < 30) {
    ld = `${lunarDay[11]}${lunarDay[ld-21]}`;
  } else if (ld === 30) {
    ld = `${lunarDay[2]}${lunarDay[9]}`;
  }
  return {
    lunarYear: ly,
    lunarMonth: lm,
    lunarDay: ld
  };
}
function hasLeapMonth(ly) {
  if (ly & 0xf) {
    return ly & 0xf;
  } else {
    return false;
  }
}
function leapMonthDays(ly) {
  if (hasLeapMonth(ly)) {
    return (ly & 0xf0000) ? 30 : 29;
  } else {
    return 0;
  }
}
function lunarYearDays(ly) {
  let totalDays = 0;
  for (let i = 0x8000; i > 0x8; i >>= 1) {
    let monthDays = (ly & i) ? 30 : 29;
    totalDays += monthDays;
  }
  if (hasLeapMonth(ly)) {
    totalDays += leapMonthDays(ly);
  }
  return totalDays;
}
function lunarYearMonths(ly) {
  let monthArr = [];
  for (let i = 0x8000; i > 0x8; i >>= 1) {
    monthArr.push((ly & i) ? 30 : 29);
  }
  if (hasLeapMonth(ly)) {
    monthArr.splice(hasLeapMonth(ly), 0, leapMonthDays(ly));
  }
  return monthArr;
}
function getTianGan(ly) {
  let tianGanKey = (ly - 3) % 10;
  if (tianGanKey === 0) tianGanKey = 10;
  return tianGan[tianGanKey - 1];
}
function getDiZhi(ly) {
  let diZhiKey = (ly - 3) % 12;
  if (diZhiKey === 0) diZhiKey = 12;
  return diZhi[diZhiKey - 1];
}
window.onload = setMusic();
setInterval(function showTime() {
  var client_w = document.documentElement.clientWidth || document.body.clientHeight;
  var date = new Date();
  var lunar = sloarToLunar(date.getFullYear(), (date.getMonth() + 1), date.getDate());
  var zi = date.getMinutes();
  document.getElementsByClassName('date')[0].innerHTML = null;
  addTimeString(date.getFullYear(), '年');
  addTimeString((date.getMonth() + 1), '月');
  addTimeString(date.getDate(), '日&nbsp;&nbsp;');
  switch (date.getDay()) {
      case 1:
        document.getElementsByClassName('date')[0].innerHTML += '周一&nbsp;&nbsp;&nbsp;&nbsp;';
        break;
      case 2:
        document.getElementsByClassName('date')[0].innerHTML += '周二&nbsp;&nbsp;&nbsp;&nbsp;';
        break;
      case 3:
        document.getElementsByClassName('date')[0].innerHTML += '周三&nbsp;&nbsp;&nbsp;&nbsp;';
        break;
      case 4:
        document.getElementsByClassName('date')[0].innerHTML += '周四&nbsp;&nbsp;&nbsp;&nbsp;';
        break;
      case 5:
        document.getElementsByClassName('date')[0].innerHTML += '周五&nbsp;&nbsp;&nbsp;&nbsp;';
        break;
      case 6:
        document.getElementsByClassName('date')[0].innerHTML += '周六&nbsp;&nbsp;&nbsp;&nbsp;';
        break;
      default:
        document.getElementsByClassName('date')[0].innerHTML += '周日&nbsp;&nbsp;&nbsp;&nbsp;';
  }
  addTimeString(date.getHours(), ':');
  addTimeString(date.getMinutes(), ':');
  addTimeString(date.getSeconds(), '');
  if (client_w >= 1400){
    document.getElementsByClassName('date')[0].innerHTML += ('&nbsp;&nbsp' + lunar.lunarYear + '年' + lunar.lunarMonth + '月' + lunar.lunarDay);
    switch (date.getHours()) {
      case 0:
        document.getElementsByClassName('date')[0].innerHTML += '子正';
        break;
      case 1:
        document.getElementsByClassName('date')[0].innerHTML += '丑初';
        break;
      case 2:
        document.getElementsByClassName('date')[0].innerHTML += '丑正';
        break;
      case 3:
        document.getElementsByClassName('date')[0].innerHTML += '寅初';
        break;
      case 4:
        document.getElementsByClassName('date')[0].innerHTML += '寅正';
        break;
      case 5:
        document.getElementsByClassName('date')[0].innerHTML += '卯初';
        break;
      case 6:
        document.getElementsByClassName('date')[0].innerHTML += '卯正';
        break;
      case 7:
        document.getElementsByClassName('date')[0].innerHTML += '辰初';
        break;
      case 8:
        document.getElementsByClassName('date')[0].innerHTML += '辰正';
          break;
      case 9:
        document.getElementsByClassName('date')[0].innerHTML += '巳初';
        break;
      case 10:
        document.getElementsByClassName('date')[0].innerHTML += '巳正';
        break;
      case 11:
        document.getElementsByClassName('date')[0].innerHTML += '午初';
        break;
      case 12:
        document.getElementsByClassName('date')[0].innerHTML += '午正';
        break;
      case 13:
        document.getElementsByClassName('date')[0].innerHTML += '未初';
        break;
      case 14:
        document.getElementsByClassName('date')[0].innerHTML += '未正';
        break;
      case 15:
        document.getElementsByClassName('date')[0].innerHTML += '申初';
        break;
      case 16:
        document.getElementsByClassName('date')[0].innerHTML += '申正';
        break;
      case 17:
        document.getElementsByClassName('date')[0].innerHTML += '酉初';
        break;
      case 18:
        document.getElementsByClassName('date')[0].innerHTML += '酉正';
        break;
      case 19:
        document.getElementsByClassName('date')[0].innerHTML += '戌初';
        break;
      case 20:
        document.getElementsByClassName('date')[0].innerHTML += '戌正';
        break;
      case 21:
        document.getElementsByClassName('date')[0].innerHTML += '亥初';
        break;
      case 22:
        document.getElementsByClassName('date')[0].innerHTML += '亥正';
        break;
      default:
        document.getElementsByClassName('date')[0].innerHTML += '子初';
    }
    if (date.getMinutes() >= 15 && date.getMinutes() < 30) {
      document.getElementsByClassName('date')[0].innerHTML += '一刻';
      zi = zi - 15;
    } else if (date.getMinutes() >= 30 && date.getMinutes() < 45) {
      document.getElementsByClassName('date')[0].innerHTML += '二刻';
      zi = zi - 30;
    } else if (date.getMinutes() >= 45 && date.getMinutes() < 60) {
      document.getElementsByClassName('date')[0].innerHTML += '三刻';
      zi = zi - 45;
    }
    if (zi >= 5 && zi < 10) {
      document.getElementsByClassName('date')[0].innerHTML += '一字';
    } else if (zi >= 10 && date.getMinutes() < 15) {
      document.getElementsByClassName('date')[0].innerHTML += '二字';
    }
    switch (date.getMonth() + 1) {
      case 1:
        if (date.getDate() === 6) {
          document.getElementsByClassName('date')[0].innerHTML += '&nbsp;小寒';
        }
        if (date.getDate() === 20) {
          document.getElementsByClassName('date')[0].innerHTML += '&nbsp;大寒';
        }
        if (date.getDate() === 1) {
          document.getElementsByClassName('date')[0].innerHTML += '&nbsp;元旦';
        }
        break;
      case 2:
        if (date.getDate() === 4) {
          document.getElementsByClassName('date')[0].innerHTML += '&nbsp;立春';
        }
        if (date.getDate() === 19) {
          document.getElementsByClassName('date')[0].innerHTML += '&nbsp;雨水';
        }
        if (date.getDate() === 14) {
          document.getElementsByClassName('date')[0].innerHTML += '&nbsp;情人节';
        }
        break;
      case 3:
        if (date.getDate() === 6) {
          document.getElementsByClassName('date')[0].innerHTML += '&nbsp;惊蛰';
        }
        if (date.getDate() === 21) {
          document.getElementsByClassName('date')[0].innerHTML += '&nbsp;春分';
        }
        if (date.getDate() === 8) {
          document.getElementsByClassName('date')[0].innerHTML += '&nbsp;国际劳动妇女节';
        }
        if (date.getDate() === 12) {
          document.getElementsByClassName('date')[0].innerHTML += '&nbsp;植树节';
        }
        if (date.getDate() === 14) {
          document.getElementsByClassName('date')[0].innerHTML += '&nbsp;白色情人节';
        }
        if (date.getDate() === 15) {
          document.getElementsByClassName('date')[0].innerHTML += '&nbsp;国际消费者权益日';
        }
        if (date.getDate() > 21) {
          if (date.getDay() === 0) {
            switch (sloarToLunar(date.getFullYear(), 3, 21).lunarDay) {
              case '初六':
                if (date.getDate() > 30) {
                  document.getElementsByClassName('date')[0].innerHTML += '&nbsp;复活节';
                }
                break;
              case '初七':
                if (date.getDate() > 29) {
                  document.getElementsByClassName('date')[0].innerHTML += '&nbsp;复活节';
                }
                break;
              case '初八':
                if (date.getDate() > 28) {
                  document.getElementsByClassName('date')[0].innerHTML += '&nbsp;复活节';
                }
                break;
              case '初九':
                if (date.getDate() > 27) {
                  document.getElementsByClassName('date')[0].innerHTML += '&nbsp;复活节';
                }
                break;
              case '初十':
                if (date.getDate() > 26) {
                  document.getElementsByClassName('date')[0].innerHTML += '&nbsp;复活节';
                }
                break;
              case '十一':
                if (date.getDate() > 25) {
                  document.getElementsByClassName('date')[0].innerHTML += '&nbsp;复活节';
                }
                break;
              case '十二':
                if (date.getDate() > 24) {
                  document.getElementsByClassName('date')[0].innerHTML += '&nbsp;复活节';
                }
                break;
              case '十三':
                if (date.getDate() > 23 && date.getDate() < 31) {
                  document.getElementsByClassName('date')[0].innerHTML += '&nbsp;复活节';
                }
                break;
              case '十四':
                if (date.getDate() > 22 && date.getDate() < 30) {
                  document.getElementsByClassName('date')[0].innerHTML += '&nbsp;复活节';
                }
                break;
              case '十五':
                if (date.getDate() < 29) {
                  document.getElementsByClassName('date')[0].innerHTML += '&nbsp;复活节';
                }
                break;
              default:
                break;
            }
          }
        }
        break;
      case 4:
        if (date.getDate() === 5) {
          document.getElementsByClassName('date')[0].innerHTML += '&nbsp;清明';
        }
        if (date.getDate() === 20) {
          document.getElementsByClassName('date')[0].innerHTML += '&nbsp;谷雨';
        }
        if (date.getDate() === 1) {
          document.getElementsByClassName('date')[0].innerHTML += '&nbsp;愚人节';
        }
        if (date.getDay() === 0) {
          var lunarMonthDays = 30;
          switch (sloarToLunar(date.getFullYear(), 3, 21).lunarMonth) {
            case '正':
              lunarMonthDays = lunarYearMonths(lunarYearArr[date.getFullYear() - 1949])[1];
              break;
            case '闰正':
              lunarMonthDays = lunarYearMonths(lunarYearArr[date.getFullYear() - 1949])[1];
              break;
            case '二':
              lunarMonthDays = lunarYearMonths(lunarYearArr[date.getFullYear() - 1949])[2];
              break;
            case '闰二':
              lunarMonthDays = lunarYearMonths(lunarYearArr[date.getFullYear() - 1949])[2];
              break;
            case '三':
              lunarMonthDays = lunarYearMonths(lunarYearArr[date.getFullYear() - 1949])[3];
              break;
            case '闰三':
              lunarMonthDays = lunarYearMonths(lunarYearArr[date.getFullYear() - 1949])[3];
              break;
            case '四':
              lunarMonthDays = lunarYearMonths(lunarYearArr[date.getFullYear() - 1949])[4];
              break;
            case '闰四':
              lunarMonthDays = lunarYearMonths(lunarYearArr[date.getFullYear() - 1949])[4];
              break;
            case '五':
              lunarMonthDays = lunarYearMonths(lunarYearArr[date.getFullYear() - 1949])[5];
              break;
            case '闰五':
              lunarMonthDays = lunarYearMonths(lunarYearArr[date.getFullYear() - 1949])[5];
              break;
            case '六':
              lunarMonthDays = lunarYearMonths(lunarYearArr[date.getFullYear() - 1949])[6];
              break;
            case '闰六':
              lunarMonthDays = lunarYearMonths(lunarYearArr[date.getFullYear() - 1949])[6];
              break;
            case '七':
              lunarMonthDays = lunarYearMonths(lunarYearArr[date.getFullYear() - 1949])[7];
              break;
            case '闰七':
              lunarMonthDays = lunarYearMonths(lunarYearArr[date.getFullYear() - 1949])[7];
              break;
            case '八':
              lunarMonthDays = lunarYearMonths(lunarYearArr[date.getFullYear() - 1949])[8];
              break;
            case '闰八':
              lunarMonthDays = lunarYearMonths(lunarYearArr[date.getFullYear() - 1949])[8];
              break;
            case '九':
              lunarMonthDays = lunarYearMonths(lunarYearArr[date.getFullYear() - 1949])[9];
              break;
            case '闰九':
              lunarMonthDays = lunarYearMonths(lunarYearArr[date.getFullYear() - 1949])[9];
              break;
            case '十':
              lunarMonthDays = lunarYearMonths(lunarYearArr[date.getFullYear() - 1949])[10];
              break;
            case '闰十':
              lunarMonthDays = lunarYearMonths(lunarYearArr[date.getFullYear() - 1949])[10];
              break;
            case '冬':
              lunarMonthDays = lunarYearMonths(lunarYearArr[date.getFullYear() - 1949])[11];
              break;
            case '闰冬':
              lunarMonthDays = lunarYearMonths(lunarYearArr[date.getFullYear() - 1949])[11];
              break;
            case '腊':
              lunarMonthDays = lunarYearMonths(lunarYearArr[date.getFullYear() - 1949])[12];
              break;
            case '闰腊':
              lunarMonthDays = lunarYearMonths(lunarYearArr[date.getFullYear() - 1949])[12];
              break;
            default:
              lunarMonthDays = 30;
          }
          switch (sloarToLunar(date.getFullYear(), 3, 21).lunarDay) {
            case '十六':
              if (date.getDate() > (lunarMonthDays - 11) && date.getDate() < (lunarMonthDays - 3)) {
                document.getElementsByClassName('date')[0].innerHTML += '&nbsp;复活节';
                musicID = 1827002464;
              }
              break;
            case '十七':
              if (date.getDate() > (lunarMonthDays - 12) && date.getDate() < (lunarMonthDays - 4)) {
                document.getElementsByClassName('date')[0].innerHTML += '&nbsp;复活节';
                musicID = 1827002464;
              }
              break;
            case '十八':
              if (date.getDate() > (lunarMonthDays - 13) && date.getDate() < (lunarMonthDays - 5)) {
                document.getElementsByClassName('date')[0].innerHTML += '&nbsp;复活节';
                musicID = 1827002464;
              }
              break;
            case '十九':
              if (date.getDate() > (lunarMonthDays - 14) && date.getDate() < (lunarMonthDays - 6)) {
                document.getElementsByClassName('date')[0].innerHTML += '&nbsp;复活节';
                musicID = 1827002464;
              }
              break;
            case '二十':
              if (date.getDate() > (lunarMonthDays - 15) && date.getDate() < (lunarMonthDays - 7)) {
                document.getElementsByClassName('date')[0].innerHTML += '&nbsp;复活节';
                musicID = 1827002464;
              }
              break;
            case '廿一':
              if (date.getDate() > (lunarMonthDays - 16) && date.getDate() < (lunarMonthDays - 8)) {
                document.getElementsByClassName('date')[0].innerHTML += '&nbsp;复活节';
                musicID = 1827002464;
              }
              break;
            case '廿二':
              if (date.getDate() > (lunarMonthDays - 17) && date.getDate() < (lunarMonthDays - 9)) {
                document.getElementsByClassName('date')[0].innerHTML += '&nbsp;复活节';
                musicID = 1827002464;
              }
              break;
            case '廿三':
              if (date.getDate() > (lunarMonthDays - 18) && date.getDate() < (lunarMonthDays - 10)) {
                document.getElementsByClassName('date')[0].innerHTML += '&nbsp;复活节';
                musicID = 1827002464;
              }
              break;
            case '廿四':
              if (date.getDate() > (lunarMonthDays - 19) && date.getDate() < (lunarMonthDays - 11)) {
                document.getElementsByClassName('date')[0].innerHTML += '&nbsp;复活节';
                musicID = 1827002464;
              }
              break;
            case '廿五':
              if (date.getDate() > (lunarMonthDays - 20) && date.getDate() < (lunarMonthDays - 12)) {
                document.getElementsByClassName('date')[0].innerHTML += '&nbsp;复活节';
                musicID = 1827002464;
              }
              break;
            case '廿六':
              if (date.getDate() > (lunarMonthDays - 21) && date.getDate() < (lunarMonthDays - 13)) {
                document.getElementsByClassName('date')[0].innerHTML += '&nbsp;复活节';
                musicID = 1827002464;
              }
              break;
            case '廿七':
              if (date.getDate() > (lunarMonthDays - 22) && date.getDate() < (lunarMonthDays - 14)) {
                document.getElementsByClassName('date')[0].innerHTML += '&nbsp;复活节';
                musicID = 1827002464;
              }
              break;
            case '廿八':
              if (date.getDate() > (lunarMonthDays - 23) && date.getDate() < (lunarMonthDays - 15)) {
                document.getElementsByClassName('date')[0].innerHTML += '&nbsp;复活节';
                musicID = 1827002464;
              }
              break;
            case '廿九':
              if (date.getDate() > (lunarMonthDays - 24) && date.getDate() < (lunarMonthDays - 16)) {
                document.getElementsByClassName('date')[0].innerHTML += '&nbsp;复活节';
                musicID = 1827002464;
              }
              break;
            case '三十':
              if (date.getDate() > (lunarMonthDays - 25) && date.getDate() < (lunarMonthDays - 17)) {
                document.getElementsByClassName('date')[0].innerHTML += '&nbsp;复活节';
                musicID = 1827002464;
              }
              break;
            case '初一':
              if (date.getDate() > 4 && date.getDate() < 12) {
                document.getElementsByClassName('date')[0].innerHTML += '&nbsp;复活节';
                musicID = 1827002464;
              }
              break;
            case '初二':
              if (date.getDate() > 3 && date.getDate() < 11) {
                document.getElementsByClassName('date')[0].innerHTML += '&nbsp;复活节';
                musicID = 1827002464;
              }
              break;
            case '初三':
              if (date.getDate() > 2 && date.getDate() < 10) {
                document.getElementsByClassName('date')[0].innerHTML += '&nbsp;复活节';
                musicID = 1827002464;
              }
              break;
            case '初四':
              if (date.getDate() > 1 && date.getDate() < 9) {
                document.getElementsByClassName('date')[0].innerHTML += '&nbsp;复活节';
                musicID = 1827002464;
              }
              break;
            case '初五':
              if (date.getDate() < 8) {
                document.getElementsByClassName('date')[0].innerHTML += '&nbsp;复活节';
                musicID = 1827002464;
              }
              break;
            default:
              break;
          }
        }
        break;
      case 5:
        if (date.getDate() === 6) {
          document.getElementsByClassName('date')[0].innerHTML += '&nbsp;立夏';
        }
        if (date.getDate() === 21) {
          document.getElementsByClassName('date')[0].innerHTML += '&nbsp;小满';
        }
        if (date.getDate() === 1) {
          document.getElementsByClassName('date')[0].innerHTML += '&nbsp;五一国际劳动节';
        }
        if (date.getDate() === 4) {
          document.getElementsByClassName('date')[0].innerHTML += '&nbsp;五四青年节';
        }
        if (date.getDay() === 0) {
          if ((date.getDate() - 7) > 0 && (date.getDate() - 14) <= 0) {
            document.getElementsByClassName('date')[0].innerHTML += '&nbsp;母亲节';
          }
        }
        break;
      case 6:
        if (date.getDate() === 6) {
          document.getElementsByClassName('date')[0].innerHTML += '&nbsp;芒种';
        }
        if (date.getDate() === 21) {
          document.getElementsByClassName('date')[0].innerHTML += '&nbsp;夏至';
        }
        if (date.getDate() === 1) {
          document.getElementsByClassName('date')[0].innerHTML += '&nbsp;国际儿童节';
        }
        if (date.getDay() === 0) {
          if ((date.getDate() - 14) > 0 && (date.getDate() - 21) <= 0) {
            document.getElementsByClassName('date')[0].innerHTML += '&nbsp;父亲节';
          }
        }
        break;
      case 7:
        if (date.getDate() === 7) {
          document.getElementsByClassName('date')[0].innerHTML += '&nbsp;小暑';
        }
        if (date.getDate() === 23) {
          document.getElementsByClassName('date')[0].innerHTML += '&nbsp;大暑';
        }
        if (date.getDate() === 1) {
          document.getElementsByClassName('date')[0].innerHTML += '&nbsp;中国共产党建党日&nbsp;香港回归纪念日';
        }
        break;
      case 8:
        if (date.getDate() === 8) {
          document.getElementsByClassName('date')[0].innerHTML += '&nbsp;立秋';
        }
        if (date.getDate() === 21) {
          document.getElementsByClassName('date')[0].innerHTML += '&nbsp;处暑';
        }
        if (date.getDate() === 1) {
          document.getElementsByClassName('date')[0].innerHTML += '&nbsp;八一建军节';
        }
        break;
      case 9:
        if (date.getDate() === 8) {
          document.getElementsByClassName('date')[0].innerHTML += '&nbsp;白露';
        }
        if (date.getDate() === 23) {
          document.getElementsByClassName('date')[0].innerHTML += '&nbsp;秋分';
        }
        if (date.getDate() === 3) {
          document.getElementsByClassName('date')[0].innerHTML += '&nbsp;中国人民抗日战争胜利纪念日';
        }
        if (date.getDate() === 10) {
          document.getElementsByClassName('date')[0].innerHTML += '&nbsp;教师节';
        }
        break;
      case 10:
        if (date.getDate() === 8) {
          document.getElementsByClassName('date')[0].innerHTML += '&nbsp;寒露';
        }
        if (date.getDate() === 23) {
          document.getElementsByClassName('date')[0].innerHTML += '&nbsp;霜降';
        }
        if (date.getDate() === 1) {
          document.getElementsByClassName('date')[0].innerHTML += '&nbsp;中华人民共和国国庆节';
        }
        if (date.getDate() === 24) {
          document.getElementsByClassName('date')[0].innerHTML += '&nbsp;1024程序员节';
        }
        if (date.getDate() === 28) {
          document.getElementsByClassName('date')[0].innerHTML += '&nbsp;世界动画日';
        }
        if (date.getDate() === 31) {
          document.getElementsByClassName('date')[0].innerHTML += '&nbsp;万圣节前夜';
        }
        break;
      case 11:
        if (date.getDate() === 7) {
          document.getElementsByClassName('date')[0].innerHTML += '&nbsp;立冬';
        }
        if (date.getDate() === 22) {
          document.getElementsByClassName('date')[0].innerHTML += '&nbsp;小雪';
        }
        if (date.getDate() === 1) {
          document.getElementsByClassName('date')[0].innerHTML += '&nbsp;万圣节';
        }
        if (date.getDate() === 11) {
          document.getElementsByClassName('date')[0].innerHTML += '&nbsp;光棍节';
        }
        if (date.getDay() === 4) {
          if ((date.getDate() - 21) > 0 && (date.getDate() - 28) <= 0) {
            document.getElementsByClassName('date')[0].innerHTML += '&nbsp;感恩节';
          }
        }
        if (date.getDay() === 5) {
          if ((date.getDate() - 21) > 0 && (date.getDate() - 28) <= 0) {
            document.getElementsByClassName('date')[0].innerHTML += '&nbsp;黑色星期五';
          }
        }
        break;
      case 12:
        if (date.getDate() === 7) {
          document.getElementsByClassName('date')[0].innerHTML += '&nbsp;大雪';
        }
        if (date.getDate() === 22) {
          document.getElementsByClassName('date')[0].innerHTML += '&nbsp;冬至';
        }
        if (date.getDate() === 13) {
          document.getElementsByClassName('date')[0].innerHTML += '&nbsp;南京大屠杀死难者国家公祭日';
        }
        if (date.getDate() === 20) {
          document.getElementsByClassName('date')[0].innerHTML += '&nbsp;澳门回归纪念日';
        }
        if (date.getDate() === 24) {
          document.getElementsByClassName('date')[0].innerHTML += '&nbsp;平安夜';
        }
        if (date.getDate() === 25) {
          document.getElementsByClassName('date')[0].innerHTML += '&nbsp;圣诞节';
        }
        break;
      default:
        break;
    }
    switch (lunar.lunarMonth) {
      case '正':
        if (lunar.lunarDay === '初一') {
          document.getElementsByClassName('date')[0].innerHTML += '&nbsp;春节';
        }
        if (lunar.lunarDay === '十五') {
          document.getElementsByClassName('date')[0].innerHTML += '&nbsp;元宵节';
        }
        break;
      case '二':
        if (lunar.lunarDay === '初二') {
          document.getElementsByClassName('date')[0].innerHTML += '&nbsp;龙抬头';
        }
        break;
      case '五':
        if (lunar.lunarDay === '初五') {
          document.getElementsByClassName('date')[0].innerHTML += '&nbsp;端午节';
        }
        break;
      case '七':
        if (lunar.lunarDay === '初七') {
          document.getElementsByClassName('date')[0].innerHTML += '&nbsp;七夕节';
        }
        if (lunar.lunarDay === '十五') {
          document.getElementsByClassName('date')[0].innerHTML += '&nbsp;中元节';
        }
        break;
      case '八':
        if (lunar.lunarDay === '十五') {
          document.getElementsByClassName('date')[0].innerHTML += '&nbsp;中秋节';
        }
        break;
      case '九':
        if (lunar.lunarDay === '初九') {
          document.getElementsByClassName('date')[0].innerHTML += '&nbsp;重阳节';
        }
        break;
      case '腊':
        var chuxi = '三十';
        if (lunarYearMonths(lunarYearArr[date.getFullYear() - 1949])[12] === 29) {
          chuxi = '廿九';
        } else {
          chuxi = '三十';
        }
        if (lunar.lunarDay === '初八') {
          document.getElementsByClassName('date')[0].innerHTML += '&nbsp;腊八节';
        }
        if (lunar.lunarDay === '廿三') {
          document.getElementsByClassName('date')[0].innerHTML += '&nbsp;北方小年';
        }
        if (lunar.lunarDay === '廿四') {
          document.getElementsByClassName('date')[0].innerHTML += '&nbsp;南方小年';
        }
        if (lunar.lunarDay === chuxi) {
          document.getElementsByClassName('date')[0].innerHTML += '&nbsp;除夕';
        }
        break;
      default:
        break;
    }
  } else {
    document.getElementsByClassName('date')[0].innerHTML += '';
  }
  if (date.getHours() === 0 && date.getMinutes() === 0 && date.getSeconds() === 0){
    setMusic();
  }
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
    }
}
window.onmousewheel = document.onmousewheel = scrollFunc;
document.getElementById("search_btn").onclick = function () {
    var engine = "https://baidu.com/s?wd=";
    if (document.getElementById('search_engine').value === "baidu") {
        engine = "https://baidu.com/s?wd=";
    } else if (document.getElementById('search_engine').value === "bing") {
        engine = "https://bing.com/search?q=";
    } else if (document.getElementById('search_engine').value === "sogou") {
        engine = "https://sogou.com/web?query=";
    } else if (document.getElementById('search_engine').value === "google") {
        engine = "https://google.com/search?q=";
    }
    window.open(engine+document.getElementById("search_keywords").value, "_blank");
}
document.getElementById("search_keywords").addEventListener('keyup', (event) => {
  if (event.keyCode === 13) {
    document.getElementById('search_btn').click();
  }
});
document.getElementsByClassName("hide_menu")[0].onclick = function () {
  document.getElementsByClassName("menu_list")[0].style.transform='translateX(-200px)';
}
document.getElementsByClassName("close")[0].onclick = function () {
  document.getElementsByClassName("menu_list")[0].style.transform='translateX(200px)';
}
