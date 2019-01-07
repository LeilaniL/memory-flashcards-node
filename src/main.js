import './styles.css';

$(document).ready(function () {
$('.front', '.card').on('click', function () {
    $(this).hide();
    $(this).siblings('.col-md-6').show();
  });

  $('.col-md-6', '.card').on('click', function () {
    $(this).hide();
    $(this).siblings('.front').show();
  });
});