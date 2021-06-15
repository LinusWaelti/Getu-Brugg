document.addEventListener("DOMContentLoaded", function(){
  // BOXES IN HEADER //
  document.getElementById('home').addEventListener("mouseover", hoverHeader);
  document.getElementById('info').addEventListener("mouseover", hoverHeader);
  document.getElementById('training').addEventListener("mouseover", hoverHeader);
  document.getElementById('photos').addEventListener("mouseover", hoverHeader);
  document.getElementById('intern').addEventListener("mouseover", hoverHeader);
  document.getElementById('contact').addEventListener("mouseover", hoverHeader);
  document.getElementById('home').addEventListener("mouseout", hoverOutHeader);
  document.getElementById('info').addEventListener("mouseout", hoverOutHeader);
  document.getElementById('training').addEventListener("mouseout", hoverOutHeader);
  document.getElementById('photos').addEventListener("mouseout", hoverOutHeader);
  document.getElementById('intern').addEventListener("mouseout", hoverOutHeader);
  document.getElementById('contact').addEventListener("mouseout", hoverOutHeader);
  // SHOWS SUBPAGES WHEN HOVERING //
  document.getElementById('home').addEventListener("mouseover", appear);
  document.getElementById('info').addEventListener("mouseover", appear);
  document.getElementById('training').addEventListener("mouseover", appear);
  document.getElementById('photos').addEventListener("mouseover", appear);
  document.getElementById('intern').addEventListener("mouseover", appear);
	// REMOVE SUBPAGES WHEN HOVERING AGAIN //
	document.querySelector('.hid').addEventListener("mouseout", disappear);
  // document.querySelector('.infobtn').addEventListener("mouseout", disappear);
  // document.querySelector('.trainingbtn').addEventListener("mouseout", disappear);
  // document.querySelector('.photosbtn').addEventListener("mouseout", disappear);
  // document.querySelector('.internbtn').addEventListener("mouseout", disappear);

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
	for (var i = 0; i < nodes.length; i++) {
    nodes[i].style.display = "block";
	}
}

function disappear(){
	var nodes = document.querySelectorAll("a.hid");
	for (var i = 0; i < nodes.length; i++) {
    nodes[i].style.display = "none";
	}
}
