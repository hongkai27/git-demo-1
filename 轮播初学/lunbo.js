//用户点击按钮跳转到图片
var buttons = $('#buttons > button')
for (i = 0; i < buttons.length; i++) {
    $(buttons[i]).on('click', function (x) {
        var index = $(x.currentTarget).index()
        var p = index * -300
        $('#images').css({
            transform: 'translate(' + p + 'px)'
        })
        n = index
        buttons.eq(n).addClass('red').siblings('.red')
            .removeClass('red')
    })
}
//自动轮播
var n = 0
var size = buttons.length
buttons.eq(n % size).trigger('click')
    .addClass('red').siblings('.red').removeClass('red')
var time = setInterval(() => {
    n += 1
    buttons.eq(n % size).trigger('click')
        .addClass('red').siblings('.red').removeClass('red')
}, 1000)
//鼠标事件
$('.window').on('mouseenter',function(){
    window.clearInterval(time)
})
$('.window').on('mouseleave',function(){
    time = setInterval(() => {
        n += 1
        buttons.eq(n % size).trigger('click')
            .addClass('red').siblings('.red').removeClass('red')
    }, 1000)
})
