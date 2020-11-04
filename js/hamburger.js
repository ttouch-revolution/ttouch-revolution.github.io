$(document).ready(function(){
  $('.second-button').on('click', function () {
    $('.hamburger-icon').toggleClass('open');
  });
  
  $('.anchor-point').on('click', function () {
    var navMain = $(".navbar-collapse");
    navMain.collapse('hide');
    $('.hamburger-icon').toggleClass('open');
  });
});