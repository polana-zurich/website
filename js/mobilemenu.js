function showMenu(){
	var nav = document.getElementsByClassName("mobile-menu-item");
	for(var i=0; i<nav.length; i++){
		nav[i].style.display = "block";
	}
	var closeButton = document.getElementsByClassName("mobile-button-close");
	closeButton[0].style.display = "grid";
	setTimeout(function() {
		for(var i=0; i<nav.length; i++){
			nav[i].style.right = "0px";
		}
	}, 1);
}
	
function hideMenu(){
	var nav = document.getElementsByClassName("mobile-menu-item");
	for(var i=0; i<nav.length; i++){
		nav[i].style.right = "-200px";
	}
	setTimeout(function() {
		for(var i=0; i<nav.length; i++){
			nav[i].style.display = "none";
		}
	}, 500);	
}