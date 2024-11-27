// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
// JavaScript for Animation
window.onload = function () {
    var header = document.querySelector('header');

    // Animation for changing the background color and moving the header
    header.style.transition = 'all 2s ease';
    header.style.backgroundColor = '#FF5733';  // Change background color
    header.style.transform = 'translateY(50px)';  // Move header down by 50px

    // Animate back to original position and color after 2 seconds
    setTimeout(function () {
        header.style.backgroundColor = '#0078D4';
        header.style.transform = 'translateY(0)';
    }, 2000);
};


    function myMove() {
        let id = null;
    const elem = document.getElementById("animate");
    let pos = 0;
    clearInterval(id);
    id = setInterval(frame, 5);
    function frame() {
    if (pos == 350) {
        clearInterval(id);
    } else {
        pos++;
    elem.style.top = pos + "px";
    elem.style.left = pos + "px"; 
    }
  }
}

