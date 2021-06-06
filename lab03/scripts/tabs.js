function myFunction(id) {
  let x = document.getElementById(id);
  if ((x.className.indexOf("w3-show") == -1)) {
    let y = document.getElementsByClassName(" w3-show");
    for (let i = 0; i < y.length; i++) {
      y[i].className = y[i].className.replace(" w3-show", "");
    }
    x.className += " w3-show";
  } else {
    x.className = x.className.replace(" w3-show", "");
  }

}