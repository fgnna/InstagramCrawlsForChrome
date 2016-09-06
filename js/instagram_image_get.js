
$(function()
{
	var src = window.location.href;
	var patt1=/https:\/\/www.instagram.com\/\w*\/{1}$/;

	if(patt1.test(src))
	{
		setTimeout("findImg()",6000);
	}
        	
});

var key1 = "https://www.instagram.com/p/";
var key2 = false;
var datasUrl = new Array();
var count = 0;
function findImg()
{
	$("a").each(function(i)
	{
		if(-1 != this.href.indexOf(key1))
		{
			datasUrl[count++] = this.href+"&__a=1";
		}
	});

	if(count == 12)
	{
		loadData();
	}
		
}

function loadData()
{
	$.getJSON(datasUrl[0], function(data)
	{
		alert(data.media.display_src);
		var item ={};
		item.url = data.media.display_src;
		item.filename = "test.jpg";
		
		chrome.downloads.download(item,function(downloadId){

				alert(downloadId);

		});
	});
}
