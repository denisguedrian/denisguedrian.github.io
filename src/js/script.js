$(document).ready(function() {
    $('.navbar__btn-mobile').on('click',function(){
        $('.navbar__menu-mobile').toggleClass('active');
        $('.navbar__btn-mobile').find('i').toggleClass('fa-bars fa-x');
    });
});