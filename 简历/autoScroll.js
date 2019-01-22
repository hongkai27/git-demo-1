!function () {
    //将页面初始的第一个元素设置为原来位置，其他元素有动画
    let specialTags = document.querySelectorAll('[data-x]')
    for (let i = 0; i < specialTags.length; i++) {
        specialTags[i].classList.add('offset')
    }

    //页面滑动后导航栏定位在顶部
    setTimeout(function () {
        donghua()
    }, 500)


    window.addEventListener('scroll', function (xxx) {
        donghua()
    })

    function donghua() {
        //滚动页面后对应的导航栏元素标签到中间后自动高亮
        let specialTags = document.querySelectorAll('[data-x]')
        let minindex = 0;
        for (let i = 1; i < specialTags.length; i++) {
            if (Math.abs(specialTags[i].offsetTop - window.scrollY) < Math.abs(specialTags[minindex].offsetTop - scrollY)) {
                minindex = i;
            }
        }
        //minindex就是离窗口顶端最近的元素
        specialTags[minindex].classList.remove('offset')
        let id = specialTags[minindex].id
        let a = document.querySelector('a[href="#' + id + '"]');
        let li = a.parentNode;
        let brothersAndme = li.parentNode.children;
        for (let i = 0; i < brothersAndme.length; i++) {
            brothersAndme[i].classList.remove('light');
        }
        li.classList.add('light');
    }
}.call()

