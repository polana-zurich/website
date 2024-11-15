let imgs;
let currImg;
let semesterId;
let imgAmountCurrentSemester;
let semestergalleries = document.getElementsByClassName("gallery");
for(var i = 0; i < semestergalleries.length; i++){
	var currentSemester = semestergalleries[i];
	var currentSemesterId = currentSemester.classList[0];	

	imgs = currentSemester.getElementsByClassName("gallery-img");
	for(var j = 0; j < imgs.length; j++){
		var classes = imgs[j].classList;
		imgs[j].style.backgroundImage = "url(photo-gallery/" + currentSemesterId + "/" + classes[1] + '.jpg)';
	}
}

imgs = document.querySelectorAll(".gallery-img");
imgs.forEach(function(img){
	img.onclick = function(){
		semesterId = img.parentElement.classList[0];
		imgAmountCurrentSemester = img.parentElement.childElementCount;
		currImg = Number(img.classList[1].substring(3,6));
		let popup = document.createElement("div");
		document.body.appendChild(popup);
		let popupImg = document.createElement("img");
		popup.appendChild(popupImg);
		popup.setAttribute("class", "popup");
		popup.setAttribute("onclick", "closePopup()");
		popupImg.setAttribute("class", "popup-img");
		popupImg.setAttribute("src", 'photo-gallery/' + semesterId + '/' + img.classList[1] + '.jpg');
		// left and right buttons
		let leftBtn = document.createElement("div");
		let rightBtn = document.createElement("div");
		leftBtn.setAttribute("class", "lr-btn left-btn");
		rightBtn.setAttribute("class", "lr-btn right-btn");
		leftBtn.setAttribute("onclick", "prev()");
		rightBtn.setAttribute("onclick", "next()");
		document.addEventListener("keydown", handleArrowKeyNavigation);
		document.body.appendChild(leftBtn);
		document.body.appendChild(rightBtn);
		if(currImg == 1){
			leftBtn.style.display = "none";
		}
		if(currImg == imgAmountCurrentSemester){
			rightBtn.style.display = "none";
		}
		// img-count button
		let imgCount = document.createElement("div");
		imgCount.setAttribute("class", "img-count");
		imgCount.innerHTML = currImg + '/' + imgAmountCurrentSemester;
		document.body.appendChild(imgCount);
	}
});

function closePopup(){
	document.querySelector(".popup").remove();
	document.querySelector(".left-btn").remove();
	document.querySelector(".right-btn").remove();
	document.querySelector(".img-count").remove();
	document.removeEventListener("keydown", handleArrowKeyNavigation);
}

function prev(){
	currImg = currImg - 1;
	if(currImg == 1){
		document.querySelector(".left-btn").style.display = "none";
	}
	if(currImg == imgAmountCurrentSemester-1){
		document.querySelector(".right-btn").style.display = "grid";
	}
	let popupImg = document.querySelector(".popup-img");
	let newImgIndex;
	if(currImg < 10){
		newImgIndex = '00' + currImg;
	} else if(currImg < 100){
		newImgIndex = '0' + currImg;
	} else {
		newImgIndex = currImg;
	}
	popupImg.setAttribute("src", "photo-gallery/" + semesterId + "/img" + newImgIndex + '.jpg');
	let imgCount = document.querySelector(".img-count");
	imgCount.innerHTML = currImg + '/' + imgAmountCurrentSemester;
}

function next(){
	currImg = currImg + 1;
	if(currImg == imgAmountCurrentSemester){
		document.querySelector(".right-btn").style.display = "none";
	}
	if(currImg == 2){
		document.querySelector(".left-btn").style.display = "grid";
	}
	let popupImg = document.querySelector(".popup-img");
	let newImgIndex;
	if(currImg < 10){
		newImgIndex = '00' + currImg;
	} else if(currImg < 100){
		newImgIndex = '0' + currImg;
	} else {
		newImgIndex = currImg;
	}
	popupImg.setAttribute("src", "photo-gallery/" + semesterId + "/img" + newImgIndex + '.jpg');
	let imgCount = document.querySelector(".img-count");
	imgCount.innerHTML = currImg + '/' + imgAmountCurrentSemester;
}

function handleArrowKeyNavigation(event){
	if (event.key === 'ArrowLeft'){
		if (currImg != 1)
			prev(semesterId, imgAmountCurrentSemester);
	}
	if (event.key === 'ArrowRight'){
		if (currImg != imgAmountCurrentSemester)
			next(semesterId, imgAmountCurrentSemester);
	}
} 