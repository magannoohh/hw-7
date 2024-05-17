const image = document.getElementById('image');
let imageWidth = 300;

function resizeImage(action) {
    if (action === 'increase') {
        imageWidth += 20; 
    } else if (action === 'decrease') {
        imageWidth -= 20; 
        if (imageWidth < 20) { 
            imageWidth = 20;
        }
    }
    image.style.width = imageWidth + 'px'; 
}