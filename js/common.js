charset="UTF-8";
/*********************************分割线**************************************************/
/**
 * 求 n-m 之间所有数字的和，n < m
 * @param {number}n
 * @param {number}m
 */
function getSum(n, m) {
    var sum = 0;
    for (var i = n; i <= m; i++) {
        sum += i;
    }
    console.log(sum);
}

/*********************************分割线**************************************************/
/**
 * 传递任意参数，可以计算和的randomGetSum函数
 */
function randomGetSum() {
    var sum = 0;
    for (var i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    console.log(sum);
}

/*********************************分割线**************************************************/
/**
 * 判断一个数是不是偶数的函数
 * @param {number}num
 */
function isEven(num) {
    if (typeof num !== 'number') {
        alert('参数不正确！');
        return;
    }
    if (num % 2 === 0) {
        return '这是一个偶数';
    } else {
        return '这是一个奇数';
    }
}

/*********************************分割线**************************************************/
/**
 * 模拟Math.min
 */
function getMin() {
    var minValue = arguments[0];
    for (var i = 0; i < arguments.length; i++) {
        if (arguments[i] < minValue) {
            minValue = arguments[i]
        }
    }
    return minValue;
}

/*********************************分割线**************************************************/
/**
 * 模拟Math.max
 */
function getMax() {
    var MaxValue = arguments[0];
    for (var i = 0; i < arguments.length; i++) {
        if (arguments[i] > MaxValue) {
            MaxValue = arguments[i];
        }
    }
    return MaxValue;
}

/*********************************分割线**************************************************/
/**
 *模拟sort实现，冒泡排序  改变a-b 或者 b-a就可以调整是降序还是升序排列
 * @param {array}array
 * @param {function}fnCompare
 */
function sort(array, fnCompare) {
    //控制循环次数
    if (!Array.isArray(array)) {
        alert('输入的不是数组');
    }
    for (var i = 0; i < array.length - 1; i++) {
        var sortFlag = true;
        for (var j = 0; j < array.length - 1 - i; j++) {
            //控制比较次数
            if (fnCompare(array[j], array[j + 1]) > 0) {
                sortFlag = false;
                var temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
        if (sortFlag) {
            break;
        }
    }
}

function sortNumber(a, b) {
    return a - b;
}

//调用 sort(arr, sortNumber);
/*********************************分割线**************************************************/
/**
 * 随机数，不含最大值，含最小值
 * @param {number}min
 * @param {number}max
 * @returns {number}
 */
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //不含最大值，含最小值
}

/*********************************分割线**************************************************/
/**
 *随机数 含最大值，含最小值
 * @param {number}min
 * @param {number}max
 * @returns {number}
 */
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //含最大值，含最小值
}

/*********************************分割线**************************************************/
/**
 *
 * 根据id获取标签
 * @param {String}id
 */
function $(id) {
    return typeof id === 'string' ? document.getElementById(id) : null;
}

/*********************************分割线**************************************************/
/**
 * 格式化时间 yyyy-mm-dd  hh:mm:ss
 * @param {Date}date
 */
function formatDate(date) {
    //验证
    if (!(date instanceof Date)) {
        console.warn('您输入的不是一个日期');
        return false;
    } else {
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var day = date.getDate();
        var hour = date.getHours();
        var minute = date.getMinutes();
        var second = date.getSeconds();
        month = month < 10 ? '0' + month : month;
        day = day < 10 ? '0' + day : day;
        hour = hour < 10 ? '0' + hour : hour;
        minute = minute < 10 ? '0' + minute : minute;
        second = second < 10 ? '0' + second : second;
        return year + '-' + month + '-' + day + '-' + hour + ':' + minute + ':' + second;
    }
};

/*********************************分割线**************************************************/
/**
 * 动画函数的封装
 * @param {String}btnId
 * @param {String}boxId
 * @param {Number}step
 * @param {Number}target
 */
function linearAnimation(btnId, boxId, step, target) {
    var box = document.getElementById(boxId), btn = document.getElementById(btnId);
    var begin = 0, intervalID, step = step || 0;
    btn.onclick = function () {
        clearInterval(intervalID);
        intervalID = setInterval(function () {
            begin += step;
            if (begin >= target) {
                begin = target;
                clearInterval(intervalID);
            }
            box.style.marginLeft = begin + 'px';
        }, 100);
    }
};

/*********************************分割线**************************************************/
/**
 * 通过json封装scroll属性  兼容其他的浏览器
 * @returns {{top: number, left: number}}
 */
function scroll() {
    if (window.pageYOffset !== null) {
        return {
            "top": window.pageYOffset,
            "left": window.pageXOffset
        }
    } else if (document.compatMode === 'CSS1Compat') {
        return {
            "top": document.documentElement.scrollTop,
            "left": document.documentElement.scrollLeft
        }
    } else {
        return {
            "top": document.body.scrollTop,
            "left": document.body.scrollLeft
        }
    }
}

/*********************************分割线**************************************************/
/**
 * pageX,Y 的兼容性 处理方法
 * 即 用clientX + 滚动出去的距离
 * @param e
 * @returns {{x: (Number|*), y: (Number|*)}}
 */
function getPage(e) {
    e = e || window.event;
    return {
        x: e.pageX || e.clientX + scroll().left,
        y: e.pageY || e.clientY + scroll().top
    }
};

/*********************************分割线**************************************************/
/**
 * 获取数组最小值的索引,要传入数组和那个值，返回的数字
 * @param {Array}arr
 * @param {Number}val
 * @returns {number}
 */
function getMinBoxIndex(arr, val) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === val) {
            return i;
        }
    }
}

