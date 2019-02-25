'use strict';

!function () {
    //将页面初始的第一个元素设置为原来位置，其他元素有动画
    var specialTags = document.querySelectorAll('[data-x]');
    for (var i = 0; i < specialTags.length; i++) {
        specialTags[i].classList.add('offset');
    }
    //页面滑动后导航栏定位在顶部
    setTimeout(function () {
        donghua();
    }, 500);

    window.addEventListener('scroll', function (xxx) {
        donghua();
    });

    function donghua() {
        //滚动页面后对应的导航栏元素标签到中间后自动高亮
        var specialTags = document.querySelectorAll('[data-x]');
        var minindex = 0;
        for (var _i = 1; _i < specialTags.length; _i++) {
            if (Math.abs(specialTags[_i].offsetTop - window.scrollY) < Math.abs(specialTags[minindex].offsetTop - scrollY)) {
                minindex = _i;
            }
        }
        //minindex就是离窗口顶端最近的元素
        specialTags[minindex].classList.remove('offset');
        var id = specialTags[minindex].id;
        var a = document.querySelector('a[href="#' + id + '"]');
        var li = a.parentNode;
        var brothersAndme = li.parentNode.children;
        for (var _i2 = 0; _i2 < brothersAndme.length; _i2++) {
            brothersAndme[_i2].classList.remove('light');
        }
        li.classList.add('light');
    }
}.call();