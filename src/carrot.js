(function ($, root, undefined) {

    $(function () {

        'use strict';

        // clickable elements
        $('.js-clickable').on('click', function() {
            var link = $(this).parents('.js-clickable-wrapper').data('href')
            console.log(link);
        });

        $(".js-no-double-click").one("click", function () {
            $(this).click(function () {
                return false;
            });
        });

        $('.js-no-submit-on-enter').find('input').keypress(function(e){
            if (e.which == 13) {
                e.preventDefault();
            }
        });

        $('.js-loading').submit(function () {
            $('#loading-modal').modal()
        });

        $('.js-trigger-input').click(function() {
            $('#' + $(this).data('input-id')).click();
        });

        $('.js-modal-auto-launch').modal();

        $('.js-insert-param').click(function() {
            var key = escape($(this).data('key'));
            var value = escape($(this).data('value'));

            var kvp = document.location.search.substr(1).split('&');
            if (kvp == '') {
                document.location.search = '?' + key + '=' + value;
            }
            else {
                var i = kvp.length; var x; while (i--) {
                    x = kvp[i].split('=');

                    if (x[0] == key) {
                        x[1] = value;
                        kvp[i] = x.join('=');
                        break;
                    }
                }

                if (i < 0) { kvp[kvp.length] = [key, value].join('='); }

                //this will reload the page, it's likely better to store this until finished
                document.location.search = kvp.join('&');
            }
        });

        $('.js-smooth-scroll').click( function() {
            var page = $(this).attr('href');
            var headerHeight = 80;
            var speed = 400; // Durée de l'animation (en ms)
            $('html, body').animate( { scrollTop: $(page).offset().top - headerHeight }, speed ); // On récupére l'espace perdu avec le header.
            return false;
        });
    });

    $('.js-fade-in').fadeIn(2000).removeClass('hidden');

    // Custom Dimensions

    function setDimensions(){
        var windowsHeight = $(window).height();

        $('.js-full-height').css('height', windowsHeight + 'px');
        $('.js-half-height').css('height', (windowsHeight/2) + 'px');
        $('.js-one-third-height').css('height', (windowsHeight/3) + 'px');
        $('.js-two-third-height').css('height', ((windowsHeight/3)*2) + 'px');
    }
    //when resizing the site, we adjust the heights of the sections
    $(window).resize(function() {
        setDimensions();
    });
    setDimensions();


})(jQuery, this);