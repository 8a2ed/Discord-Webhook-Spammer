const aboutModal = document.getElementById("aboutModal");
const aboutLink = document.getElementById("aboutLink");
const aboutSpan = document.getElementById("aboutClose");

const delSpan = document.getElementById("delClose");
const delModal = document.getElementById("delModal");
const delLink = document.getElementById("delLink");


aboutLink.onclick = function() {
  aboutModal.style.display = "block";
}

delSpan.onclick = function () {
  delModal.style.display = "none";
};



delLink.onclick = function () {
  delModal.style.display = "block";
};

aboutSpan.onclick = function () {
  aboutModal.style.display = "none";
};



window.onclick = function(event) {
  if (event.target == aboutModal || event.target == delModal) {
    aboutModal.style.display = "none";
    delModal.style.display = "none";
  }
}

