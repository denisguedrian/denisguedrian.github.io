$(document).ready(function() {
    $('.navbar__btn-mobile').on('click',function(){
        $('.navbar__menu-mobile').toggleClass('active');
        $('.navbar__btn-mobile').find('i').toggleClass('fa-bars fa-x');
    });

    const sections = $('section');
    const navItens = $('.navbar__item');
    let isClicking = false; // ✅ flag

    navItens.on('click', function() {
        navItens.removeClass('active');
        $(this).addClass('active');
        
        // ✅ trava o scroll handler por 1 segundo (tempo da animação)
        isClicking = true;
        setTimeout(function() {
            isClicking = false;
        }, 500);
    });


    $(window).on('scroll', function (){
        const header = $('header');
        const scrollPosition = $(window).scrollTop() - header.outerHeight();

        let activeSectionIndex = 0;

        if (scrollPosition <= 0) {
            header.css('box-shadow', 'none');
        }else{
            header.css('box-shadow', '5px 1px 5px rgba(0, 0, 0, 0.1)');
        }

        sections.each(function (i) {
            const section = $(this);
            const sectionTop = section.offset().top - 91;
            const sectionBottom = sectionTop + section.outerHeight();

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                activeSectionIndex = i;
                return false;
            }
        })

        if (!isClicking) {
            navItens.removeClass('active');
            $(navItens[activeSectionIndex]).addClass('active');
        }

    });

    ScrollReveal().reveal('.hero__content', { origin: 'left', distance: '60px', duration: 2000 });
    ScrollReveal().reveal('.dish', { origin: 'bottom', distance: '40px', duration: 600, interval: 150 });
    ScrollReveal().reveal('.feedback', { origin: 'right', distance: '30px', duration: 600, interval: 200 });

});