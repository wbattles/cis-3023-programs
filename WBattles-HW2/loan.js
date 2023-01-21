var stringName, floatAmount, intMonths, floatRate, floatPayment

let $ = function(id) {
    return document.getElementById(id);
}


let calculateLoan = function(event) {
    event.preventDefault();

    stringName = $("name").value
    floatAmount = $("amount").value
    intMonths = $("months").value
    floatRate = $("rate").value

    floatPayment = floatAmount * (floatRate/(1-(1+floatRate)**(-intMonths)))

    $("answer").innerHTML = stringName + ", your monthly payment is $" +floatPayment.toFixed(2)
}

window.onload = function () {
    $("form1").addEventListener("submit", calculateLoan);
}