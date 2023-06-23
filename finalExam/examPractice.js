
    class box {
        constructor(boxColor, boxLength, boxWidth, boxHeight, boxVolume) {
            this.boxColor = boxColor
            this.boxLength = boxLength
            this.boxWidth = boxWidth
            this.boxHeight = boxHeight
            this.boxVolume = boxVolume
        }

        setVolume(){
            this.boxVolume = (parseFloat(this.boxLength) * parseFloat(this.boxWidth) * parseFloat(this.boxHeight)).toFixed(2)
        }
    }

    let ls = []
    function formSubmit() {
        event.preventDefault()

        const nBox = new box(
            $('#boxColor').val(),
            $('#boxLength').val(),
            $('#boxWidth').val(),
            $('#boxHeight').val(),
            "")

        nBox.setVolume()

        ls.push(nBox)
        display()
        document.getElementById('boxColor').focus()
    }

    function display() {
        ls.sort((a, b) => a.boxVolume - b.boxVolume);
        document.getElementById("div1").innerHTML = ""

        for (i2 = 0; i2 < ls.length; i2++) {
            x = ls[i2]

            document.getElementById("div1").innerHTML += "<br>" +
                x.boxColor + ", " + "volume: " + x.boxVolume + "<br>"
        }
        clear()
    }

    function clear() {
        $('#boxColor').val("")
        $('#boxLength').val("")
        $('#boxWidth').val("")
        $('#boxHeight').val("")
        $('#boxColor').focus()
    }


function displayList(){
    jQuery('#div1').toggle('show');
}