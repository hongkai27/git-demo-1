'use strict';

!function () {
  var view = document.querySelector('#myslide');

  var controller = { //把controller设置为一个对象
    view: null, //一开始controller的view是空
    swiper: null, //重要的参数也可以都在controller上面
    init: function init(view) {
      //有关view的JS都放在controller函数的init初始化函数里
      this.view = view; //外面的参数赋值给controller的view
      this.bindEvents(); //执行controller里面的bindEvents函数
    },
    bindEvents: function bindEvents() {
      var view = this.view; //上面已经赋值的this.view
      this.swiper = new Swiper(view.querySelector('.swiper-container'), {
        // Optional parameters
        loop: true,
        // If we need pagination
        pagination: {
          el: '.swiper-pagination'
        },
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      });
    }
  };
  controller.init(view); //controller.init.call(controller,view)
}.call();