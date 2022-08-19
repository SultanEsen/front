const myButton = document.querySelector("button")
myButton.addEventListener("click", out)

function out() {
    // const dt = new Date()
    // console.log(dt)
    const h2 = document.querySelector("#test")
    h2.style.color = "green"
}


//$(function () {
//  'use strict';
//
//  function initCounter(container) {
//    var clicker = container.find('.counter__clicker');
//    var display = container.find('.counter__display');
//    var count = 0;
//
//    display.text(count);
//
//    clicker.on('click', function () {
//      display.text(++count);
//    });
//  }
//
//  initCounter($('#cnt'));
//});
//
//var clicks = 0;
//
//function onClick() {
//  clicks = 1;
//  document.getElementById("clicks").innerHTML = clicks;
//};


function myFunction(x) {
    x.classList.toggle("fa-thumbs-down");
}