function ajax(json){
	//默认
	 var default = {
	 	url:'',
	 	method:'get',
	 	success: function(){},
	 	fail: function(){},
	 	data:{},
	 	dataType:'json'
	 };

	 //有配置走配置，没有配置走默认
	
	var setttings = for(var attr in default){
	 	default[attr] = json[attr];
	}
	????????????????????????????????这样写可以吗
	//序列化操作，把对象转成字符串
	var arr = [];

	for(var attr in setttings.data){
		arr.push(attr + '=' + setttings.data[attr]);

	}
	setttings.data = arr.join('&');
	var ajax = new XMLHttpRequest;
	if (setttings.method == 'get') {
		ajax.open('get',setttings.url+'?'+setttings.data,true);
		ajax.send();
	}else if (setttings.method=='post') {
		ajax.open('post',setttings.url,true);
		ajax.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
		ajax.send(setttings.data);
	}

	ajax.onreadyState = function(){
		if (ajax.readyState===4) {
			if(ajax.status >= 200 && ajax.status <= 207){
				if (setttings.dataType === 'json') {
					var d = ajax.responseText;
					setttings.success(eval('('+ new Function('','return'+ d)() +')'));
				}else if(setttings.dataType === 'XML'){
					setttings.success(ajax.responseXML);
				}else if(setttings.dataType ==='str'){//数据里面有dataType
					setttings.success(ajax.responseText);
				}
			}else{
				setttings.fail(ajax.status);
			}
		}
	};
}

//one more

function ajax(json){

	//有个默认状态的数据
	var default = {
		url: '',
		method: 'get',
		success: function(){},
		fail: function(){},
		dataType:'json',
		data:{}

	}
	//有配置就走配置，没有配置就走默认
	？？？？？？？？？？？？？？？？？、assign？？？？？？？？？？
}