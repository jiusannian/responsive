window.onload = function(){
		var aUl = document.getElementsByTagName("ul");
		var oBtn = true;
		window.onscroll=function(){
			var viewHeight= document.documentElement.clientHeight;
			var scrollY = document.documentElement.scrollTop||document.body.scrollTop;
			
			for(var i=0;i<aUl.length;i++){
				var aLi = aUl[i].getElementsByTagName("li");
				var lastLi = aLi[aLi.length-1];

				if(posTop(lastLi)<viewHeight+scrollY&&oBtn){
					oBtn = false;
					var url='data.js';
					$.ajax({
						url:url, 
						cache:false,
						datatype:'json',
						success:function(json){
							json=eval('('+json+')'); //如果是用form的话传过来的是一个字符串，这是将它转化为一个对象
							console.info(typeof(json));
							//console.info(json);
							//alert(json.list);

							if(json.code){
								oBtn = true;
							}
							for(var i=0;i<json.list.length;i++){
								var list = json.list[i];
								for(var j=0;j<list.src.length;j++){
									var oLi = document.createElement("li");
									oLi.innerHTML = '<img src="'+list.src[j]+'" /><p>'+list.title[j]+'</p>';
									aUl[i].appendChild(oLi);
								}

							}
						}
					});
				}
					
			}

		}

	}
	function posTop(obj){
		var top = 0;

		while(obj){
			top +=obj.offsetTop;
			obj = obj.offsetPartent;
		}
		return top;
	}