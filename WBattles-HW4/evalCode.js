// Wiley Battles, CIS-3023-01, 2/24/23, HW4

let $ = function (id) {
    return document.getElementById(id);
}

var evalString = function () {
    // create array of words, count
    arrayWords = (($("input").value).toLowerCase()).split(" ")
    alert(arrayWords)
    wordCount = (arrayWords.length)
    alert(wordCount)
    
    // turn into string
    strChar = arrayWords.join("")
    alert(strChar)

    let vowels = ["a", "e", "i", "o", "u"]
    let punct = [":", "!", ",", ".", "?", "-", "(", ")", "$"]

    var countVowels = 0
    var countPunct = 0
    var countConst = 0

    for (let x in strChar) {
        switch (x) {
            case vowels.includes(x):
                countVowels++
            case punct.includes(x):
                countPunct++
            default:
                countConst++
        }
    }
    //alert(wordCount, countVowels, countPunct, countConst)

}


window.onload = function () {
    $("eval").onclick = evalString;
}