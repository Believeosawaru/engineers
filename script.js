document.querySelector('.bars').addEventListener('click', () => {
   document.querySelector('.navlist').classList.add('show');
   
   document.querySelector('.bars').classList.add('bars-remove');
   
   document.querySelector('.exit').classList.add('exit-show')
});

function exitPopup() {
  document.querySelector('.exit').addEventListener('click', () => {
   document.querySelector('.navlist').classList.remove('show');
  
   document.querySelector('.exit').classList.remove('exit-show');
   
  document.querySelector('.bars').classList.remove('bars-remove');
})
}

exitPopup();

document.querySelectorAll('.link').forEach((aTag) => {
  aTag.addEventListener('click', () => {
    document.querySelector('.navlist').classList.remove('show');
  
   document.querySelector('.exit').classList.remove('exit-show');
   
  document.querySelector('.bars').classList.remove('bars-remove');
  })
})

setInterval(() => {
  const randomNumber = Math.random() 
  if (randomNumber > 0 && randomNumber < 1 / 3) {
    document.querySelector('.changing-text').innerHTML = 'reliability.'
  } else if (randomNumber > 1 / 3 && randomNumber < 2 / 3) {
    document.querySelector('.changing-text').innerHTML = 'quality.'
  } else if (randomNumber > 2 / 3 && randomNumber < 1) {
    document.querySelector('.changing-text').innerHTML = 'integrity.'
  }
  
}, 3500)



/* previous code

 setInterval(() => {
  document.querySelector('.changing-text').innerHTML = 'reliability.'
}, 2000)

setInterval(() => {
  document.querySelector('.changing-text').innerHTML = 'innovation.'
}, 3000)

setInterval(() => {
  document.querySelector('.changing-text').innerHTML = 'integrity.'
}, 4000)

setInterval(() => {
  document.querySelector('.changing-text').innerHTML = 'productivity.'
}, 5000)

setInterval(() => {
  document.querySelector('.changing-text').innerHTML = 'quality.'
}, 6000)
*/
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  
}

setInterval(() => {
  plusSlides(1);
}, 5099);

const wordsArray = [];

const inputElem = document.querySelector('.quote-input');

document.querySelector('.submit-btn').innerHTML = ` 
  <a>Send <i class="fa fa-paper-plane"></i>
  </a>
`;

document.querySelector('.submit-btn').addEventListener('click', () => {
  
  if (inputElem.value != '' && inputElem != !NaN) {
  document.querySelector('.submit-btn').innerHTML = 'Submitting...';
  
   document.querySelector('.submit-btn').innerHTML = ` 
  <a href="https://wa.me/+2781 540 7152?text=${inputElem.value}">Send <i class="fa fa-paper-plane"></i>
  </a>
`;

  document.querySelector('.submit-btn').disabled = true;
  
  setTimeout(() => {
    document.querySelector('.submit-btn').innerHTML = 'Submitted';
    
     wordsArray.push(inputElem.value)
     inputElem.value = '';
      }, 3500);
  
  setTimeout(() => {
    document.querySelector('.submit-btn').innerHTML = 'Submit <i class="fa fa-paper-plane"></i>';
    
   document.querySelector('.submit-btn').disabled = false;
  }, 6000)
  }
});
// console.log(wordsArray)

