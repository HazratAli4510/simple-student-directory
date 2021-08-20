//getting the elements
const Name = document.getElementById('name')
const address = document.getElementById('address')
const roll = document.getElementById('roll')
const btn = document.getElementById('submit-button')
const wrong = document.getElementById('wrong')

//for basic validation
wrong.style.display = 'none'

//To add serial Number
let serial = 0


btn.addEventListener('click', function (event) {
    //bypass form default behavior
    event.preventDefault()
    if (Name.value == '' || address.value == '' | roll.value == '') {
        return wrong.style.display = 'block'
    } else {
        wrong.style.display = 'none'
    }

    //increasing serial number per click
    serial = serial + 1

    //Clearing table row
    const tr = document.createElement('tr')

    //creating Table Data and append to table row
    //for serial td
    const Sr = document.createElement('td')
    Sr.innerText = serial
    tr.appendChild(Sr)

    //for Name
    const tdname = document.createElement('td')
    tdname.innerText = Name.value
    tr.appendChild(tdname)

    //for address
    const tdAddress = document.createElement('td')
    tdAddress.innerText = address.value
    tr.appendChild(tdAddress)

    //for roll number
    const tdRoll = document.createElement('td')
    tdRoll.innerText = roll.value
    tr.appendChild(tdRoll)
    document.getElementById('tbody').appendChild(tr)

    //append the table row to table body
    document.getElementById('tbody').appendChild(tr)

    //empty the input values after submit
    Name.value = ''
    address.value = ''
    roll.value = ''
    console.log(serial)
})

