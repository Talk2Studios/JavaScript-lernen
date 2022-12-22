//-------------------------------------------------------------------------------- fullscreen
/* Get the documentElement (<html>) to display the page in fullscreen */
var elem = document.documentElement;

/* View in fullscreen */
function fullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }
}

//-------------------------------------------------------------------------------- v1
/*
function prozent() {
  var num = 0;
  for (var i = 0; i < 81; i++) {
    setTimeout(function() {
      num = num + 1;
      document.getElementById("percent").innerText = num;
    }, 1000);
  }
  for (var i = 0; i < 18; i++) {
    setTimeout(function() {
      num = num + 1;
      document.getElementById("percent").innerText = num;
    }, Math.pow(2, i) * 30000);
  }
}
*/
//-------------------------------------------------------------------------------- v2
/*
var num = 0;
function a() {
  
  for (var i = 0; i < 80; i++) {
    num++
    document.getElementById("p").innerText = num
  }
  for (var i = 0; i < 19; i++) {
    num++
    document.getElementById("p").innerText = num
  }
}
*/
//-------------------------------------------------------------------------------- v3
/*
var num = 0;

function a() {
  interval1
  interval2
}
var interval1 = setInterval(function () {
  num++;
  i++
  document.getElementById("p").innerText = num
  if (num >= 79) {
    clearInterval(interval1);
  }
}, 1000);

var interval2 = setInterval(function () {
  num++;
  var i = 0
  document.getElementById("p").innerText = num
  if (i >= 19) {
    clearInterval(interval2);
  }
}, i * i * 30000 );
*/
//-------------------------------------------------------------------------------- color chance
function color() {
  var element1 = document.getElementById("colorin").value;
  var invis = document.getElementById("colorin")
  if (element1 == 0) {
    var element1 = document.getElementById("colorin");
    invis.classList.toggle("invisible");
    var element2 = document.getElementById("colorbtn");
    element2.classList.toggle("invisible");
    var element3 = document.getElementById("container");
    element3.classList.toggle("invisible");
  } else {
    var bodybg = document.getElementById("bobg");
    bodybg.style.backgroundColor = element1;
    invis.classList.toggle("invisible");
    var element2 = document.getElementById("colorbtn");
    element2.classList.toggle("invisible");
    var element3 = document.getElementById("container");
    element3.classList.toggle("invisible");
  }
  startup();
  fullscreen();
}
//-------------------------------------------------------------------------------- v4
/*
var counter = 0;
function startup() {
  setInterval(function () {
    counter++;
    console.log(counter + " des is es");
    if (counter > 75) {
      clearInterval();
      backin();
    } else {
      console.log(counter);
      document.getElementById("percent").innerText = counter;
    }
  }, 10);
}
function backin() {
  setInterval(function () {
    counter++;
    console.log(counter + " des is es2");
    if (counter > 99) {
      clearInterval();
    } else {
      console.log(counter);
      document.getElementById("percent").innerText = counter;
    }
  }, (counter - 75) * (counter - 75) * 20000);
}
*/
//-------------------------------------------------------------------------------- v5 --
/*
var i = 0;
var j = 0;
function startup() {
  var interval1 = setInterval(function () {
    if (i == 75) {
      clearInterval(interval1);
    }
    else {
      i++;
      console.log(i)
      document.getElementById("per").innerHTML = i;
      console.log(document.getElementById("per").innerHTML)
    }
  },
    10);

  var interval2 = setInterval(function () {
    if (i == 99) {
      clearInterval(interval2);
    }
    else {
      i++;
      console.log(i)
      document.getElementById("per").innerHTML = i;
      console.log(document.getElementById("per").innerHTML)
    }
  },
    (i - 75) * (i - 75) * 2000);
}
*/
//-------------------------------------------------------------------------------- v6 --
/*
var i = 0;
var j = 0;
function startup() {
  var interval1 = setInterval(function () {
    if (i == 75) {
      var interval2 = setInterval(function () {
        if (i == 99) {
          clearInterval(interval1);
          clearInterval(interval2);
        }
        else {
          i++;
          console.log(i)
          document.getElementById("per").innerHTML = i;
          console.log(document.getElementById("per").innerHTML)
        }
      },
        (i - 75) * (i - 75) * 20000);

    }
    else {
      i++;
      console.log(i)
      document.getElementById("per").innerHTML = i;
      console.log(document.getElementById("per").innerHTML)
    }
  },
    10);
}
*/
//-------------------------------------------------------------------------------- v7 Final
var latenz1 = 1000;
var latenz2 = 20000;
var speedchancheat = 75;
var stopcount = 99; 
var i = 0;
var j = 0;
function startup() {

  if (i == speedchancheat) {
    backin();
  }
  else {
    i++;
    console.log(i)
    document.getElementById("per").innerHTML = i;
    console.log(document.getElementById("per").innerHTML)
    setTimeout(startup, latenz1);
  }
}
function backin() {
  if (i == stopcount) {
  }
  else {
    i++;
    j = i - speedchancheat;
    document.getElementById("box").innerHTML = j * j * latenz2
    var lat = parseFloat(document.getElementById("box").innerHTML)
    console.log(lat + "             plus")
    console.log(i + "      Delay")
    document.getElementById("per").innerHTML = i;
    console.log(document.getElementById("per").innerHTML + "      Delay")
    setTimeout(backin, lat);
  }
}
