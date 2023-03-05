/**
 * 搜索框的文字变化
 */
(function (w) {
    var J_searchbg = $('J_searchbg'), numberName = -1, intervalID = null, text = $('text');
    var searchBg = ['时间简史', '签字笔', '毛笔', '婚纱', 'JavaScript从入门到精通', '春节'];
    randomName();
    random();

    function randomName() {
        clearInterval(intervalID);
        intervalID = setInterval(random, 3000);
        text.onkeydown = function (e) {
            clearInterval(intervalID);
            setInnerText(J_searchbg, '');
        };
    };

    function random() {
        if (numberName >= searchBg.length - 1) {
            numberName = 0;
        } else {
            numberName++;
        }
        setInnerText(J_searchbg, searchBg[numberName]);
    }
})(window);
/**
 * 轮播图
 */
(function (window) {
    var currentIndex = 0, slider_indicators = document.getElementsByClassName('slider_indicators')[0],
        slider_wrapper = document.getElementsByClassName('slider_wrapper')[0], aImages = slider_wrapper.children,
        sliderBanner = document.getElementsByClassName('sliderBanner')[0];
    //1)动态创建li,根据图片的个数
    for (var i = 0; i < aImages.length; i++) {
        var li = document.createElement('li');
        slider_indicators.appendChild(li);
    }
    ;
    slider_indicators.children[0].className = 'on';
    slider_indicators.children[aImages.length - 1].className = 'list-last';
    var scrollImgWidth = aImages[0].offsetWidth; //获取图片宽度
    //2、除了第一张图片外，其他的图片的位置都在图片宽度地地方
    for (var j = 1; j < aImages.length; j++) {
        aImages[j].style.left = scrollImgWidth + 'px';
    }
    ;
    //3、获取按钮，做点击事件
    var btnLeft = $('btn');
    var btnRight = $('btn1');
    //3.2左边点击
    btnLeft.onclick = function () {
        buffer(aImages[currentIndex], {"left": scrollImgWidth}, null);
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = aImages.length - 1;
        }
        aImages[currentIndex].style.left = -scrollImgWidth + 'px';
        buffer(aImages[currentIndex], {"left": 0}, null);
        changeIndex();
    };
    //3.1右边点击
    btnRight.onclick = function () {
        autoPlay();
    };

    //排他
    function changeIndex() {
        for (var i = 0; i < slider_indicators.children.length; i++) {
            slider_indicators.children[i].className = '';
        }
        slider_indicators.children[currentIndex].className = 'on';
    };
    //4、点击调动图片
    for (var k = 0; k < slider_indicators.children.length; k++) {
        (function (index) {
            slider_indicators.children[k].onmouseover = function () {
                //对比
                if (index > currentIndex) {
                    buffer(aImages[currentIndex], {"left": -scrollImgWidth}, null);
                    aImages[index].style.left = scrollImgWidth + 'px';
                } else if (index < currentIndex) {
                    buffer(aImages[currentIndex], {"left": scrollImgWidth}, null);
                    aImages[index].style.left = -scrollImgWidth + 'px';
                }
                currentIndex = index;
                buffer(aImages[index], {"left": 0}, null);
                changeIndex();
            }
        })(k)
    }
    //5、定时器
    var intervalID = setInterval(autoPlay, 4000);

    //6、清除定时器
    sliderBanner.onmouseover = function () {
        clearInterval(intervalID);
    };
    sliderBanner.onmouseout = function () {
        intervalID = setInterval(autoPlay, 3000);
    };


    function autoPlay() {
        buffer(aImages[currentIndex], {"left": -scrollImgWidth}, null);
        currentIndex++;
        if (currentIndex >= aImages.length) {
            currentIndex = 0;
        }
        aImages[currentIndex].style.left = scrollImgWidth + 'px';
        buffer(aImages[currentIndex], {"left": 0}, null);
        changeIndex();
    };
})(window);

(function (w) {
    let popCon = $("pop_container");
    let cateUl = document.getElementsByClassName("cate_menu")[0];
    let LiList = cateUl.getElementsByClassName("cate_menu_item");
    let catePart = document.getElementsByClassName("cate_part_col1");
    for (let i = 0; i < LiList.length; ++i) {
        catePart[i].style.display = "none";
        LiList[i].addEventListener("mouseover", function () {
            popCon.style.display = "block";
            catePart[i].style.display = "block";
        })
        LiList[i].addEventListener("mouseout", function () {
            popCon.style.display = "none";
            catePart[i].style.display = "none";
        })
        catePart[i].addEventListener("mouseover",function () {
            popCon.style.display = "block";
            catePart[i].style.display = "block";
        })
        // catePart[i].addEventListener("mouseout",function () {
        //     popCon.style.display = "none";
        //     catePart[i].style.display = "none";
        // })
    }

})(window)
