var slideshowCounter = 0;
var slides = ["./pics/img1.jpg","./pics/img2.jpg","./pics/img4.jpg","./pics/pic3.jpg","./pics/img5.jpg","./pics/img6.jpg","./pics/img7.jpg","./pics/pic7.jpg","./pics/pic8.jpg"]
const slide = document.querySelector('#slideshowimg');
const leftbtn = document.querySelector('#leftbtn');
leftbtn.addEventListener('click',leftShift);
function leftShift()
{
    slideshowCounter = Math.abs(slideshowCounter-1)%slides.length;
    slide.src=slides[slideshowCounter];
}

const rightbtn = document.querySelector('#rightbtn');
rightbtn.addEventListener('click',rightShift);
function rightShift()
{
    slideshowCounter = (slideshowCounter+1)%slides.length;
    slide.src=slides[slideshowCounter];
    
}

setTimeout(slideshow,3000);
function slideshow()
{
    slideshowCounter=(slideshowCounter+1)%slides.length;
    slide.src=slides[slideshowCounter];
    setTimeout(slideshow,5000);
}