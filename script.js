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
        strings: ["Student", "Developer", "Gamer", "Freelancer"],
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

$(document ).ready(function() {
    $('.dropdown ul>li').click(function(){
      $('.dropdown ul>li').each(function(){
        $(this).removeClass('drop-selected');
      });
      $(this).toggleClass('drop-selected');
      $('.dropdown>span').text($(this).attr("val"))
    });
});

// Get all the dropdown links
const dropdownLinks = document.querySelectorAll('.menu .dropdown-link');

// Attach click event listener to each dropdown link
dropdownLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    // Prevent the default link behavior
    event.preventDefault();

    // Toggle the visibility of the dropdown menu
    const dropdown = link.nextElementSibling;
    dropdown.classList.toggle('active');
  });
});  

const dropdowns = document.getElementsByClassName('dropdown');

if(window.matchMedia("(max-width: 700px)").matches){
  // set the translateX of all dropdowns to 0
  for(let i=0; i<dropdowns.length; i++){
    dropdowns[i].style.transform = "translateX(0)";
  }
}
