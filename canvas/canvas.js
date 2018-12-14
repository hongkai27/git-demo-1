var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var using = false;
var lastPoint = { "x": undefined, "y": undefined };
var rubbishEnabled = false;
autosetCanvas()
/*******************/
function autosetCanvas() {
    function setCanvas() {
        var pageWidth = document.documentElement.clientWidth;
        var pageHeight = document.documentElement.clientHeight;
        canvas.width = pageWidth;
        canvas.height = pageHeight;
    }
    setCanvas();
    window.onresize = function () {
        setCanvas()
    }
}
function drawline(x1, y1, x2, y2) {
    context.beginPath();
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.lineWidth = 3;
    context.strokeStyle = "black";
    context.stroke();
    context.closePath();
}
/*******************/
canvas.onmousedown = function (a) {
    var x = a.clientX;
    var y = a.clientY;
    if (rubbishEnabled) {
        using = true;
        context.clearRect(x, y, 16, 16)
    } else {
        using = true;
        lastPoint = { "x": x, "y": y }
    }

}
canvas.onmousemove = function (a) {
    var x = a.clientX;
    var y = a.clientY;
    if (rubbishEnabled) {
        if (using) {
            context.clearRect(x, y, 16, 16)
        }
    } else {
        if (using) {
            var newPoint = { "x": x, "y": y };
            drawline(lastPoint.x, lastPoint.y, newPoint.x, newPoint.y);
            lastPoint = newPoint;
        }
    }

}
canvas.onmouseup = function (a) {
    using = false;
}
rubbish.onclick = function () {
    rubbishEnabled = true;
    actions.className = "actions x";
}
brush.onclick = function () {
    rubbishEnabled = false;
    actions.className = "actions";
}
