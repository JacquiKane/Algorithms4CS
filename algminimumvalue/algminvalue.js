var imagesAll = new Array();
for (i = 0; i < 9; i++) {
    imagesAll[i] = new Image();
    imagesAll[i].src = 'images/arrmin' + i + '.png';
}

var counter = 0;

function rotate() {
    document.getElementById('array').src = imagesAll[counter].src;
    counter = (counter + 1) % imagesAll.length;

    setTimeout('rotate()', 3000);
}

window.addEventListener('load', rotate);