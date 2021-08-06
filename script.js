const slidesPerPage = 1;
const margin = -100 / slidesPerPage;
const minHeight = '300px';
const maxHeight = '300px';
const heightAdjustment = 'auto'; // or auto 
let currentSlide = 0;

const dotsContainer = document.getElementsByClassName('slide-dots-container')[0];
const slideTrack = document.querySelector('.inner-frame'); 
const slides = document.querySelectorAll('.slide');

let sections = Math.floor(slides.length / slidesPerPage);
sections = (slides.length % slidesPerPage) > 0 ? sections + 1 : sections;

generateSlideDots();
next();

function previous(){
    currentSlide = currentSlide <= 1 ? sections: currentSlide -1;
    toggleSlides(currentSlide);
}

function next(){
    currentSlide = currentSlide >= sections ? 1 : currentSlide +1;
    toggleSlides(currentSlide);
}

function toggleSlides(current){
    currentSlide = current
    let currentSet = [];

    for(let n = 0; n < slidesPerPage; n++){
        const item = (current-1) * slidesPerPage + n;
        if(item < slides.length){
            currentSet.push(item)
        }
    }
    const marginToLeft = `${(current-1) * margin * slidesPerPage - (margin * (slidesPerPage - currentSet.length))}%`;
    slideTrack.style.marginLeft = marginToLeft;

    Array.from(dotsContainer.children).forEach((dot, index) => {
        if(index == current -1){
            dot.classList.add('active')
        }else{
            dot.classList.remove('active')
        }
    });

    slides.forEach((div, index) => {
        div.style.minWidth = `${100/slidesPerPage}%`;

        if(heightAdjustment === 'auto'){
            div.style.minHeight = (index+1) !== current*slidesPerPage? '0px' : '0px';
            div.style.maxHeight = currentSet.includes(index) ? '3000px' : '0px';
        }else if(heightAdjustment === 'fixed'){
            div.style.minHeight = minHeight;
            div.style.maxHeight = maxHeight;
            div.style.overflowY = 'auto';
        }
    });
}

function generateSlideDots(){
    for(let i = 0; i < sections; i++){
        const button = `<button class="slide-dot" onclick="toggleSlides(${i+1})"></button>`
        dotsContainer.innerHTML += button;
    }
}