/*********************************分割线**************************************************/
/**
 *令元素的属性为显示
 * @param ele
 */
function show(ele) {
    ele.style.display = 'block';
}

/*********************************分割线**************************************************/
/**
 *令元素的属性为隐藏
 * @param ele
 */
function hide(ele) {
    ele.style.display = 'none';
}

/*********************************分割线**************************************************/
/**
 * 封装获取页面的宽度和高度 兼容所有的浏览器
 * @returns {{width: number, height: number}}
 */
function client() {
    if (window.innerWidth !== null) {
        return {
            "width": window.innerWidth,
            "height": window.innerHeight
        }
    } else if (document.compatMode === 'CSS1Compat') {
        return {
            "width": document.documentElement.clientWidth,
            "height": document.documentElement.clientHeight
        }
    } else {
        return {
            "width": document.body.clientWidth,
            "height": document.body.clientHeight
        }
    }
};

/*********************************分割线**************************************************/
/**
 * 阻止事件冒泡的兼容写法  兼容IE 6、7、8，谷歌浏览器
 * * @param event
 */
function cancelBubble_R(event) {
    if (event && event.stopPropagation) {
        event.stopPropagation();
    } else {
        event.cancelBubble = true;
    }
}

/*********************************分割线**************************************************/
/**
 * 兼容innerText 和 textContent 的代码
 * 对于  IE 低版本 ：  只支持 innerText(ie8) ,   IE9 开始  两个属性 都支持
 * 对于 firefox  低版本 只支持  textContent   ,高版本  两个属性都支持
 * @param element
 * @param {String}txt
 */
function setInnerText(element, txt) {
    if (element.textContent) {//支持谷歌,火狐,IE8
        element.textContent = txt;
    } else {//不支持IE8浏览器
        element.innerText = txt;
    }
};

/*********************************分割线**************************************************/
/**
 *封装innerHTML
 * @param element
 * @param txt
 */
function setInnerHtml(element, txt) {
    element.innerHTML = txt;
}

/*********************************分割线**************************************************/
/**
 * 兼容所有浏览器的文字选中
 * @type {string}
 */
var selectedText = '';
if (window.getSelection) { //标准模式选中获取文字
    selectedText = window.getSelection().toString();
} else {
    selectedText = window.selection.createRange().text;
}

