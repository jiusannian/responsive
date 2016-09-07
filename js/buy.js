$(document).ready(function() {
    //切换
	$("#back").click(function(){
		alert("返回");
	});
	$("#forward").click(function(){
		alert("前往");
	});
	//提交
	$("#submit").click(function(){
		alert($("textarea").val());	
	});
});