/*!
 * fastshell
 * Fiercely quick and opinionated front-ends
 * https://HosseinKarami.github.io/fastshell
 * @author Hossein Karami
 * @version 1.0.5
 * Copyright 2016. MIT licensed.
 */
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
