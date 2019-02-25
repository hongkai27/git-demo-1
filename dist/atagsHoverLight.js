'use strict';

!function () {
  //作品展示按钮点击后滑条滚动
  portfolio1.onclick = function () {
    portfoliobar.className = 'bar state-1';
  };
  portfolio2.onclick = function () {
    portfoliobar.className = 'bar state-2';
  };
  portfolio3.onclick = function () {
    portfoliobar.className = 'bar state-3';
  };

  //鼠标悬浮导航栏标签后滑动条高亮
  var liTags = document.querySelectorAll('nav.menu >ul >li');
  for (var i = 0; i < liTags.length; i++) {
    liTags[i].onmouseenter = function (x) {
      x.currentTarget.classList.add('active');
    };
    liTags[i].onmouseleave = function (x) {
      x.currentTarget.classList.remove('active');
    };
  }
}.call();