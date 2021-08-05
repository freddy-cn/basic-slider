let slidesPerPage = 1;
let margin = -100;// / slidesPerPage;
let minHeight = '300px';
let maxHeight = '300px';
let currentSlide = 0;
let autoHeight = true;
let slideTrack = document.querySelector('.inner-frame'); 
let divs = document.querySelectorAll('.slide');
let sections = Math.floor(divs.length / slidesPerPage);
sections = (divs.length % slidesPerPage) > 0 ? sections + 1 : sections;

next();
//generateSlideDots();

function previous(){
    currentSlide = currentSlide <= 1 ? divs.length : currentSlide -1;
    toggleSlides(currentSlide);
}

function next(){
    currentSlide = currentSlide >= divs.length ? 1 : currentSlide +1;
    toggleSlides(currentSlide);
}

function toggleSlides(current){
    slideTrack.style.marginLeft = `${(current-1) * margin}%`;
    divs.forEach((div, index) => {
        div.style.maxHeight = maxHeight;//(index+1) !== current ? `${minHeight}` : `${maxHeight}`;
        //div.style.opacity = (index+1) !== current ? '0' : '1';
        div.style.minWidth = `${100/slidesPerPage}%`;//(index+1) !== current ? '0%' : '100%';
    });
}
/*      
function generateSlideDots(){
    let dotsContainer = document.getElementsByClassName('slide-dots-container')[0];
    for(let i = 0; i < sections; i++){
        const button = `<button class="slide-dot" onclick="toggleSlides(${i+1})"></button>`
        dotsContainer.innerHTML += button;
    }
}
*/
