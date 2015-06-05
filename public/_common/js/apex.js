// Opens a new window to the <a> link - replaces _target="_blank" for validation reasons - add onclick="return nw(this);" to each <a>
function nw (link) {
	window.open(link.href);
	return false;
}

// Opens a new window to the url - add onclick="return popUp('example.php');" to buttons
function popUp(url, width, height, name, features) {
	if (width === undefined) width = 922; //screen.width - 90;
	if (height === undefined) height = 600; //screen.height - 65;
	if (name === undefined) name = 'popup';
	if (features === undefined) features = 'titlebar=0,toolbar=0,location=0,directories=0,status=0,menubar=1,scrollbars=1,resizable=1,fullscreen=0,channelmode=0';
	features += ',left='+(screen.width-width)/2+',top='+(screen.height-height)/2 +',width='+width+',height='+height+'';

	var newWindow =  window.open(url, name, features);
	newWindow.focus();
	return newWindow;
}
