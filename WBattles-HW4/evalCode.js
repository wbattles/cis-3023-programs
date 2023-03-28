// Wiley Battles, CIS-3023-01, 2/25/23, HW4

let $ = function (id) {
    return document.getElementById(id);
}

var prepString = function () {
    // create array of words, count
    arrayWords = (($("input").value).toLowerCase()).split(" ")
    countWords = (arrayWords.length)

    // turn into string
    strChar = arrayWords.join("")
    countChar = (strChar.length)

    // check for easter egg
    if (strChar == "hellodarlin") {
        $('suprise').innerHTML =
            // I learned this element from W3 schools
            // https://www.w3schools.com/tags/att_audio_autoplay.asp
            "<audio controls autoplay ><source id=\"suprise\" src=\"conwayTwitty.mp3\" type=\"audio/mpeg\"></audio>"
        evalString(strChar)

    } else if (strChar == "") {
        return;
    } else {
        evalString(strChar)
    }
}

// check for vowels, consonants, punctuation
var evalString = function (strChar) {
    let vowels = ["a", "e", "i", "o", "u"]
    let punct = [":", "!", ",", ".", "?", "-", "(", ")", "$"]

    var countVowels = 0
    var countPunct = 0
    var countConst = 0

    for (let x in strChar) {
        char = strChar[x]
        if (vowels.includes(char)) {
            countVowels++
        } else if (punct.includes(char)) {
            countPunct++
        } else {
            countConst++
        }
    }

    $("output").value =
    "Total words: " + countWords + "\n" +
    "Total characters: " + countChar + "\n" +
    "Total vowels: " + countVowels + "\n" +
    "Total consonants: " + countConst + "\n" +
    "Total Punctuation: " + countPunct + "\n"

}

var reset = function () {
    $("input").value = ""
    $("output").value = ""
    $("suprise").innerHTML = ""
}

window.onload = function () {
    $("eval").onclick = prepString;
    $("rst").onclick = reset;
}