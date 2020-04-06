$(function () {
    $('body').on('click', '.sidebar-toggle, .close-sidebar, .close-sidebar-toggle', function () {
        if ($('.sidebar').hasClass('active')) {
            $('.sidebar').removeClass('active');
            $('.close-sidebar').fadeOut();
        } else {
            $('.sidebar').addClass('active');
            $('.close-sidebar').fadeIn();
        }
    });
});