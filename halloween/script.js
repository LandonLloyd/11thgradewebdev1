var img = document.getElementById("img");


img.addEventListener("click", newPlace);


function newPlace() {
  var randomMargin = Math.floor(Math.random() * 450);
  var randomLeft = Math.floor(Math.random() * 1842);
  img.style.margin = randomMargin + "px";
  img.style.marginLeft = randomLeft + "px";
}
