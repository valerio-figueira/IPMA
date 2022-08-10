//Desdobrar itens da div oculta

var folder = document.getElementsByClassName("folder");
var i;

for (i = 0; i < folder.length; i++) {
    folder[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.className === "file") {
      content.className += " open";
      content.style.maxHeight = "1000px";
    } else {
      content.className = "file";
      content.style.maxHeight = "0";
    }
  });
}

/*
for (i = 0; i < folder.length; i++) {
    folder[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
      content.className = "file";
    } else {
      content.style.display = "block";
      content.className += " open";
    }
  });
}
*/