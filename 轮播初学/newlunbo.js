//无缝轮播
let $buttons = $('#buttons >button')
let $slides = $('#slides')
let $images = $slides.children('img')
let $firstcopy = $images.eq(0).clone(true)
let $lastcopy = $images.eq($images.length - 1).clone(true)//加true就表示包括他的子元素都复制

$slides.append($firstcopy)//在img后面加第一张图作为伪图，append是指在后面按顺序加
$slides.prepend($lastcopy)//在img前面加最后一张图作为伪图，prepend是指在前面添加
$slides.css({ transform: 'translateX(-400px)' })
let current = 0

bindEvents()

$('#next').on('click',function(){
    move(current + 1)
    console.log(current)
})
$(previous).on('click',function(){//故意不加引号是为了证明在jq语法$中 id不加引号也能正常使用，声明过得变量也不需要
    move(current - 1)
    console.log(current)
})//手动换图****************



let time = setInterval(function(){
    move(current + 1)
},2000)//自动轮播*****************


document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        window.clearInterval(time)//用户不观看网页时就不动**************
    } else {
        time = setInterval(function(){
            move(current + 1)
        },2000)
    }
})


$(cover).on('mouseenter',function(){//故意不加引号是为了证明在jq语法$中 id不加引号也能正常使用
    window.clearInterval(time)
}).on('mouseleave',function(){
    time = setInterval(function(){
        move(current + 1)
    },2000)
})


function bindEvents() {
    $('#buttons').on('click', 'button', function (e) {
        let index =$(e.currentTarget).index()
        move(index)
    })
}
function move(number){
    if(number > $buttons.length - 1){
        number = 0
    }else if(number < 0){
        number = $buttons.length - 1
    }
    if (current === $buttons.length - 1 && number === 0) {//当前是最后一张要去第一张
        $slides.css({ transform: `translateX(${-($buttons.length + 1) * 400}px)` })//往后移到最后一张伪图
            .one('transitionend', function () {
                $slides.hide()
                    .offset()
                $slides.css({ transform: `translateX(${-(number + 1) * 400}px)` })
                    .show()
            })
    } else if (current === 0 && number === $buttons.length - 1) {
        $slides.css({ transform: 'translateX(0px)' })//第一张去最后一张，移到前一张伪图
            .one('transitionend', function () {
                $slides.hide()
                    .offset()
                $slides.css({ transform: `translateX(${-(number + 1) * 400}px)` })
                    .show()
            })
    } else {
        $slides.css({ transform: `translateX(${-(number + 1) * 400}px)` })
    }
    current = number
}

/*不是html原有的图片，而是js代码添加的图片，在计算图片length的时候不算在内 */























/*
$buttons.eq(0).on('click', function () {
    if (current === 2) {//表示是从最后一张过来的
        $slides.css({ transform: 'translateX(-1600px)' })
            .one('transitionend', function () {
                $slides.hide()
                    .offset()     //加这句代码是为了让系统不会直接show而把hide省略掉
                $slides.css({ transform: 'translateX(-400px)' })
                    .show()
            })
    } else {
        $slides.css({ transform: 'translateX(-400px)' })
    }
    current = 0
})
$buttons.eq(1).on('click', function () {
    $slides.css({ transform: 'translateX(-800px)' })
    current = 1
})
$buttons.eq(2).on('click', function () {
    if(current === 0){//表明是从第一张过来的
        $slides.css({ transform: 'translateX(0)' })
            .one('transitionend', function () {
                $slides.hide()
                    .offset()
                $slides.css({ transform: 'translateX(-1200px)' })
                    .show()
            })
    }else{
        $slides.css({ transform: 'translateX(-1200px)' })
    }
    current = 2
})
*/