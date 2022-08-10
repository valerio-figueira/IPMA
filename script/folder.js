//Desdobrar itens da div oculta

var folder = document.getElementsByClassName("folder");
var i;

for (i = 0; i < folder.length; i++) {
    folder[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.className === "file" || content.className === "file subfolders") {
      content.className += " open";
      content.style.maxHeight = "3000px";
      content.style.paddingBottom = "20px";
      content.style.transition += "0.5s";
    } else {
      content.className = "file subfolders";
      content.style.maxHeight = "0";
      content.style.paddingBottom = "0px";
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