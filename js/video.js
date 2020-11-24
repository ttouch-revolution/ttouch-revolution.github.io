var fps = 20;
var timmer = 1000/fps;

var embrace_hrz_frames_counter = 0;
var embrace_hrz_frames_max = 150;
var embrace_vrt_frames_counter = 50;
var embrace_vrt_frames_max = 150;
var time_frames_counter = 0;
var time_frames_max = 52;
var why_frames_counter = 0;
var why_frames_max = 42;

$(document).ready(function(){
  nextFrame();
});

function nextFrame() {
  // increment frame counter
  embrace_hrz_frames_counter++;
  // if needed wrap
  if(embrace_hrz_frames_counter == embrace_hrz_frames_max)
    embrace_hrz_frames_counter = 0;

  embrace_vrt_frames_counter++;
  if(embrace_vrt_frames_counter == embrace_vrt_frames_max)
    embrace_vrt_frames_counter = 0;

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
  $("#embrace-hrz").attr("src","images/embrace-hrz/pic" + embrace_hrz_frames_counter + ".png");
  $("#embrace-vrt").attr("src","images/embrace-vrt/pic" + embrace_vrt_frames_counter + ".png");
}

function its() {
  // show next frame
  $("#its").attr("src","images/its/pic" + embrace_hrz_frames_counter + ".png");
}

function how() {
  // show next frame
  $("#how").attr("src","images/how/pic" + embrace_hrz_frames_counter + ".png");
}

function time() {
  // show next frame
  $("#time").attr("src","images/time/pic" + time_frames_counter + ".png");
}

function why() {
  // show next frame
  $("#why").attr("src","images/why/pic" + why_frames_counter + ".png");
}