
console.log('开始mock数据');

//调用数据
$.ajax({
    url: 'mock/login.json',
    dataType:'json'
    }).done(function(data, status, xhr){
      console.log(JSON.stringify(data, null, 4));   
      console.log('获取到数据status:'+data.status + ',message:'+data.message);   
});
