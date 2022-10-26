window.onscroll = function() {scrollFunction()};
document.getElementById("navbar").style.color = "#FFFFFF";
function scrollFunction() {
  if (document.body.scrollTop > 1350 || document.documentElement.scrollTop > 1350) {
    document.getElementById("navbar").style.padding = "30px 10px";
    document.getElementById("logo").style.fontSize = "2.5vw";
    document.getElementById("navbar").style.backgroundColor = "#FFFFFF";
    document.getElementById("navbar-right").style.color = "#FFFFFF";
    document.getElementById("pp").style.borderBottom = "3px solid #0000FF";

  } else {
    document.getElementById("navbar").style.padding = "80px 10px";
    document.getElementById("logo").style.fontSize = "3.5vw";
    document.getElementById("navbar").style.backgroundColor = "#7738d6";
    document.getElementById("navbar").style.color = "#FFFFFF";
    document.getElementById("pp").style.Color = "#ffff00";
    document.getElementById("pp").style.borderBottom = "3px solid #ffff00";
  }
}
