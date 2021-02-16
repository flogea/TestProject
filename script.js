menu.onclick = function MyFunction() {
  var x = document.getElementById('MyNav');
  
  if (x.className === "top-nav") {
    x.className += " responsive";
  }
  else {
    x.className = "top-nav";
  }
}


