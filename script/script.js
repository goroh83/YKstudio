let dots = document.querySelectorAll('.dot');
var dotsIndex = 0;

function printSlideIndex() {
    i = this.currentSlide;
    console.log(i);
    let y = 0;
    for ( y = 0; y < dots.length; y++) {
        dots[y].classList.remove('dot-active');
    }
    dots[i].classList.add('dot-active');
};

document.querySelector('.prev').addEventListener('click', () => mySiema.prev());
document.querySelector('.next').addEventListener('click', () => mySiema.next());
