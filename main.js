const MLBDropdown = document.getElementById("MLBDropdown")
const tripleADropdown = document.getElementById("triple-A-dropdown")
const doubleADropdown = document.getElementById("double-A-dropdown")
const highADropdown = document.getElementById("high-A-dropdown")
const singleADropdown = document.getElementById("single-A-dropdown")
const queryBox = document.getElementById("query-box")



levelDropdown.addEventListener('change', function handleChange(event){
   if (event.target.value === "major-league"){
    addMLBDropdown()
   } else if (event.target.value === "triple-a"){
    addTripleADropdown()
   } else if (event.target.value === "double-a"){
    addDoubleADropdown()
   } else if (event.target.value === "high-a"){
    addHighADropdown()
   } else if (event.target.value === "single-a"){
    addSingleADropdown()
    } else {
    console.log("hmmmm")
    }
})


addMLBDropdown = (element) => {
    const MLBDropdown = document.createElement('select')
    MLBDropdown.classList.add('MLB-dropdown') //change class list to id and assign dropdown class

    MLBDropdown.innerHTML = `<select name="MLBDropdown" id="MLBDropdown">
    <option class="button" id="select-league" value="select-league">Select League</option>
    <option class="button" id="american-league" value="american-league">American League</option>
    <option class="button" id="national-league" value="national-league">National League</option>
    </select>`

    queryBox.appendChild(MLBDropdown)
}

addTripleADropdown = (element) => {
    const tripleADropdown = document.createElement('select')
    tripleADropdown.classList.add('triple-A-dropdown') //change class list to id and assign dropdown class

    tripleADropdown.innerHTML = `<select name="tripleADropdown" id="tripleADropdown">
    <option class="button" id="select-league" value="select-league">Select League</option>
    <option class="button" id="international-league" value="international-league">International League</option>
    <option class="button" id="pacific-coast-league" value="pacific-coast-league">Pacific Coast League</option>
    </select>`

    queryBox.appendChild(tripleADropdown)
}

addDoubleADropdown = (element) => {
    const doubleADropdown = document.createElement('select')
    doubleADropdown.classList.add('double-A-dropdown') //change class list to id and assign dropdown class

    doubleADropdown.innerHTML = `<select name="doubleADropdown" id="doubleADropdown">
    <option class="button" id="select-league" value="select-league">Select League</option>
    <option class="button" id="eastern-league" value="eastern-league">Eastern League</option>
    <option class="button" id="southern-league" value="southern-league">Southern League</option>
    <option class="button" id="texas-league" value="texas-league">Texas League</option>
    </select>`

    queryBox.appendChild(doubleADropdown)
}

addSingleADropdown = (element) => {
    const singleADropdown = document.createElement('select')
    singleADropdown.classList.add('single-A-dropdown') //change class list to id and assign dropdown class

    singleADropdown.innerHTML = `<select name="singleADropdown" id="singleADropdown">
    <option class="button" id="select-league" value="select-league">Select League</option>
    <option class="button" id="california-league" value="california-league">California League</option>
    <option class="button" id="carolina-league" value="carolina-league">Carolina League</option>
    <option class="button" id="florida-league" value="florida-league">Florida League</option>
    </select>`

    queryBox.appendChild(singleADropdown)
}
