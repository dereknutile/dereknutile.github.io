
$(document).ready(function(){

  // find filter
  $('input#filter-skills').quicksearch('.skills-row', {
    'delay': 500,
    'bind': 'keyup keydown',
    'onAfter': function () {
      clearSkillsList();
    }
  });


  function clearSkillsList () {
    $('.skills-list').fadeOut(200);
    $('.skills-list').fadeIn(600);
  }

});
