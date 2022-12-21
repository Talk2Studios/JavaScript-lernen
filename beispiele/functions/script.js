function wall(height, width) {
    let surface;
    surface = (height * width);
    return surface
}

function rechnen() {
  let h = document.getElementById("hohe").value;
  let b = document.getElementById("breite").value;
  let result = wall(h, b);
  console.log(result);
  document.getElementById("ausgabe").innerText = result;
}

