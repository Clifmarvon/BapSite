window.addEventListener("scroll", () => {
    document
      .querySelector(".nav")
      .classList.toggle("window-scroll", window.scrollY > 2);
  });

  document.addEventListener('DOMContentLoaded', function () {
    const slider = document.querySelector('.slider');
    const images = slider.querySelectorAll('img');
    const totalImages = images.length;
    let currentIndex = 0;

    function slideToNextImage() {
      currentIndex = (currentIndex + 1) % totalImages;
      const offset = images[currentIndex].offsetLeft;
      slider.scrollTo({
        left: offset,
        behavior: 'smooth'
      });
    }

    setInterval(slideToNextImage, 3000); // Change the image every 3 seconds
  });

  const year = document.querySelector('#current-year')
  year.innerHTML = new Date().getFullYear()