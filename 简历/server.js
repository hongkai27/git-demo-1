var mySwiper = new Swiper('.swiper-container', {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})

 //将页面初始的第一个元素设置为原来位置，其他元素有动画
 let specialTags = document.querySelectorAll('[data-x]')
 for (let i = 0; i < specialTags.length; i++) {
   specialTags[i].classList.add('offset')
 }

 //作品展示按钮点击后滑条滚动
 portfolio1.onclick = function () {
   portfoliobar.className = 'bar state-1'
 }
 portfolio2.onclick = function () {
   portfoliobar.className = 'bar state-2'
 }
 portfolio3.onclick = function () {
   portfoliobar.className = 'bar state-3'
 }

 //页面滑动后导航栏定位在顶部
 setTimeout(function () {
   donghua()
 }, 500)
 window.onscroll = function (xxx) {
   if (window.scrollY > 0) {
     topNavBar.classList.add('sticky')
   } else {
     topNavBar.classList.remove('sticky')
   }
   donghua()
 }
 function donghua() {
   //滚动页面后对应的导航栏元素标签到中间后自动高亮
   let specialTags = document.querySelectorAll('[data-x]')
   let minindex = 0;
   for (let i = 1; i < specialTags.length; i++) {
     if (Math.abs(specialTags[i].offsetTop - window.scrollY) < Math.abs(specialTags[minindex].offsetTop - scrollY)) {
       minindex = i;
     }
   }
   //minindex就是离窗口顶端最近的元素
   specialTags[minindex].classList.remove('offset')
   let id = specialTags[minindex].id
   let a = document.querySelector('a[href="#' + id + '"]');
   let li = a.parentNode;
   let brothersAndme = li.parentNode.children;
   for (let i = 0; i < brothersAndme.length; i++) {
     brothersAndme[i].classList.remove('light');
   }
   li.classList.add('light');
 }

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