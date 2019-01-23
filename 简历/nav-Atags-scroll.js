!function () {
  //点击导航栏标签后滑行到文档对应的元素标签
  function animate(time) {
    requestAnimationFrame(animate);
    TWEEN.update(time);
  }
  requestAnimationFrame(animate);

  let view = document.querySelector('.menu')
  var controller = {     //把controller设置为一个对象
    view: null,       //一开始controller的view是空
    aTags: null,
    init: function (view) {  //有关view的JS都放在controller函数的init初始化函数里
      this.view = view      //外面的参数赋值给controller的view
      
      this.bindEvents()    //执行controller里面的bindEvents函数
    },
    bindEvents: function () {
      var view = this.view      //上面已经赋值的this.view
      var aTags = view.querySelectorAll('ul >li >a');
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
    }
  }
  controller.init(view)      //controller.init.call(controller,view)
}.call()
