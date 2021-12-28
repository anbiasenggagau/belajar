$('.navbar-nav .nav-item a').on('click', function () {
    $('.navbar-nav .nav-item a').removeClass('active');
    $(this).addClass('active');
});