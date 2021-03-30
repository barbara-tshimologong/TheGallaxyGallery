const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const galleryImgs = document.querySelectorAll('.gallery-item');

let currentlySelected = 0;

prevBtn.addEventListener('click', function(){

    galleryImgs[currentlySelected].classList.remove("active-item");

    currentlySelected--;
    galleryImgs[currentlySelected].classList.add("active-item");
    nextBtn.disabled = false;

    if (currentlySelected===0)
    {
        prevBtn.disabled = true;
    }

});

nextBtn.addEventListener('click', function(){

    galleryImgs[currentlySelected].classList.remove("active-item");
    
    currentlySelected++;
    galleryImgs[currentlySelected].classList.add("active-item");

    prevBtn.disabled=false;

    if  (currentlySelected + 1 === galleryImgs.length)
    {
        nextBtn.disabled = true;
    }
});