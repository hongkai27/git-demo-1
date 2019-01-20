let n
y()


setInterval(() => {
    $(`.images > img:nth-child(${x(n)})`).removeClass('current').addClass('leave')
        .one('transitionend', (x) => {
            $(x.currentTarget).removeClass('leave').addClass('ready')
        })
    $(`.images > img:nth-child(${x(n + 1)})`).removeClass('ready').addClass('current')
    n += 1
}, 3000)

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
