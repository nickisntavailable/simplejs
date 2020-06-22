const slides = document.querySelectorAll('.slide');
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
const container = document.getElementsByClassName('slider-container');
let counter = 0;

function changeSize() {
    let i = slides[counter].getElementsByTagName('img')[0];
    // alert(i.width);
    let src = i.src;
    b =  new Image;
    b.src = src;
    let actualWidth = b.width;
    let actualHeight = b.height;
    let coef = (actualWidth / actualHeight).toFixed(2);
    console.log(coef);
    let maxWidth = 500 * coef,
        maxHeight = 500;

    if(actualHeight < maxWidth) {
        container[0].style.height = actualHeight + 'px';
    } else container[0].style.height = maxHeight + 'px';

    if(actualWidth < maxWidth) {
        container[0].style.width = actualWidth + 'px';
    } else container[0].style.width = maxWidth + 'px';
}

changeSize();






slides.forEach(function(slide, index) {
    slide.style.left = `${index * 100}%`;
    // console.log(slide.style.left);
});



prevBtn.addEventListener('click', function(){
    counter--;
    carousel();
});

nextBtn.addEventListener('click', function(){
    counter++;
    carousel();
});

function carousel() {

    if(counter === slides.length) {
        counter = 0;
    }
    if(counter === -1)
    {
        counter = slides.length - 1;
    }
    changeSize();

    slides.forEach(function(slide) {
        slide.style.transform = `translateX(-${counter * 100}%)`;
    });
}