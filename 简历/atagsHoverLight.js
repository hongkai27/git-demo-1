!function () {
  

  //鼠标悬浮导航栏标签后滑动条高亮
  let liTags = document.querySelectorAll('nav.menu >ul >li');
  for (let i = 0; i < liTags.length; i++) {
    liTags[i].onmouseenter = function (x) {
      x.currentTarget.classList.add('active');
    }
    liTags[i].onmouseleave = function (x) {
      x.currentTarget.classList.remove('active');
    }
  }
}.call()


