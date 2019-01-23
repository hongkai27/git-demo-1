!function () {
  var APP_ID = 'FMSL4j7PnQPfIBaNQhVC9mw1-gzGzoHsz';
  var APP_KEY = 'Rzj5LwGFvKjkTpzTQPakSkeB';

  AV.init({
    appId: APP_ID,
    appKey: APP_KEY
  });


  let myform = document.querySelector('#postMessage')
  myform.addEventListener('submit', function (e) {
    e.preventDefault();//用户点击了表单
    var content = myform.querySelector('input[name=content]').value;
    var name = myform.querySelector('input[name=name]').value;
    var Message = AV.Object.extend('Message');
    var message = new Message();
    message.save({//就把输入的信息存到服务器中，
      'name': name,
      'content': content//用户输入的内容
    }).then(function (x) {
      let li = document.createElement('li')
      li.innerText = `${x.attributes.name}:${x.attributes.content}`
      let messageList = document.querySelector('#messageList')
      messageList.append(li)//append和appendChild现在都可用
      myform.querySelector('input[name=content]').value = ''
      myform.querySelector('input[name=name]').value = ''
    })
  })

  /*var TestObject = AV.Object.extend('TestObject');//新建一个表单,表单名字是TestObject
  var testObject = new TestObject();
  testObject.save({//在表中新建一行数据，内容为HELLO WORLD ，保存成功，就运行alert
    words: 'Hello World!'
  }).then(function(object) {
    alert('LeanCloud Rocks!');
  })
  */

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
