function showList() {
    var x = document.getElementById("mobile");
        if (x.className === "navbar") {
                x.className += " responsive";
        } else {
                x.className = "navbar";
        }
    }