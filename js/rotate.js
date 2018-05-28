$(document).ready(function() {

  function mySideChange(front) {
    if (front) {
      $(this).find('.card-front').show();
      $(this).find('.card-back').hide();
    } else {
      $(this).find('.card-front').hide();
      $(this).find('.card-back').show();
    }
  }

  $('.card').click(function() {
    $(this).width($(this).width());
    $(this).height($(this).height());
    $(this).stop().rotate3Di('flip', 500, {
      direction: 'clockwise',
      sideChange: mySideChange,
      complete: function() {
        console.log('complete');
      }
    });
    // $(this).stop().rotate3Di('flip', 500, {sideChange: mySideChange});
  });

});
