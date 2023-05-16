var ht;
var wd;

function footFunc()
{
	if(navigator.appName=="Microsoft Internet Explorer")
	{
	ht=document.body.clientHeight;
	wd=document.body.clientWidth;
	//alert(ht);
	}
	else
	{
	ht=window.innerHeight;
	wd=window.innerWidth;
	}
	
	ht=parseInt(ht-65);
	wd=parseInt(wd/2 - 900/2 - 10);
	
	document.getElementById("footDiv").style.top = ht+"px";
	document.getElementById("footDiv").style.left = wd+"px";
}