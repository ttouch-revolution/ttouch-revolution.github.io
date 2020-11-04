var fps = 20;
var timmer = 1000/fps;

var frames_counter = 0;
var frames_max = 150;
var time_frames_counter = 0;
var time_frames_max = 52;
var why_frames_counter = 0;
var why_frames_max = 21;

$(document).ready(function(){
  nextFrame();
});

function nextFrame() {
  // increment frame counter
  frames_counter++;
  // if needed wrap
  if(frames_counter == frames_max)
    frames_counter = 0;

  time_frames_counter++;
  if(time_frames_counter == time_frames_max)
    time_frames_counter = 0;

  why_frames_counter++;
  if(why_frames_counter == why_frames_max)
    why_frames_counter = 0;

  embrace();
  its();
  how();
  time();
  why();
  // recursive call
  window.setTimeout(nextFrame, timmer);
}


function embrace() {
  // show next frame
  $("#embrace-hrz").attr("src","images/_embrace-hrz/pic" + frames_counter + ".png");
  $("#embrace-vrt").attr("src","images/_embrace-vrt/pic" + frames_counter + ".png");
}

function its() {
  // show next frame
  $("#its").attr("src","images/_its/pic" + frames_counter + ".png");
}

function how() {
  // show next frame
  $("#how").attr("src","images/_how/pic" + frames_counter + ".png");
}

function time() {
  // show next frame
  $("#time").attr("src","images/_time/pic" + time_frames_counter + ".png");
}

function why() {
  // show next frame
  $("#why").attr("src","images/_why/pic" + why_frames_counter + ".png");
}