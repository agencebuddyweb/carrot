# jquery-smart-classes
Collection of small snippets for implementation of modular smart classes based on Javascript

#### Prevent double-click on element

Useful for AJAX buttons, delete element buttons, etc. that can break if the request is sent more than once.

    $(".js-no-double-click").one("click", function() {
        $(this).click(function () { return false; });
    });

#### Prevent forms to be submitted on pressing ENTER key

    $('.js-no-submit-on-enter').find('input').keypress(function(e){
        if (e.which == 13) {
            e.preventDefault();
        }
    });
    
#### Show loading modal on submiting form (needs bootstrap #loading-modal on DOM)

Useful for images/files uploads and stuff that take some time to send.
 
      $('.js-loading').submit(function () {
        $('#loading-modal').modal()
      });
      
#### Simulate Click on another input

Very useful for files inputs if you want to show a different button than the usual one

    $('.js-trigger-input').click(function() {
       $('#' + $(this).data('input-id')).click();
    });

#### Auto-launch Bootstrap Modal (needs TWBS3)

Launches modal on load

    $('.js-modal-auto-launch').modal();
    
#### Insert param into URL

Needs to have to attributes : data-key and data-value to the element

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
    })

#### Smooth Scroll

		$('.js-smooth-scroll').click( function() {
			var page = $(this).attr('href');
			var headerHeight = 80;
			var speed = 400; // Durée de l'animation (en ms)
			$('html, body').animate( { scrollTop: $(page).offset().top - headerHeight }, speed ); // On récupére l'espace perdu avec le header.
			return false;
		});
		
		
#### Fade-in on load

	$('.js-fade-in').fadeIn(2000).removeClass('hidden');
