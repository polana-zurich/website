// assumes no more than 1000 images per semester

let imgs;
let currImg;
let semesterId;
let imgAmountCurrentSemester;
let semestergalleries = document.getElementsByClassName("gallery");

let map = {} // map from semester to amount of images in that semester
map['hs23'] = 54;
map['fs24'] = 40;
map['hs24'] = 50;
map['fs25'] = 7;

for(var i = 0; i < semestergalleries.length; i++){
	var currentSemester = semestergalleries[i];
	var currentSemesterId = currentSemester.classList[0];	
		
	for(var j = 1; j <= map[currentSemesterId]; j++){
		let newImg = document.createElement("div");
		newImg.setAttribute("class", "gallery-img img" + toThreeDigit(j));
		currentSemester.appendChild(newImg);
	}

	imgs = currentSemester.getElementsByClassName("gallery-img");
	
	for(var j = 0; j < imgs.length; j++){
		imgs[j].style.backgroundImage = "url(photo-gallery/" + currentSemesterId + "/img" + toThreeDigit(j+1) + '.webp)';
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
		popupImg.setAttribute("src", 'photo-gallery/' + semesterId + '/' + img.classList[1] + '.webp');
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
	let newImgIndex = toThreeDigit(currImg);
	popupImg.setAttribute("src", "photo-gallery/" + semesterId + "/img" + newImgIndex + '.webp');
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
	let newImgIndex = toThreeDigit(currImg);
	popupImg.setAttribute("src", "photo-gallery/" + semesterId + "/img" + newImgIndex + '.webp');
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

function toThreeDigit(i){
	if(i < 10){
		return '00' + i;
	} else if(i < 100){
		return '0' + i;
	} else {
		return i;
	}
}