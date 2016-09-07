function select(oBtn,oInput,oUl,oLi){
	
	oBtn.onclick=function (ev)
	{
		
		oUl.style.display='block';
		
		for(var i=0;i<oLi.length;i++){

			if(oLi[i].innerHTML==oInput.value){
				oLi[i].className='liactive';
			}else
			{
				oLi[i].className='';
			}
		}
		var oEvent=window.event||ev;
		
		oEvent.cancelBubble=true;
		
	};
	
	
	for(var i=0;i<oLi.length;i++){
		oLi[i].onmouseover=function(){
			for(var j=0;j<oLi;j++){
				oLi[j].className='';
			}
			this.className='liactive';

		};

		oLi[i].onmouseout=function(){
			
			this.className='';
		};
		oLi[i].onclick=function(){
			
			
			oInput.value=this.innerHTML;
			oInput.style.color='#952449';
			oBtn.className='select_normal';
			oUl.style.display='none';
		};
	}
	

}

	


