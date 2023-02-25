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

    evalString(strChar)
}

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
    "Word Count: " + countWords + "\n" +
    "Vowel Count: " + countVowels + "\n" +
    "Punctuation Count: " + countPunct + "\n" +
    "Consonant Count: " + countConst

}

window.onload = function () {
    $("eval").onclick = prepString;
}