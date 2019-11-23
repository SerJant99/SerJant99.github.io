const navbarToggler = document.querySelector(".js-navbar-toggler");
const navbarMenu = document.querySelector(".navbar ul");
const navbarLinks = document.querySelectorAll(".navbar a")

navbarToggler.addEventListener("click", navbarTogglerClick);

function navbarTogglerClick() {
    navbarToggler.classList.toggle("open-navbar-toggler");
    navbarMenu.classList.toggle("open");
}

$(window).on('scroll', function(){
  if ($(window).scrollTop()){
    $('nav').addClass('white');
  }
  else
  {
    $('nav').removeClass('white');
  }
})


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
        navbarMenu.classList.contains("open") ? navbarToggler.click() : false;
    });
});

$(document).ready(function(){
    $('.js-slick').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
            }
          }
        ]
    });
}); 


var card = document.querySelector('.card');
card.addEventListener( 'click', function() {
  card.classList.toggle('is-flipped');
});

var card2 = document.querySelector('.card2');
card2.addEventListener( 'click', function() {
  card2.classList.toggle('is-flipped');
});

var card3 = document.querySelector('.card3');
card3.addEventListener( 'click', function() {
  card3.classList.toggle('is-flipped');
});


VANTA.NET({
  el: "#intro",
  color: 0xfa50fa,
  backgroundColor: 0x000000
});


//navbarLinks.forEach(elem => elem.addEventListener("click", navbarLinkClick));

// for (let i = 0; i < navbarLinks.length; i++) {
//     navbarLinks[i].addEventListener("click", navbarLinkClick);
// }
// function smoothScroll(event) {
//     event.preventDefault();
//     const targetId = event.currentTarget.getAttribute("href");
//     window.scrollTo({
//         top: targetId==="#" ? 0 : document.querySelector(targetId).offsetTop,
//         behavior: "smooth"
//     });
// }

// function smoothScroll(event) {
//     event.preventDefault();
//     const targetId = event.currentTarget.getAttribute("href")==="#" ? "header" : event.currentTarget.getAttribute("href");
//     document.querySelector(targetId).scrollIntoView({
//         behavior: "smooth",
//         block: "start"
//     })
// }

// function smoothScroll(event) {
//     event.preventDefault();
//     const targetId = event.currentTarget.getAttribute("href") === "#" ? "header" : event.currentTarget.getAttribute("href");
//     const targetPosition = document.querySelector(targetId).offsetTop;
//     const startPosition = window.pageYOffset;
//     const distance = targetPosition - startPosition;
//     const duration = 1000;
//     let start = null;

//     window.requestAnimationFrame(step);

//     function step(timestamp) {
//         if (!start) start = timestamp;
//         const progress = timestamp - start;
//         //window.scrollTo(0, distance * (progress / duration) + startPosition);
//         window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));
//         if (progress < duration) window.requestAnimationFrame(step);
//     }
// }

// function linear(t, b, c, d) {
//     return c * t / d + b;
// }

// function easeInOutQuad(t, b, c, d) {
//     t /= d / 2;
//     if (t < 1) return c / 2 * t * t + b;
//     t--;
//     return -c / 2 * (t * (t - 2) - 1) + b;
// };

// function easeInOutCubic(t, b, c, d) {
//     t /= d;
//     t--;
//     return c * (t * t * t + 1) + b;
// };
