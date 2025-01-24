var coll = document.getElementsByClassName("collapsible");

coll[0].classList.toggle("active");
var content = coll[0].nextElementSibling;
content.style.maxHeight = content.scrollHeight + "px";

for (i = 0; i < coll.length; i++) {
	coll[i].addEventListener("click", function() {
		this.classList.toggle("active");
		var content = this.nextElementSibling;
		if (content.style.maxHeight){
			content.style.maxHeight = null;
		} else {
			content.style.maxHeight = content.scrollHeight + "px";
		}
	});
}