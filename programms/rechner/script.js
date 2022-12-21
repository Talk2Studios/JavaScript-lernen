//Copy Button

function copytoclip (tocopy) {
    document.getElementById(tocopy)
    // Copy the text inside the text field
    navigator.clipboard.writeText();

// Alert the copied text
alert("Copied the text: " + copyText.value);
}

// Hypothenuse ausrechnen
function hypo() {
    var leg1 = document.getElementById("leg1").value;
    var leg2 = document.getElementById("leg2").value;
    if (leg1 == 0 || leg2 == 0) {
        document.getElementById("result1").innerHTML = "incorrect input";
    } else {
        var leg1 = document.getElementById("leg1").value;
        var leg2 = document.getElementById("leg2").value;
        var hypotenuse = Math.sqrt(leg1 * leg1 + leg2 * leg2);
        hypotenuse = hypotenuse.toFixed(4);
        document.getElementById("result1").innerHTML = hypotenuse;
    }
}

// Leg ausrechnen
function leg() {
    var leg3 = document.getElementById("leg3").value;
    var hypo = document.getElementById("hypothe").value;
    if (leg3 < hypo) {
        var leg3 = document.getElementById("leg3").value;
        var hypo = document.getElementById("hypothe").value;
        var leg = Math.sqrt(hypo * hypo - leg3 * leg3);
        leg = leg.toFixed(4);
        document.getElementById("result2").innerHTML = leg;
    } else {
        document.getElementById("result2").innerHTML = "incorrect input";
    }
}
// Fibonachi
function folge() {
    let fibonum = document.getElementById("folgen").value
    let folgea = 1
    let folgeb = 0
    let fiboresult = 0
    for (var i = 0; i < fibonum; i++) {
        fiboresult = folgea + folgeb
        folgea = folgeb
        folgeb = fiboresult
        console.log(fiboresult)
    }
    document.getElementById("result3").innerText = fiboresult

    /*
    function folge() {
        let fibonum = document.getElementById("folgen").value;
        console.log(fibonum)
        let a = 1, b = 0, result = 0;
    
        for (let i = 0; i < fibonum; i++) {
            result = a + b;
            a = b;
            b = result;
        }
        console.log(result)
        document.getElementById("result3").innerText = result
    }
    */
}
//proportionalität
function proportion() {
    let propo1 = document.getElementById("prop1").value
    let propo2 = document.getElementById("prop2").value
    let propo3 = document.getElementById("prop3").value
    document.getElementById("result4").innerText = (propo3 / propo1 * propo2)
}
//addition
function addition() {
    let sum1 = parseFloat(document.getElementById("summand1").value)
    console.log(sum1)
    let sum2 = parseFloat(document.getElementById("summand2").value)
    console.log(sum2)
    let summe = sum1 + sum2
    console.log(summe)
    document.getElementById("result5").innerHTML = sum1 + sum2
}
 //unterschied var und let
