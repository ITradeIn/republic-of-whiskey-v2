(function ($, window, document) {

  'use strict';

  $(function () {
    var mainText = $('.main-text'),
      triggerProclamation = false;

    function setScroll () {
      $(window).bind('scroll', onScroll);
    }

    function onScroll () {
      var scrollTop = $(window).scrollTop(),
        windowHeight = $(window).height();

      $('.main-text').css({
        'opacity': (1 - (scrollTop / windowHeight)),
        'top': 'calc(50% - (' + scrollTop + 'px)/3)'
      });
    }

    $('a').smoothScroll();

    $('#submit-newletter-form').click(function () {
      $('#mc-embedded-subscribe-form').submit();
    });

    $('body').scrollspy({ target: '#scroll-nav' });

    $('#our-whiskey-1').stellar();

    $('#video').click(function () {
      lity('https://www.youtube.com/embed/4ZczvDxndYw');
      // lity('https://vimeo.com/195769691');
    });

    setScroll();

    $('#proclamation').waypoint({
      handler: function(direction) {
        triggerProclamation = !triggerProclamation;
      },
      offset: '80%'
    });
  });

})(jQuery, window, document);
