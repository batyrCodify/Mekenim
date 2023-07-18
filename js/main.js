   const slider = document.querySelector('.slider');
   const slides = slider.querySelector('.slides');
   let currentIndex = 0;

   function goToSlide(index) {
     const slideWidth = slider.offsetWidth;
     slides.style.transform = `translateX(-${slideWidth * index}px)`;
     currentIndex = index;
   }

   function nextSlide() {
     if (currentIndex < slides.childElementCount - 1) {
       goToSlide(currentIndex + 1);
     }
   }

   function prevSlide() {
     if (currentIndex > 0) {
       goToSlide(currentIndex - 1);
     }
   }

   setInterval(nextSlide, 3000); 
   document.querySelector('.next').addEventListener('click', nextSlide);
   document.querySelector('.prev').addEventListener('click', prevSlide);
   window.addEventListener('resize', () => {
     goToSlide(currentIndex);
   });

   document.addEventListener('DOMContentLoaded', function () {
    const videoButton = document.querySelector('.video-button');
    const videoBackground = document.querySelector('.video-background');

    videoButton.addEventListener('click', function () {
      videoBackground.style.display = 'block'
      videoBackground.play();
    });
});

const videoBtn = document.querySelector('.video-button')
const videoBcg = document.querySelector('.video-bcg')
const container = document.querySelector('.video-container')
const video = document.querySelector('.video')

videoBtn.addEventListener('click' , function(){
  videoBcg.style.display = 'block'
  video.style.display = 'block'
  container.style.display = 'none'
})

