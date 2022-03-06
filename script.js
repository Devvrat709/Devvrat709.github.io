var iphoneModal = document.getElementById("iphoneModal");
var btn = document.getElementById("iphoneBtn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  iphoneModal.style.display = "block";
}

span.onclick = function() {
  iphoneModal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == iphoneModal) {
    iphoneModal.style.display = "none";
  }
}
var miModal = document.getElementById("miModal");
var miBtn = document.getElementById("miBtn");
var span = document.getElementsByClassName("close")[1];

miBtn.onclick = function() {
  miModal.style.display = "block";
}

span.onclick = function() {
  miModal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == miModal) {
    miModal.style.display = "none";
  }
}
var samsungModal = document.getElementById("samsungModal");
var samsungBtn = document.getElementById("samsungBtn");
var span = document.getElementsByClassName("close")[2];

samsungBtn.onclick = function() {
  samsungModal.style.display = "block";
}

span.onclick = function() {
  samsungModal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == samsungModal) {
    samsungModal.style.display = "none";
  }
}
