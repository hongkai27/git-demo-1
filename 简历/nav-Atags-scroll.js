!function () {
  //点击导航栏标签后滑行到文档对应的元素标签
  function animate(time) {
    requestAnimationFrame(animate);
    TWEEN.update(time);
  }
  requestAnimationFrame(animate);
  let aTags = document.querySelectorAll('nav.menu >ul >li >a');
  for (let i = 0; i < aTags.length; i++) {
    aTags[i].onclick = function (x) {
      x.preventDefault();
      let a = x.currentTarget;
      let href = a.getAttribute('href');
      let element = document.querySelector(href);
      let top = element.offsetTop;
      let currentTop = window.scrollY;
      let targetTop = top - 76;
      var coords = { y: currentTop };
      var tween = new TWEEN.Tween(coords)
        .to({ y: targetTop }, 500)
        .easing(TWEEN.Easing.Quadratic.InOut)
        .onUpdate(function () {
          window.scrollTo(0, coords.y)
        })
        .start();
    }
  }
}.call()
