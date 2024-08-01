document.addEventListener('DOMContentLoaded', () => {
  const boxes = document.querySelectorAll('.fade-in');

  const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('show');
          } else {
              entry.target.classList.remove('show');
          }
      });
  }, {
      threshold: 0.1 // Trigger when 50% of the element is visible
  });

  boxes.forEach(box => {
      observer.observe(box);
  });
});
document.addEventListener('DOMContentLoaded', () => {
  const boxes = document.querySelectorAll('.fade-out');

  const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('show');
          } else {
              entry.target.classList.remove('show');
          }
      });
  }, {
      threshold: 0.1 // Trigger when 50% of the element is visible
  });

  boxes.forEach(box => {
      observer.observe(box);
  });
});
 
 
 // body overflow hidden 
  document.querySelector('.toggle').addEventListener('click', function () {
    document.body.classList.toggle('hide');
  })
  // header menu start 
  document.querySelector('.navigation-slide')
    .addEventListener('click', function () {
      this.classList.toggle('activate');
    });
    
 // body overflow hidden 
 document.querySelector('.toggle').addEventListener('click', function () {
    document.body.classList.toggle('hide');
  });
  // toggle function 
  document.querySelector('.navigation-slide')
    .addEventListener('click', function () {
      this.classList.toggle('activate');
  });

  const labels = document.querySelectorAll(".form-control label");
  const delayUnit = 50;

  labels.forEach((label) => {
    label.innerHTML = label.innerText
      .split("")
      .map(
        (char, idx) =>
          `<span style="transition-delay: ${idx * delayUnit}ms">${char}</span>`
      )
      .join("");
  });
  
  document.addEventListener("DOMContentLoaded", function () {
    // Show loader when the page is loaded
    document.getElementById('loader').style.display = 'flex';
    document.body.style.overflow = 'hidden'; // Disable body scroll

    // Hide loader after 5 seconds with transition
    setTimeout(function() {
        document.body.classList.add('revealed');
        
        // After the transition is complete, hide the loader and reset overflow
        setTimeout(function() {
            document.getElementById('loader').style.display = 'none';
            document.body.style.overflow = 'auto'; // Enable body scroll
            document.body.classList.remove('revealed');
        }, 4500); // Match this duration with the CSS transition duration
    }, 4500);
});

  // toggle function 
  document.querySelector('.navigation-slide')
    .addEventListener('click', function () {
      this.classList.toggle('activate');
});

  $('.content-service-slider').slick({
    dots: false,
    infinite: true,
    arrows: false,
    speed: 300,
    autoplay:true,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true
        }
      }
    ]
  });
  // accrodion script start 
  const items = document.querySelectorAll(".faq-questions");

  function toggleAccordion() {
    const itemToggle = this.getAttribute("aria-expanded");
    for (let i = 0; i < items.length; i++) {
      items[i].setAttribute("aria-expanded", "false");
    }
    if (itemToggle == "false") {
      this.setAttribute("aria-expanded", "true");
    }
  }
  items.forEach((item) => item.addEventListener("click", toggleAccordion));

// lazy Load section
document.addEventListener("DOMContentLoaded", function() {
  let lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));
  let active = false;

  const lazyLoad = function() {
      if (active === false) {
          active = true;

          setTimeout(function() {
              lazyImages.forEach(function(lazyImage) {
                  if ((lazyImage.getBoundingClientRect().top <= window.innerHeight && lazyImage.getBoundingClientRect().bottom >= 0) && getComputedStyle(lazyImage).display !== "none") {
                      lazyImage.src = lazyImage.dataset.src;
                      lazyImage.classList.remove("lazy");
                      lazyImage.classList.add("lazy-loaded");

                      lazyImages = lazyImages.filter(function(image) {
                          return image !== lazyImage;
                      });

                      if (lazyImages.length === 0) {
                          document.removeEventListener("scroll", lazyLoad);
                          window.removeEventListener("resize", lazyLoad);
                          window.removeEventListener("orientationchange", lazyLoad);
                      }
                  }
              });

              active = false;
          }, 200);
      }
  };

  document.addEventListener("scroll", lazyLoad);
  window.addEventListener("resize", lazyLoad);
  window.addEventListener("orientationchange", lazyLoad);
});