// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function () { scrollFunction() };

var width = document.body.clientWidth;
function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "2vw 1vw";
    document.getElementById("logo").style.fontSize = "2vw";
  } else {
    document.getElementById("navbar").style.padding = "5.5vw 10px";
    document.getElementById("navbar").style.marginBottom = "5vw";
    document.getElementById("logo").style.fontSize = "3vw";
  }  
  if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
    document.getElementById("side").style.top = "7vw";

    document.getElementById("side").style.position = "fixed";
  } else {
    document.getElementById("side").style.position = "relative";
    document.getElementById("side").style.left = "0vw";
  }
}


