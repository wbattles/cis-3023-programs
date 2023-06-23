// Wiley Battles, CIS-3023-01, Project, 4/22/23

// Define the Item class
class Item {
    constructor(itemCode, itemName, itemDesc, itemQuant, itemStatus, itemVendor, itemMin) {
        this.itemCode = itemCode
        this.itemName = itemName
        this.itemDesc = itemDesc
        this.itemQuant = itemQuant
        this.itemStatus = itemStatus
        this.itemVendor = itemVendor
        this.itemMin = itemMin
    }

    raiseStock(increase) {
        this.itemQuant = this.itemQuant + increase
    }

    lowerStock(decrease) {
        this.itemQuant = this.itemQuant - decrease
    }

    reOrder(x) {
        this.itemQuant = parseFloat(this.itemQuant) + parseFloat(x)
    }

    setStatus() {
        if (this.itemQuant == 0) {
            this.itemStatus = "Inventory Out"
        } else if (this.itemQuant > (this.itemMin * 0.2)) {
            this.itemStatus = "Inventory Good"
        } else {
            this.itemStatus = 'Inventory Low'
        }
    }
}


const cowboyHat = new Item("ap440", "Cowboy Hat", "Apparel", "80", "Inventory Good", "Boot Barn", "5")
const chaps = new Item("ap329", "Chaps", "Apparel", "30", "Inventory Good", "Freds Western Wear", "5")
const rope = new Item("su487", "Rope", "Supplies", "10", "Inventory Good", "Jimmy", "2")
const boloTie = new Item("ap555", "Bolo Tie", "Apparel", "100", "Inventory Good", "Style Central", "10")
const jeans = new Item("ap180", "Jeans", "Apparal", "200", "Inventory Good", "Levis", "15")
const spurs = new Item("tt180", "Spurs", "Supplies", "20", "Inventory Good", "Jimmy", "3")
const ariatBoots= new Item("fw912", "Ariat Boots", "Footwear", "90", "Inventory Good", "Ariat", "5")
const justinBoots = new Item("fw447", "Justin Boots", "Footwear", "120", "Inventory Good", "Justin", "5")
const storeBoots = new Item("fw600", "Store Brand Boots", "Footwear", "150", "Inventory Good", "Store Brand", "10")
const tecovaBoots = new Item("fw452", "Tecova Boots", "Footwear", "50", "Inventory Good", "Tecova", "1")

invList = {
    ap440: cowboyHat,
    ap329: chaps,
    su487: rope,
    ap555: boloTie,
    ap180: jeans,
    tt180: spurs,
    fw912: ariatBoots,
    fw447: justinBoots,
    fw600: storeBoots,
    fw452: tecovaBoots
}

// ChatGPT let me know to put this function into window.onload
// https://chat.oenai.com/c/52b1787d-290e-4b82-9b98-78fe5c951f17
window.onload = function () {
    for (const item in invList) {
        x = invList[item]

        const rowToEdit = document.getElementById(x.itemCode);
        if (x.itemQuant == 0) {
            rowToEdit.cells[4].style.color = "red";
        } else if (x.itemQuant > (x.itemMin * 0.2)) {
            rowToEdit.cells[4].style.color = "green";
        } else {
            rowToEdit.cells[4].style.color = "yellow";
        }
    }
}



function addItem(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get the input elements for item properties
    const itemCodeInput = document.getElementById('itemCode');
    const itemNameInput = document.getElementById('itemName');
    const itemDescInput = document.getElementById('itemDesc');
    const itemQuantInput = document.getElementById('itemQuant');
    const itemVendorInput = document.getElementById('itemVendor');
    const itemMinInput = document.getElementById('itemMin');

    // Create a new Item object with the input values
    const newItem = new Item(
        itemCodeInput.value,
        itemNameInput.value,
        itemDescInput.value,
        itemQuantInput.value,
        "",
        itemVendorInput.value,
        itemMinInput.value
    );

    // ChatGPT had the idea to store each object in another object w/ the item code as a key.
    // You can then keep the same 'newItem' for all of them, but can still access specific objects.
    // All of my js hinged on this
    // https://chat.oenai.com/c/52b1787d-290e-4b82-9b98-78fe5c951f17
    invList[itemCodeInput.value] = newItem;
    x = invList[itemCodeInput.value]

    // Get a reference to the table
    const table = document.getElementById("table");

    // Create a new row element
    const newRow = table.insertRow();
    newRow.id = x.itemCode

    // ChatGPT taught me how to add cells to the row
    // https://chat.oenai.com/c/52b1787d-290e-4b82-9b98-78fe5c951f17
    const cell1 = newRow.insertCell();
    const cell2 = newRow.insertCell();
    const cell3 = newRow.insertCell();
    const cell4 = newRow.insertCell();
    const cell5 = newRow.insertCell();

    // Set the cell values
    cell1.innerHTML = x.itemCode
    cell2.innerHTML = x.itemName
    cell3.innerHTML = x.itemDesc
    cell4.innerHTML = x.itemQuant
    x.setStatus()
    if (x.itemQuant == 0) {
        cell5.style.color = "red";
    } else if (x.itemQuant > (x.itemMin * 0.2)) {
        cell5.style.color = "green";
    } else {
        cell5.style.color = "yellow";
    }
    cell5.innerHTML = x.itemStatus


    const myForm = document.getElementById("adminAdd");
    myForm.reset();
}

