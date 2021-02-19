// To limit the rate at which a function can fire
function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

const sliderImages = document.querySelectorAll('.slide-in');


function checkSlide() {
  sliderImages.forEach(sliderImage => {
    // half way through the image 
    const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.height / 2; 
    // bottom of the image
    const imageBottom = sliderImage.offsetTop + sliderImage.height;
    // check if the image half shown 
    const isHalfShown = slideInAt > sliderImage.offsetTop;
    // check if the image is not scrolled passed
    const isNotScrolledPassed = window.scrollY < imageBottom;

    (isHalfShown && isNotScrolledPassed) ? sliderImage.classList.add('active') : sliderImage.classList.remove('active');
  })
}

window.addEventListener('scroll', debounce(checkSlide));
