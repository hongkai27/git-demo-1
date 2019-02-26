!function () {
  let img = document.querySelectorAll('img')
  for (let i = 0; i < img.length; i++) {
    img[i].onclick = function (cc) {
      console.log(cc)
      cc.preventDefault();
      let a = cc.currentTarget;
      window.open(a.getAttribute('href'));
    }
  }
}.call()