/*********************************分割线**************************************************/
/**
 * 设置文字不被选中
 */
function S() {
    return window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
}

/*********************************分割线**************************************************/
/**
 * 改变标签CSS的属性值,通过下标的方式赋值
 * @param {Object}eleObj
 * @param {String}attr
 * @param {String || Number}value
 */
function changeCssStyle(eleObj, attr, value) {
    eleObj.style[attr] = value;
}

/*********************************分割线**************************************************/
/**
 * 获取到CSS的值，任意地方去获取。兼容所有浏览器
 * @param {Object}obj
 * @param {String}attr
 * @returns {string|*}
 */
function getStyleAttr(obj, attr) {
    if (obj.currentStyle) {//IE和Opera的
        return obj.currentStyle[attr];
    } else {//w3c标准
        return window.getComputedStyle(obj, null)[attr];
    }
}

/*********************************分割线**************************************************/
/**
 * 缓动动画函数,实现多组动画
 * @param {Object}eleObj
 * @param {Object}json
 * @param {Function}fn
 */
function buffer(eleObj, json, fn) {
    //1、先清后设
    clearInterval(eleObj.timeID);
    //1.1 定义变量
    var speed = 0, begin = 0, target = 0;
    //2、设置定时器
    eleObj.timeID = setInterval(function () {
        var flag = true;
        //遍历json
        for (var key in json) {
            if (json.hasOwnProperty(key)) {
                if (key === 'opacity') {
                    begin = parseInt(getStyleAttr(eleObj, key) * 100) || 100;
                    target = parseInt(json[key] * 100);
                } else {
                    begin = parseInt(getStyleAttr(eleObj, key)) || 0;
                    target = parseInt(json[key]);
                }
                //求出步长
                speed = (target - begin) * 0.2;
                speed = (target > begin) ? Math.ceil(speed) : Math.floor(speed);
                if (key === 'opacity') {
                    eleObj.style.opacity = (begin + speed) / 100;
                } else {
                    eleObj.style[key] = begin + speed + 'px';
                }
                if (begin !== target) {
                    flag = false;
                };
            };
        };
        //清除定时器
        if (flag) {
            clearInterval(eleObj.timeID);
            //开启令一组动画 一种方式
            /*if(fn){
                fn();
            }*/
            fn && fn();
        }
    }, 20);
}

/*********************************分割线**************************************************/
/**
 * 让首字母大写的函数
 * @param {String}str
 * @returns {string}
 */
function titleCase(str) {
    var temp = [];
    str = str.toLowerCase();//全部转换为小写
    temp = str.split(" ");//分割存入数组
    for (var i = 0; i < temp.length; i++) {
        var str_temp = temp[i].charAt(0);//获取首字母
        str_temp = str_temp.toUpperCase();//转换为大写
        temp[i] = temp[i].replace(temp[i].charAt(0), str_temp);//将首字母变换
    }
    str = temp.join(" ");
    return str;
}

/*********************************分割线**************************************************/
/**
 *禁止复制网页里面的内容
 * @param {String}ele
 */
function onCopy(ele) {
    var element = typeof ele === 'string' ? document.getElementById(ele) : null;
    element.oncopy = function () {
        return false;
    }
}
/*********************************分割线**************************************************/
/**
 * 禁用键盘按键,Backspace键,enter键,F5键
 */
function maskingKeyBoard() {
    if (event.keyCode === 8) {/*判断是否为Backspace键*/
        event.keyCode = 0;
        event.returnValue = false;
        alert('当前不允许用Backspace键');
    }else if(event.keyCode === 13){/*判断是否为enter键*/
        event.keyCode = 0;
        event.returnValue = false;
        alert('当前不允许用enter键');
    } else if(event.keyCode === 116){/*判断是否为F5键*/
        event.keyCode = 0;
        event.returnValue = false;
        alert('当前不允许用F5键');
    }
}
/*********************************分割线**************************************************/