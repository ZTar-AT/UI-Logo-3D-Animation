var numscreen=window.screen.width*0.0006

$(function () {
    $('.wrap').css('transform',' translate(-50%, -50%) scale('+numscreen+')')
  

})




window.addEventListener("resize", function() {
    var numscreen=window.screen.width*0.0006

    $('.wrap').css('transform',' translate(-50%, -50%) scale('+numscreen+')')

   
  });