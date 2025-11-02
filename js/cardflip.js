contentBoxes = document.querySelectorAll('.content-box');
contentBoxes.forEach(function(contentBox){
    contentBox.onclick = function(){
        flip(contentBox)
    }
});

function flip(elem) {
    if (elem.classList.contains('flipped')) {
        elem.classList.remove('flipped');
    }
    else {
        elem.classList.add('flipped');
    }
}