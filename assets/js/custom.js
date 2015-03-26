
$(document).ready(function(){

  var text = $(".swap-text");
  var textIndex = -1;

  function swapText() {
    ++textIndex;
    text.eq(textIndex % text.length)
      .fadeIn(900)
      .delay(1200)
      .fadeOut(1200, swapText);
  }

  swapText();

});
