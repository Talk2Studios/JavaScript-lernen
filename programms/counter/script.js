var counter = 0;

function plus() {
    counter++;
    document.getElementById("counter-el").innerHTML = counter;
}

function save() {
    if (counter === 0) {
        console.log(counter);
    } else {
        var people = document.getElementById("num").innerHTML;
        people = people + counter + "<br>";
        document.getElementById("num").innerHTML = people;
        counter = 0;
        document.getElementById("counter-el").innerHTML = counter;
    }
}
