# js-smart-classes
Collection of small snippets for implementation of modular smart classes based on Javascript

### Prevent double-click on element

Useful for AJAX buttons, delete element buttons, etc. that can break if the request is sent more than once.

    $(".js-no-double-click").one("click", function() {
        $(this).click(function () { return false; });
    });

### Prevent forms to be submitted on pressing ENTER key

    $('.js-no-submit-on-enter').find('input').keypress(function(e){
        if (e.which == 13) {
            e.preventDefault();
        }
    });
    
### Show loading modal on submiting form (needs bootstrap #loading-modal on DOM)

Useful for images/files uploads and stuff that take some time to send.
 
      $('.js-loading').submit(function () {
        $('#loading-modal').modal()
      });
