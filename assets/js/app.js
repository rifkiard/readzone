$(window).on('load', function () {
    $('.preload').fadeOut();
});

$(function () {

    // Sidebar
    $('body').on('click', '.sidebar-toggle, .close-sidebar, .close-sidebar-toggle', function () {
        if ($('.sidebar').hasClass('active')) {
            $('.sidebar').removeClass('active');
            $('.close-sidebar').fadeOut();
        } else {
            $('.sidebar').addClass('active');
            $('.close-sidebar').fadeIn();
        }
    });

    // share modal
    $('body').on('click', '[data-toggle="modal-share"]', function () {
        $('.share-modal').addClass('active');
        $('.close-share-modal').fadeIn();
    });
    $('body').on('click', '.close-share-modal', function () {
        $(this).fadeOut();
        $('.share-modal').removeClass('active');
    });

    // Bottom bar
    $('body').on('click', '.bottom-bar .menu.plus', function () {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            $('.modal-menu-plus').removeClass('active');
        } else {
            $('.modal-menu-plus').addClass('active');
            $(this).addClass('active');
        }
    });
});