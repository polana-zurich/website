let year = document.querySelector(".current").innerHTML;

let imgs = document.getElementsByClassName("gallery-img");
for(var i = 0; i < imgs.length; i++){
	var classes = imgs[i].classList;
	imgs[i].style.backgroundImage = "url(./" + year + "/" + classes[1] + '.jpg)';
}

imgs = document.querySelectorAll(".gallery-img");
let currImg;

imgs.forEach(function(img, index){
	img.onclick = function(){
		currImg = index + 1;
		let popup = document.createElement("div");
		document.body.appendChild(popup);
		let popupImg = document.createElement("img");
		popup.appendChild(popupImg);
		popup.setAttribute("class", "popup");
		popup.setAttribute("onclick", "closePopup()");
		popupImg.setAttribute("class", "popup-img");
		popupImg.setAttribute("src", './' + year + '/' + img.classList[1] + '.jpg');
		// left and right buttons
		let leftBtn = document.createElement("div");
		let rightBtn = document.createElement("div");
		leftBtn.setAttribute("class", "lr-btn left-btn");
		rightBtn.setAttribute("class", "lr-btn right-btn");
		leftBtn.setAttribute("onclick", "prev()");
		rightBtn.setAttribute("onclick", "next()");
		document.body.appendChild(leftBtn);
		document.body.appendChild(rightBtn);
		if(currImg == 1){
			leftBtn.style.display = "none";
		}
		if(currImg == imgs.length){
			rightBtn.style.display = "none";
		}
		// img-count button
		let imgCount = document.createElement("div");
		imgCount.setAttribute("class", "img-count");
		imgCount.innerHTML = currImg + '/' + imgs.length;
		document.body.appendChild(imgCount);
	}
});

function closePopup(){
	document.querySelector(".popup").remove();
	document.querySelector(".left-btn").remove();
	document.querySelector(".right-btn").remove();
	document.querySelector(".img-count").remove();
}

function prev(){
	currImg = currImg - 1;
	if(currImg == 1){
		document.querySelector(".left-btn").style.display = "none";
	}
	if(currImg == imgs.length-1){
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
	popupImg.setAttribute("src", "./" + year + "/img" + newImgIndex + '.jpg');
	let imgCount = document.querySelector(".img-count");
	imgCount.innerHTML = currImg + '/' + imgs.length;
}

function next(){
	currImg = currImg + 1;
	if(currImg == imgs.length){
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
	popupImg.setAttribute("src", "./" + year + "/img" + newImgIndex + '.jpg');
	let imgCount = document.querySelector(".img-count");
	imgCount.innerHTML = currImg + '/' + imgs.length;
}