//鼠标点击事件
var buttons = $('#buttons > button')
for (let i = 0; i < buttons.length; i++) {
    $(buttons[i]).on('click', function (x) {
        var index = $(x.currentTarget).index()//自动寻找到属于第几个值并返回值
        var p = index * -300
        $('#images').css({                    //历史遗留问题，只能这样用CSS
            transform: 'translate(' + p + 'px)'
        })
        n = index
        buttons.eq(n).addClass('red').siblings('.red')//siblings只能接受选择器，而不是字符串
        .removeClass('red')
    })
}
//自动轮播
var n = 0
var size = buttons.length
buttons.eq(n % size).trigger('click')//eq是找出对应DOM对象包装成jq对象、trigger是自动执行后面的命令
var time = setInterval(() => {       //相当于定闹钟
    n += 1        //表示n = n + 1
    buttons.eq(n % size).trigger('click')
        .addClass('red').siblings('.red').removeClass('red')
}, 2500)

//鼠标移动事件
$('.window').on('mouseenter', function () {
    window.clearInterval(time)
})
$('.window').on('mouseleave', function () {
    time = setInterval(() => {
        n += 1
        buttons.eq(n % size).trigger('click')
            .addClass('red').siblings('.red').removeClass('red')
    }, 2500)
})