function deleteItem(event) {
    event.preventDefault()

    const itemDeleteInput = document.getElementById('itemDelete');

    const table = document.getElementById('table');
    const rowToDelete = document.getElementById(itemDeleteInput.value);
    table.deleteRow(rowToDelete.rowIndex)


    const myForm = document.getElementById("adminDelete");
    myForm.reset();
}

function orderItem(event) {
    event.preventDefault()

    const itemReInput = document.getElementById('itemRe');
    const orderAmountInput = document.getElementById('orderAmount');
    x = invList[itemReInput.value]

    if (parseFloat(orderAmountInput.value) < parseFloat(x.itemMin)) {
        alert("Invalid")
        return false
    }

    x.reOrder(orderAmountInput.value)


    const rowToUpdate = document.getElementById(itemReInput.value);
    rowToUpdate.cells[3].innerHTML = x.itemQuant;

    x.setStatus()
    if (x.itemQuant == 0) {
        rowToUpdate.cells[4].style.color = "red";
    } else if (x.itemQuant > (x.itemMin * 0.2)) {
        rowToUpdate.cells[4].style.color = "green";
    } else {
        rowToUpdate.cells[4].style.color = "yellow";
    }
    rowToUpdate.cells[4].innerHTML = x.itemStatus;


    const myForm = document.getElementById("adminOrder");
    myForm.reset();
}

//EMPLOYEE
function takeItem(event) {
    event.preventDefault()

    const itemTakeInput = document.getElementById('itemTake');
    x = invList[itemTakeInput.value]

    const takeAmountInput = document.getElementById('takeAmount');
    if (parseFloat(takeAmountInput.value) > x.itemQuant) {
        alert("Invalid")
        return false
    }

    x.lowerStock(takeAmountInput.value)

    const rowToUpdate = document.getElementById(itemTakeInput.value);
    rowToUpdate.cells[3].innerHTML = x.itemQuant;

    x.setStatus()
    if (x.itemQuant == 0) {
        rowToUpdate.cells[4].style.color = "red";
    } else if (x.itemQuant > (x.itemMin * 0.2)) {
        rowToUpdate.cells[4].style.color = "green";
    } else {
        rowToUpdate.cells[4].style.color = "yellow";
    }
    rowToUpdate.cells[4].innerHTML = x.itemStatus;

    const myForm = document.getElementById("empTake");
    myForm.reset();
}


//BUTTONS
function empView() {
    document.getElementById("adminAdd").hidden = true
    document.getElementById("adminDelete").hidden = true
    document.getElementById("adminOrder").hidden = true
    document.getElementById("admin").style.display = "none"

    document.getElementById("employee").style.display = "block"
    document.getElementById("empTake").hidden = false
}
function displayAdd() {
    document.getElementById("adminAdd").hidden = false
    document.getElementById("adminDelete").hidden = true
    document.getElementById("adminOrder").hidden = true
}
function displayDel() {
    document.getElementById("adminAdd").hidden = true
    document.getElementById("adminDelete").hidden = false
    document.getElementById("adminOrder").hidden = true
}
function displayOrder() {
    document.getElementById("adminAdd").hidden = true
    document.getElementById("adminDelete").hidden = true
    document.getElementById("adminOrder").hidden = false
}

function displayTake() {
    document.getElementById("adminLogin").hidden = true
    document.getElementById("empTake").hidden = false
}
function adminLogin() {
    document.getElementById("adminLogin").hidden = false
    document.getElementById("empTake").hidden = true
}
function adminCheck() {
    event.preventDefault()

    usrname = "Conway"
    pword = "HelloDarlin"
    if (usrname == "Conway" && pword == "HelloDarlin") {
        adminShow()
    }
}

function adminShow() {
    document.getElementById("adminAdd").hidden = false
    document.getElementById("admin").style.display = "block"

    document.getElementById("employee").style.display = "none"
    document.getElementById("adminLogin").hidden = true
    document.getElementById("empTake").hidden = true
}