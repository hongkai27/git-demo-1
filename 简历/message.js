!function () {
  var view = document.querySelector('.message')
  var control = {
    view: null,
    init: function (view) {
      this.view = view
      this.initAV()
    },
    initAV: function () {
      var APP_ID = 'FMSL4j7PnQPfIBaNQhVC9mw1-gzGzoHsz';
      var APP_KEY = 'Rzj5LwGFvKjkTpzTQPakSkeB';
      AV.init({
        appId: APP_ID,
        appKey: APP_KEY
      })
    }
  }



  let myform = document.querySelector('#postMessage')
  myform.addEventListener('submit', function (e) {
    e.preventDefault();//用户点击表单后阻止执行程序
    var content = myform.querySelector('input[name=content]').value;
    var name = myform.querySelector('input[name=name]').value;
    var Message = AV.Object.extend('Message');  //新建名为Message的表单
    var message = new Message();  //在表中新建一行数据
    message.save({//就把输入的信息存到服务器中，
      'name': name,
      'content': content//用户输入的内容
    }).then(function (x) {
      let li = document.createElement('li')//注意：模板字符串中的${}表示占位符，不是JQ中的$
      li.innerText = `${x.attributes.name}:${x.attributes.content}`//不刷新页面，直接添加留言
      let messageList = document.querySelector('#messageList')
      messageList.append(li)//append和appendChild现在都可用
      myform.querySelector('input[name=content]').value = ''   //输入内容提交后清空
      myform.querySelector('input[name=name]').value = ''
    })
  })
//展示留言
  var query = new AV.Query('Message');//表单在上一步已经建好了
  query.find()//执行Message函数，代码框架照抄
    .then(
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
    .then(//上一个then有报错时执行这里的函数
      () => { },
      (error) => []
    )

}.call()
