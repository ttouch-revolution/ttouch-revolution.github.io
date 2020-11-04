$(document).ready(function(){
  // init controller
  var controller = new ScrollMagic.Controller();

  /*---------------------------------------------------------*/

  // rosto scene
  new ScrollMagic.Scene({
    triggerElement: "#rosto-trigger-scene",
    triggerHook: "onLeave",
    duration: "85%",
    offset: -10
  })
  .setPin("#rosto", {pushFollowers: false})
  .addTo(controller);
  
  /*---------------------------------------------------------*/
  
  // get all text triggers
  var text_triggers_arr = document.querySelectorAll(".trigger-texto");

  // get all text
  var text_arr = document.querySelectorAll(".texto-element");
  
  var tween;
  

  for(var i=0; i < text_arr.length; i++) {

    // create new tween animation
    tween = TweenMax.fromTo( text_arr[i], 1,
      {
        yPercent:20,
        opacity:0,
        ease:Power1.easeInOut
      },
      {
        yPercent:0,
        opacity:1,
        ease:Power1.easeInOut
      }
    );

    // create new scene
    new ScrollMagic.Scene({
      triggerElement: text_triggers_arr[i],
      triggerHook: "onEnter",
      duration: "50%"
    })
    .setTween(tween)
    .addTo(controller);
  }
});