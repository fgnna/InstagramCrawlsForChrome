
alert(window.location.href);
//window.location.href="https://www.instagram.com/manchesterunited/"; 
$(function(){
	alert(1);
        setTimeout("findImg()",3000);
});

var key1 = "https://www.instagram.com/p/";
var key2 = false;
function findImg()
{



	$("a").each(function(i)
	{
		if(-1 != this.href.indexOf(key1)&& !key2)
		{
			alert(this.href);
			key2 = true;
			$(this).children().eq(0).click();
		}

		

	});

}