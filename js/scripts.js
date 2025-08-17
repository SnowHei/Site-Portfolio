$(document).ready(function() {
    $(window).scroll(function() {
        if(this.scrollY > 20) {
            $('.navbar').addClass('sticky');
        } else {
            $('.navbar').removeClass('sticky');
        }
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass('show');
        }else{
            $('.scroll-up-btn').removeClass('show');
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function() {
        $('html').animate({scrollTop: 0});
    });

    // toggle menu/navbar
    $('.btn-menu').click(function() {
        $('.navbar .menu').toggleClass('active');
        $('.btn-menu').toggleClass('active');
    });

    // typing animation script

    var typed = new Typed(".typing", {
        strings: ["Desenvolvedor Web", "Programador Full Stack", "Designer UI/UX"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    var typed = new Typed(".typing-2", {
        strings: ["Desenvolvedor Web", "Programador Full Stack", "Designer UI/UX"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

// Quando clicar em um item do menu, fecha o menu
    $('.navbar .menu a').click(function() {
        $('.navbar .menu').removeClass('active');
        $('.btn-menu').removeClass('active');
    });

});

  $('a[href^="#"]').on('click', function(e) {
    e.preventDefault();
    var target = $($(this).attr('href'));
    if(target.length) {
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 800); // 800ms de duração
    }
});
