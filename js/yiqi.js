// JavaScript Document
var Dianji=0;
window.onload=function(){
	var buhao = document.getElementById("buhao");
	var hao = document.getElementById("hao");
	buhao.onclick=function(){
		Dianji++;
		if(Dianji==1){
	   			alert("你有女朋友吗，没有的话介意有一个吗？");
	   }else if(Dianji==2){
		   		alert("有的话介意换一个吗？");
		   		
	   }else if(Dianji==3){
		   		alert("不换的话介意多一个吗？");
		   		
	   }else if(Dianji==4){
		   		alert("我家床坏了，能去你家睡吗？");
		   		
	  }else if(Dianji==5){
		   		alert("在我这里你是小宝贝！真的不再考虑一下吗！！？");
	  }else if(Dianji==6){
		   		alert("斯人若彩虹，遇上方知有。遇见你我就再也看不见别人了。");
	  }else if(Dianji==7){
		   		alert("我这么乖你真的忍心拒绝我吗？（哭泣）");
		  		Dianji=1;
	  }

	}
	hao.onclick=function(){
		alert("飞飞终于同意啦！mua❤");
	}
	

}