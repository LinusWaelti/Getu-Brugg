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
});

function hoverHeader(){
  this.style.backgroundColor = "#87cdff";
  this.style.transition = ".5s";
}

function hoverOutHeader(){
  this.style.backgroundColor = "#bfefff";
  this.style.transition = ".5s";
}

function homeNews(){

}
