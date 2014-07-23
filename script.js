window.addEventListener('scroll', function(){

  // Get page height.
  var pageHeight = document.body.offsetHeight;

  // Get current scroll amount.
  var scrollAmount = document.body.scrollTop;

  // Get height of visible area.
  var windowHeight = window.innerHeight;

  if(((scrollAmount + windowHeight) / pageHeight) >= 0.8){
    if(document.getElementsByClassName('more-button').length > 0){
      var event = document.createEvent('Events');
      event.initEvent('click', true, false);
      document.getElementsByClassName('more-button')[0].dispatchEvent(event);
    }
  }

});
