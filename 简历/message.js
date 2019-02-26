!function () {
  var view = document.querySelector('.message')
  var model = {
    //获取保存数据
    fetch: function (name, content) {
      var Message = AV.Object.extend('Message');  //新建名为Message的表单
      var message = new Message();  //在表中新建一行数据
      return message.save({//是一个promise对象,就把输入的信息存到服务器中
        'name': name,
        'content': content//用户输入的内容
      })
    },
    //展示数据
    show: function () {
      var query = new AV.Query('Message');//表单在上一步已经建好了
      var now = new Date()
      query.lessThanOrEqualTo('createdAt',now);
      query.limit(10);
      query.descending('createdAt')
      return query.find()//是一个promise对象,执行Message函数，代码框架照抄
    }
  }
  var controller = {
    view: null,
    init: function (view) {
      this.view = view
      this.initAV()
      this.saveMessages()
      this.showMessages()
    },
    initAV: function () {
      var APP_ID = 'FMSL4j7PnQPfIBaNQhVC9mw1-gzGzoHsz';
      var APP_KEY = 'Rzj5LwGFvKjkTpzTQPakSkeB';
      AV.init({
        appId: APP_ID,
        appKey: APP_KEY
      })
    },
    saveMessages: function () {
      let myform = document.querySelector('#postMessage')
      myform.addEventListener('submit', function (e) {
        e.preventDefault();//用户点击表单后阻止执行程序
        var name = myform.querySelector('input[name=name]').value;
        var content = myform.querySelector('input[name=content]').value;
        model.fetch(name, content).then(function (x) {  //不刷新页面，提交时直接添加留言
          let li = document.createElement('li')//注意：模板字符串中的${}表示占位符，不是JQ中的$
          li.innerText = `${x.attributes.name}:${x.attributes.content}`
          let messageList = document.querySelector('#messageList')
          messageList.append(li)//append和appendChild现在都可用
          myform.querySelector('input[name=content]').value = '' //输入内容提交后清空
          myform.querySelector('input[name=name]').value = ''
        })
      })
    },
    showMessages: function () {
      //获取留言。。。。作用是页面第一次加载时批量获取数据
      model.show().then(
        function (messages) {//这个messages是我们获取的信息，一个数组，系统传给我们的，不是我们设置的参数
          let array = messages.map((item) => item.attributes)//map一下，返回item每一项的attributes，形成一个新的数组
          array.forEach(
            (item) => {                 //遍历一下数组里面的每一个item
              let li = document.createElement('li')
              li.innerText = `${item.name}:${item.content}`
              let messageList = document.querySelector('#messageList')
              messageList.append(li)//append和appendChild现在都可用
            }
          )
        },
        function (error) {
          alert('提交失败')
          // 异常处理
        })
    }

  }
  controller.init(view)
}.call()