function mockJson(apiurl,jsonfileroot){ 
	$.getJSON(jsonfileroot, function(data){ 
		Mock.mock(apiurl, data);
	}); 
} 




function getjson(){
    var xmlReq ;
    try{
        xmlReq = new ActiveXObject("Microsoft.XMLHTTP");
 
        var web = "1.json";//json文件路径
 
        //异步方式
        xmlReq.open("GET",web,true);
        xmlReq.onreadystatechange = function(){
              if (xmlReq.readystate == 4){
                      document.write(xmlReq.responseText);//对json的文件的操作
              }
 
        }
        xmlReq.send();
 
    }catch(e){
       
         alert(e);
    }
}
//生成模拟数据
mockJson('login','mock/login.json');

//调用数据
$.ajax({
    url: 'login',
    dataType:'json'
    }).done(function(data, status, xhr){
	alert(data);
    	console.log(JSON.stringify(data, null, 4))    
}); 