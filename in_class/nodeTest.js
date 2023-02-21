function hello(name) {
    console.log("Hello " + name)
}
hello("Fred")

let dice = [1, 2, 3, 4, 5, 6]
var gameStart = function (dice) {
    random = Math.floor(Math.random() * dice.length)
    var yourRole = dice[random]
    console.log(yourRole)
    //if (yourRole = 1) {}
    

}
