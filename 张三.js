window.onload = function(){
	var xmlhttp = null;
	if(window.XMLHttpRequest)
		xmlhttp = new XMLHttpRequest();
	else
		xmlhttp = new ActiveXObject("MicrosOft.XMLHTTP");

//解决兼容性问题

	xmlhttp.open("POST","http://rap.taobao.org/mockjsdata/22995/AjaxTask",true);


xmlhttp.onreadystatechange=function()
{
	var obj = document.querySelector("div")
	var output = " ";
	output += `
		<div class = "people">
		<img src="http://www.jf258.com/uploads/2014-08-25/131300266.jpg" style="float:left;margin-top: 10px">
		<div class = "word" style="margin-top:70px;float:left;margin-left:80px;">
			<p>姓名: 张三</p>
			<p>学号: 2016211000</p>
			<p>学校: cqupt</p>
			<p>课程: </p>
			<li>C语言</li>
			<li>C++</li>
			<li>JAVA</li>
		</div>
		</div>
			
				`;
	obj.innerHTML = output;
}
	xmlhttp.send();
}