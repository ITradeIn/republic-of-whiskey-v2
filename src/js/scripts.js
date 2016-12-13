(function ($, window, document) {

  'use strict';

  $(function () {
    $('a').smoothScroll();
    setTimeout(function() {
      $('.curve').circleType({radius: 1800});
    }, 1000);
    $('#submit-newletter-form').click(function () {
      $('#mc-embedded-subscribe-form').submit();
    });
    $('body').scrollspy({ target: '#scroll-nav' });
    $('#our-whiskey-1').stellar();
  });

})(jQuery, window, document);
