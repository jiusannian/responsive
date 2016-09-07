
$(function(){
    
    //切换
    var num=3;                     //图片个数
    var path="../images/banner";   //图片路径
    for (var i = 1; i<=num; i++) {
    //alert(i);
      var src=$(".top_banner img");
      src.eq(i-1).attr("src",path+i+".jpg");
    };
    
    $("#back img").click(function(){
        back(num);
    });
    $("#forward img").click(function(){
        forward(num);
    });


    //提交
    $("#submit").click(function(){
      //leave_message();
        alert($("textarea").val()); 
    });
  

  
     




    //编辑
    $("#edit").click(function(){
        console.info($(this).hide());
      $('#save').show();
        //$(this).parents('table').find(':text')
            // .each(function(i) {
            //console.info($(this).val());
            //$(this).prop("readonly",false);
            //$(this).removeClass("readonly");
        //});
        $(".input").each(function(){
          //alert($(this).val());
          $(this).prop("readonly",false);
          $(this).removeClass("readonly");
        });
    });
    $("#save").click(function(){
        console.info($(this).hide());
        $('#edit').show();
        $(".input").each(function(){
          //alert($(this).val());
          $(this).prop("readonly",true);
          $(this).removeClass("readonly");
        });
        $(".input").each(function(){

        });
    });
 //切换
    var num=3;                     //图片个数
    var path="../images/banner";   //图片路径
    for (var i = 1; i<=num; i++) {
    //alert(i);
      var src=$(".top_banner img");
      src.eq(i-1).attr("src",path+i+".jpg");
    };
    
    $("#back img").click(function(){
        back(num);
    });
    $("#forward img").click(function(){
        forward(num);
    });


    //提交
    $("#submit").click(function(){
      //leave_message();
        alert($("textarea").val()); 
    });
  

  //分享
    $(".share button").click(function(){
        $(".fenxiang").show();
    });
    $(".fenxiang").click(function(){
        $(".fenxiang").hide();
    });


    //购买
    $(".buy button").click(function(){alert("我要买")});


    //留言条数
    var index;
    $(".message_more").html(index);

});
