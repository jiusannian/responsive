    var i=1;
	function forward(num){
		//alert(123);
		if(i%num){
			i++;
		//$(".top_banner img").attr("src",src+i+".jpg");
		//$(".top_banner img").removeClass("none")[i-1];
		var img=$(".top_banner img");
		//alert(i);
		img.eq(i-2).removeClass("block");
		img.eq(i-2).addClass("none");
		img.eq(i-1).removeClass("none");
		img.eq(i-1).addClass("block");
		//console.info($(".top_banner img").addClass("block")[i-1]);
		
		var span=$(".top_swith span");
		span.eq(i-1).addClass("active");
		span.eq(i-2).removeClass("active");
		//span[i].addClass("active");
		}else{
			i=1;
			//$(".top_banner img").attr("src",src+i+".jpg");

			var img=$(".top_banner img");
			img.eq(img.length-1).removeClass("block");
			img.eq(img.length-1).addClass("none");
			img.eq(i-1).removeClass("none");
			img.eq(i-1).addClass("block");
			var span=$(".top_swith span");
			span.eq(i-1).addClass("active");
			span.eq(span.length-1).removeClass("active");
		}
	}

	function back(num){
		i--;
		if(i%num){
		//$(".top_banner img").attr("src",src+i+".jpg");

		var img=$(".top_banner img");
		img.eq(i).removeClass("block");
		img.eq(i).addClass("none");
		img.eq(i-1).removeClass("none");
		img.eq(i-1).addClass("block");
		var span=$(".top_swith span");
		span.eq(i-1).addClass("active");
		span.eq(i).removeClass("active");
		}else{
			i=num;
			//$(".top_banner img").attr("src",src+i+".jpg");

			var img=$(".top_banner img");
			img.eq(i-num).removeClass("block");
			img.eq(i-num).addClass("none");
			img.eq(i-1).removeClass("none");
			img.eq(i-1).addClass("block");
			var span=$(".top_swith span");
			span.eq(i-1).addClass("active");
			span.eq(i-num).removeClass("active");
		}
	}
