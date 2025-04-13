let nav = document.createElement("nav");

let logo = document.createElement("a");
logo.setAttribute("href", "/index.html");
logo.setAttribute("title", "POLANA - Home");
logo.setAttribute("class", "logo");
nav.appendChild(logo);
	//<a href="aboutus.html" class="navbarbutton">About us</a>
	//<a href="board.html" class="navbarbutton">Board</a>
	//<a href="events.html" class="navbarbutton">Events</a>
	//<a href="photos.html" class="navbarbutton">Photos</a>
	//<a href="faq.html" class="navbarbutton">FAQ</a>
createNavbarButton("about us", false);
createNavbarButton("board", false);
createNavbarButton("events", false);
createNavbarButton("photos", false);
createNavbarButton("faq", false);
	//<a href="https://instagram.com/polana.zurich" class="instagram"></a>
let instagram = document.createElement("a");
instagram.setAttribute("href", "https://instagram.com/polana.zurich");
instagram.setAttribute("class", "instagram");
nav.appendChild(instagram);
	//<div class="mobile-button-open" onclick="showMenu()">...</div>
let mobileButtonOpen = document.createElement("div");
mobileButtonOpen.setAttribute("class", "mobile-button-open");
mobileButtonOpen.setAttribute("onclick", "showMenu()");
mobileButtonOpen.innerHTML = '...';
nav.appendChild(mobileButtonOpen);
	//<div class="mobile-bar mobile-menu-item">
let mobileBar = document.createElement("div");
mobileBar.setAttribute("class", "mobile-bar mobile-menu-item");
nav.appendChild(mobileBar);
	//	<div class="mobile-button-close mobile-menu-item" onclick="hideMenu()">X</div>
let mobileButtonClose = document.createElement("div");
mobileButtonClose.setAttribute("class", "mobile-button-close mobile-menu-item");
mobileButtonClose.setAttribute("onclick", "hideMenu()");
mobileButtonClose.innerHTML = 'X';
mobileBar.appendChild(mobileButtonClose);
	//	<a href="aboutus.html" class="navbarbutton-mobile mobile-menu-item">About us</a>
	//	<a href="board.html" class="navbarbutton-mobile mobile-menu-item">Board</a>
	//	<a href="events.html" class="navbarbutton-mobile mobile-menu-item">Events</a>
	//	<a href="photos.html" class="navbarbutton-mobile mobile-menu-item">Photos</a>
	//	<a href="faq.html" class="navbarbutton-mobile mobile-menu-item">FAQ</a>
createNavbarButton("about us", true);
createNavbarButton("board", true);
createNavbarButton("events", true);
createNavbarButton("photos", true);
createNavbarButton("faq", true);
	//	<a href="https://instagram.com/polana.zurich" class="instagram mobile-menu-item"></a>
let instagramMobile = document.createElement("a");
instagramMobile.setAttribute("href", "https://instagram.com/polana.zurich");
instagramMobile.setAttribute("class", "instagram mobile-menu-item");
mobileBar.appendChild(instagramMobile);

document.body.appendChild(nav);

function createNavbarButton(name, isMobile){
	let result = document.createElement("a");
	result.setAttribute("href", "/" + name.replace(' ', '') + ".html");
	result.innerHTML = name;
	if (isMobile) {
		result.setAttribute("class", "navbarbutton-mobile mobile-menu-item");
		mobileBar.appendChild(result);
	} else {
		result.setAttribute("class", "navbarbutton");
		nav.appendChild(result);
	}
}