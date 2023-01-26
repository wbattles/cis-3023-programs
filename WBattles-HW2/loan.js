var stringName, floatAmount, intMonths, floatRate, floatPayment

let $ = function(id) {
    return document.getElementById(id);
}

// calculate payment
let calculateLoan = function(event) {
    event.preventDefault();

    // DOM input for variables
    stringName = $("name").value
    floatAmount = $("amount").value
    intMonths = $("months").value
    floatRate = $("rate").value/12

    // payment formula
    floatPayment = floatAmount * (floatRate/(1-(1+floatRate)**(-intMonths)))

    $("answer").value = floatPayment.toFixed(2)
}

// reset values
let resetMsg = function () {
    $("answer").value = ""
    $("name").focus();
}

window.onload = function () {
    // listen, cacluate and reset buttons
    $("form1").addEventListener("submit", calculateLoan);
    $("form1").addEventListener("reset", resetMsg);
}