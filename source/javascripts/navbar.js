// const navbar = document.querySelector('.nav');
// let sticky = navbar.offsetTop;
// const navbarScroll = () => {
//   if (window.pageYOffset >= sticky) {
//     navbar.classList.add('sticky');
//   } else {
//     navbar.classList.remove('sticky');
//   }
// };

// window.onScroll = navbarScroll;


  $(window).scroll(function() {
    if ($(document).scrollTop() > 50) {
      $('.navbar-name').css("height", 50);
      $('#logo').css("height", 46);
      $('#logo').css("width", 167);
      $('#bannertext').css("opacity", 0);
    }
    else {
      $('.navbar-name').css("height", 130);
      $('#logo').css("height", 110);
      $('#logo').css("width", 350);
      $('#bannertext').css("opacity", 1);
    }
  });
