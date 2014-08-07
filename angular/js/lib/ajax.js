/**
	ajax({
		type:"post",
		url:"ajax.php",
		data:"username="+ousername.value+"&passwd="+passwd.value,
		dataType:"json",
		success:function(data){
			otips.innerHTML='返回结果<br />用户名：<b>'+data.username+'</b> 密码：<b>'+data.passwd+'</b>';
		}
	});
*/
var createAjax = function() {
	var xhr = null;

	//非IE系列浏览器
	if(window.XMLHttpRequest){

		xhr = new XMLHttpRequest();

	//IE系列浏览器
	}else if (window.ActiveXObject) {
		try {
			xhr = new ActiveXObject("microsoft.xmlhttp");
		} catch (e) {
			try {
				xhr = new ActiveXObject("msxml2.XMLHTTP");
			} catch (e2) {
			}
		}
	}
	return xhr;
};
var ajax = function(conf) {
	//type参数,可选
	var type = conf.type;

	//url参数，必填 
	var url = conf.url;

	//data参数可选，只有在post请求时需要
	var data = conf.data;

	//datatype参数可选
	var dataType = conf.dataType;

	//回调函数可选
	var success = conf.success;

	if (type == null){
		//type参数可选，默认为get
		type = "get";
	}

	if (dataType == null){
		//dataType参数可选，默认为text
		dataType = "text";
	}

	// 创建ajax引擎对象
	var xhr = createAjax();

	xhr.onreadystatechange = function() {
		if(xhr.readyState==1){
			document.getElementById('tips').innerHTML='...';
			
		}else if(xhr.readyState == 4 && xhr.status == 200) {
			if(dataType == "text"||dataType=="TEXT") {
				if (success != null){
					//普通文本
					success(xhr.responseText);
				}
				
			}else if(dataType=="xml"||dataType=="XML") {
				if (success != null){
					//接收xml文档    
					success(xhr.responseXML);
				}
				
			}else if(dataType=="json"||dataType=="JSON") {
				if (success != null){
					//将json字符串转换为js对象  
					success(eval("("+xhr.responseText+")"));
				}
			}
			xhr=null;
		}
	};
	
	//打开
	xhr.open(type, url, true);

	//发送
	if(type == "GET" || type == "get") {
		xhr.send(null);
		
	}else if (type == "POST" || type == "post") {
		xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
		xhr.send(data);
	}
};
