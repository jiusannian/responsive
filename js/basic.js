
window.onload=window.onresize =function t(){
	var w,h
     if(!!(window.attachEvent && !window.opera))
     {
      h = document.documentElement.clientHeight;
      w = document.documentElement.clientWidth;
     }else{
      h = window.innerHeight;
      w = window.innerWidth;
     }
   
    var bg = document.getElementById("buttom");
    bg.style.width =(w+'px');
    bg.style.height=(h+'px');  
}