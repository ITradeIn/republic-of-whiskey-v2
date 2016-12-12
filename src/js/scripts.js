(function ($, window, document) {

  'use strict';

  $(function () {
    $('a').smoothScroll();
    setTimeout(function() {
      $('.curve').circleType({radius: 1800});
    }, 1000);
  });

})(jQuery, window, document);
