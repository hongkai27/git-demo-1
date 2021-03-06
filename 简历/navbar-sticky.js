!function () {
    var view = document.querySelector('#topNavBar')

    var controller = {       //把controller设置为一个对象
        view: null,         //一开始controller的view是空
        init: function (view) {  //有关view的JS都放在controller函数的init初始化函数里
            this.view = view   //外面的参数赋值给controller的view
            this.bindEvents()   //执行controller里面的bindEvents函数
        },
        bindEvents:function () {
            var view = this.view    //上面已经赋值的this.view
            window.addEventListener('scroll',(xxx)=> {//箭头函数没有this,不会混淆
                if (window.scrollY > 0) {
                    this.active()//箭头函数没有this,所以只能是controller来执行active函数
                } else {
                    this.deactive()
                }
            })
        },
        active:function(){
            this.view.classList.add('sticky')
        },
        deactive:function(){
            this.view.classList.remove('sticky')
        }
    }
    controller.init(view)   //controller.init.call(controller,view)
}.call()
