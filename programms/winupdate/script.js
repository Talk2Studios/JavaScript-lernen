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
  var element = document.getElementById("colorin").value;
  if (element == 0) {
    var element3 = document.getElementById("container");
    element3.classList.toggle("invisible");
  } else {
    var bodybg = document.getElementById("bobg");
    bodybg.style.backgroundColor = element;
    var element3 = document.getElementById("container");
    element3.classList.toggle("invisible");
  }
  startup();
  fullscreen();
  cursor();
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

// Das ist die Latenz bis zum n??chsten Prozent. Die Latenz gilt bis die Prozentzahl den wer der Variable "speedchange" erreicht hat.
var latenz1 = 1000;

// Der Latentzwert der zum berechnen der Latenz f??r die Prozentzahlen nach dem wert der Variable "speedchange" verwendet.
var latenz2 = 20000;

// Wan die Latenz von latenz1 auf Latenz2 wechseln soll.
var speedchange = 75;

// Wan soll die Prozentzahl stehen bleiben.
var stopcount = 99;

// mit dieser zahl begint die Prozentzahl
var i = 0;

// wird f??r die berechnung der Latenz nach dem "speedchange" verwendet.
var j = 0;

function startup() {

  if (i == speedchange) {
    backin();
  }
  else {
    i++;
    console.log(i)
    document.getElementById("per").innerHTML = i;
    setTimeout(startup, latenz1);
  }
}
function backin() {
  if (i == stopcount) {
    console.log("bei " + stopcount + "% ist der stop")
  }
  else {
    i++;
    j = i - speedchange;
    document.getElementById("box").innerHTML = j * j * latenz2
    var lat = parseFloat(document.getElementById("box").innerHTML)
    var time = startTime()
    // Console log zeigt die aktuelle Latenz un die Uhrzeit an.
    console.log(i + "%  " + "Latenz " + (lat / 1000 / 60).toFixed(2) + " min" + "  Time: " + time)
    document.getElementById("per").innerHTML = i;
    setTimeout(backin, lat);
  }
}
//-------------------------------------------------------------------------------- show time
function checkTime(l) {
  if (l < 10) {
    l = "0" + l;
  }
  return l;
}

function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  // add a zero in front of numbers<10
  m = checkTime(m);
  s = checkTime(s);
  var alltime = (h + ":" + m + ":" + s)
  return alltime;
}

//-------------------------------------------------------------------------------- Cursor
function cursor() {
  var bodycursor = document.getElementById("bobg");
  bodycursor.classList.toggle("maus");
}