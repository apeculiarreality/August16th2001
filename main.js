$('#fin').on('click', function(e) {
  // gather all checked radio-button values
  var choices = $("input[type='radio']:checked").map(function(i, radio) {
    return $(radio).val();
  }).toArray();

  if (choices.length == 7) {
    $('button[type=calculate]').css("display", "none");
    var count = 0;
    for (i = 0; i < choices.length; i++) {
      count += parseInt(choices[i]);
    }
    if (count > 36) {
      $('#super').css("display", "block");
    }
    else if (count > 28) {
      $('#hulk').css("display", "block");
    }
    else if (count > 20) {
      $('#silent').css("display", "block");
    }
    else if (count > 11) {
      $('#prepubescent').css("display", "block");
    }
    else {
      $('#clean').css("display", "block");
    }
  }

  else {
    $('#error').css("display", "block");
  }
});

$("input[type='radio']").on('change', function (e) {
  $('.results').css("display", "none");
  $('#error').css("display", "none");
  $('button[type=calculate]').css("display", "block");

  var checked = $(this).attr('id'); // http://stackoverflow.com/questions/15141530/get-text-of-label-that-belongs-to-checked-radio-button
  var group = $(this).attr('name');

  $(`div[type=${group}]`).css("opacity", ".6");
  $(`div[type=${group}]`).css("background", "rgba(220, 220, 220, 1)");
  $(`div[type=${group}]`).css("box-shadow", "0em 0em 0em 0em rgba(50, 50, 50, 1)");

  $(`#${checked}`).css("opacity", "1");
  $(`#${checked}`).css("background", "rgba(187, 200, 255, 1)");
  $(`#${checked}`).css("box-shadow", "0em 0em .9em .2em rgba(50, 50, 50, 1)");
});
