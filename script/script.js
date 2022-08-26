
if (window.matchMedia("(max-width: 769px)").matches) {

    $(document).ready(function(){

        $('.slider__container').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: true,
        });
    });
}


//menu
let menu = document.querySelector(".header__menu");
let hamburgerButton = document.querySelector(".hamburger");
let menuItem = document.querySelectorAll('.header__menu__item');

hamburgerButton.addEventListener('click', () => {
    menu.classList.toggle('open-menu');
    document.body.classList.toggle('overflow');
    hamburgerButton.classList.toggle("hamburger-active");
});
menuItem.forEach(item => {
    item.addEventListener( 'click', (e) =>{
        if(document.body.classList.contains("overflow")){
            document.body.classList.toggle("overflow");
        }
        hamburgerButton.classList.toggle('hamburger-active');
        menu.classList.toggle('open-menu');

        let link2 = item.getElementsByTagName("a")[0];
        e.preventDefault();
        link2.getAttribute('href');
        document.querySelector(link2.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    })
});

//show slide right image
showButton.forEach((item => {
    item.addEventListener('click',(e) =>{
        // rightColumn.classList.toggle('display');
        item.style.backgroundColor = "red";

        rightColumn.classList.toggle('display');
    })
}));


