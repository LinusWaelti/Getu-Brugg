// TODO: Removing the subpages
// TODO: Slow the animation down

document.addEventListener("DOMContentLoaded", function(){
  // BOXES IN HEADER //
  document.getElementById('home').addEventListener("mouseover", hoverHeader);
  document.getElementById('info').addEventListener("mouseover", hoverHeader);
  document.getElementById('training').addEventListener("mouseover", hoverHeader);
  document.getElementById('photos').addEventListener("mouseover", hoverHeader);
  // document.getElementById('intern').addEventListener("mouseover", hoverHeader);
  document.getElementById('contact').addEventListener("mouseover", hoverHeader);
  document.getElementById('home').addEventListener("mouseout", hoverOutHeader);
  document.getElementById('info').addEventListener("mouseout", hoverOutHeader);
  document.getElementById('training').addEventListener("mouseout", hoverOutHeader);
  document.getElementById('photos').addEventListener("mouseout", hoverOutHeader);
  // document.getElementById('intern').addEventListener("mouseout", hoverOutHeader);
  document.getElementById('contact').addEventListener("mouseout", hoverOutHeader);
  // SHOWS SUBPAGES WHEN HOVERING //
  document.getElementById('home').addEventListener("mouseover", appear);
  document.getElementById('info').addEventListener("mouseover", appear);
  document.getElementById('training').addEventListener("mouseover", appear);
  document.getElementById('photos').addEventListener("mouseover", appear);
  // document.getElementById('intern').addEventListener("mouseover", appear);
  document.getElementById('contact').addEventListener("mouseover", appear)
	// REMOVE SUBPAGES WHEN HOVERING AGAIN //
  var hidElements = document.getElementsByClassName('hid');
  for (i = 0; i<hidElements.length; i++){
    hidElements[i].addEventListener("mouseout", disappear);
  }
});

function hoverHeader(){
  this.style.textDecoration = "underline";
  this.style.transition = "1.5s";
}

function hoverOutHeader(){
  this.style.textDecoration = "none";
  this.style.transition = "1.5s";
}

function appear(){
  let parent = this.parentNode;
  var nodes = parent.querySelectorAll(".hid");
  document.querySelector(".homebtn").style.display = "none";
  document.querySelector(".trainingbtn").style.display = "none";
  document.querySelector(".photosbtn").style.display = "none";
  // document.querySelector(".internbtn").style.display = "none";
  document.querySelector('.contactbtn').style.display = "none";
  document.querySelector(".infobtn").style.display = "none";
  parent.style.display = "flex";
  for (var i = 0; i < nodes.length; i++) {
    nodes[i].style.display = "flex";
  }
}

function disappear(){
	var nodes = document.querySelectorAll("a.hid");
	for (var i = 0; i < nodes.length; i++) {
    nodes[i].style.display = "none";
	}
  document.querySelector(".homebtn").style.display = "flex";
  document.querySelector(".trainingbtn").style.display = "flex";
  document.querySelector(".photosbtn").style.display = "flex";
  document.querySelector(".internbtn").style.display = "flex";
  document.querySelector('.contactbtn').style.display = "flex";
  document.querySelector(".infobtn").style.display = "flex";
}
