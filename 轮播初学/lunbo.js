let n
y()
<<<<<<< HEAD

=======
>>>>>>> 03e6022d13f943ff58d99b40677652e9d71b7eda

let timer = setInterval(() => {
    $(`.images > img:nth-child(${x(n)})`).removeClass('current').addClass('leave')
        .one('transitionend', (x) => {
            $(x.currentTarget).removeClass('leave').addClass('ready')
        })
    $(`.images > img:nth-child(${x(n + 1)})`).removeClass('ready').addClass('current')
    n += 1
}, 3000)


document.addEventListener('visibilitychange', function () {//用户不观看网页时就不动
    if (document.hidden) {
        window.clearInterval(timer)
    } else {
        timer = setInterval(() => {
            $(`.images > img:nth-child(${x(n)})`).removeClass('current').addClass('leave')
                .one('transitionend', (x) => {
                    $(x.currentTarget).removeClass('leave').addClass('ready')
                })
            $(`.images > img:nth-child(${x(n + 1)})`).removeClass('ready').addClass('current')
            n += 1
        }, 3000)
    }
})



function x(n) {
    if (n > 3) {
        n = n % 3
        if (n === 0) {
            n = 3
        }
    }
    return n
}

function y() {
    n = 1
    $(`.images > img:nth-child(${n})`).addClass('current')
        .siblings().addClass('ready')
}
