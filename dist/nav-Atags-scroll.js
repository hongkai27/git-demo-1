'use strict';

!function () {
  //点击导航栏标签后滑行到文档对应的元素标签
  function animate(time) {
    requestAnimationFrame(animate);
    TWEEN.update(time);
  }
  requestAnimationFrame(animate);

  var view = document.querySelector('.menu');
  var controller = { //把controller设置为一个对象
    view: null, //一开始controller的view是空
    aTags: null,
    init: function init(view) {
      //有关view的JS都放在controller函数的init初始化函数里
      this.view = view; //外面的参数赋值给controller的view

      this.bindEvents(); //执行controller里面的bindEvents函数
    },
    bindEvents: function bindEvents() {
      var view = this.view; //上面已经赋值的this.view
      var aTags = view.querySelectorAll('ul >li >a');
      for (var i = 0; i < aTags.length; i++) {
        aTags[i].onclick = function (x) {
          x.preventDefault();
          var a = x.currentTarget;
          var href = a.getAttribute('href');
          var element = document.querySelector(href);
          var top = element.offsetTop;
          var currentTop = window.scrollY;
          var targetTop = top - 76;
          var coords = { y: currentTop };
          var tween = new TWEEN.Tween(coords).to({ y: targetTop }, 500).easing(TWEEN.Easing.Quadratic.InOut).onUpdate(function () {
            window.scrollTo(0, coords.y);
          }).start();
        };
      }
    }
  };
  controller.init(view); //controller.init.call(controller,view)
}.call();