setTimeout(function one(){
  if ($('#pre-loader').length > 0) {
    $('#pre-loader').remove();
     $('.rest-body').removeClass('no-display');
  }
}, 1500);


