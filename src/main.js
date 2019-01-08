import './memory-game.js';
import './styles.css';

$(document).ready(function () {
$('.front', '.card').on('click', function () {
    $(this).toggle();
    $(this).siblings('.col-md-6').toggle();
  });

  $('.col-md-6', '.card').on('click', function () {
    $(this).toggle();
    $(this).siblings('.front').toggle();
    flipCard();
  });
});