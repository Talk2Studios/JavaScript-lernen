//var drop = document.getElementById("b1").addEventListener("click", dropd("b1"));

/*function dropd(button){
    var element = document.getElementById(button);
    if(document.getElementById(button).className == "cdropdown"){
        element.classList.remove("cdropdown")
    }else{

        element.classList.add("cdropdown")
    }
}
function but1() {
    let but1 = document.getElementById("b1").className
    dropd(but1);
}


document.getElementById("b1").addEventListener("click", dropd("b1"));

function dropd(button){
    var element = document.getElementById(button);
    if(document.getElementById(button).className == "up"){
        element.classList.replace("up", "down")
    }else{

        element.classList.replace("down", "up")
    }
}
*/
function but1() {
    var element = document.getElementById("b1");
    element.classList.toggle("cdropdown");
  }
function but2() {
    var element = document.getElementById("b2");
    element.classList.toggle("cdropdown");
  }
function but3() {
    var element = document.getElementById("b3");
    element.classList.toggle("cdropdown");
  }