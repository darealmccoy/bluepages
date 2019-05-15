
$(function() { 
  setTimeout(function(){
    //display the first image
    $('#slideshow > div:first')
      .setDivSize(30, 40)
      .center(false)
      .fadeIn(1000);
    
    //loop through the remaining images
    setInterval(function() {
      $('#slideshow > div:first')
        .fadeOut(1000)
        .next()
        .setDivSize(30,40)
        .center(false)
        .fadeIn(1000)
        .end()
        .appendTo('#slideshow');
    },  5000);
  }, 500 );
});