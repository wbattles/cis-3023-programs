let $ = function(id) {
    return document.getElementById(id);
};

let displayGreeting = function(event) {
    event.preventDefault();
    $("right").innerHTML = "Hello " + $("fname").value + " " + $("lname").value;
};

window.onload = function() {
    $("form1").addEventListener("submit", displayGreeting);
};