(function () {
  'use strict';

  $(document).on('click', '#submit', function () {
    $('<li>')
      .text($('#textBox1').val())
      .appendTo('#results');

    $('#textBox1').val('');
  });
})();
