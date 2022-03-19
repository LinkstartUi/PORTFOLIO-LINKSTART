
var vid = document.getElementById("bgvid");
var playPause = document.querySelector("button");

// function vidFade() {
//   vid.classList.add("stopfade");
// }

vid.addEventListener('ended', function() {
  // only functional if "loop" is removed 
  vid.pause();
  // to capture IE10
  vidFade();
});
playPause.addEventListener("click", function() {

  if (vid.paused) {
    vid.play();
    playPause.innerHTML = "Pause";
  } else {
    vid.pause();
    playPause.innerHTML = "Paused";
  }
})


$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["YouTuber", "Developer", "Blogger", "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["YouTuber", "Developer", "Blogger", "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});
// ========================================================= gsap ========================================
gsap.from('.logo',{ duration: 1, y : '-100%', ease: 'bounce' })
gsap.from('.menu-btn',{ duration: 1, opacity: 0, delay: 1 , stagger: .2})
gsap.from('.home-content',{ duration: 1, x:'-100vw', delay: 2, ease: 'power2.in'})
gsap.fromTo('.button2',  { opacity: 0, scale: 0, rotation: 720}, 
                        { duration: 1 , delay: 3.5, opacity:1, scale:1, rotation:0})
