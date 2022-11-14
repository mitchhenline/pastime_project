const mlbDropdown = document.getElementById("mlbDropdown")
const tripleADropdown = document.getElementById("triple-A-dropdown")
const doubleADropdown = document.getElementById("double-A-dropdown")
const highADropdown = document.getElementById("high-A-dropdown")
const singleADropdown = document.getElementById("single-A-dropdown")
const queryBox = document.getElementById("query-box")
const parkInfoBox = document.getElementById("park-info-box")
//const orioles = getElementById("baltimore-orioles") . need this??


const baseURL = `http://localhost:4500`

//------------------------DROPDOWN MENU-------------------------------//

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



 //-------------------------------ADD DROPDOWN FUNCTIONS-------------------------------//


addMLBDropdown = (element) => {
    const mlbDropdown = document.createElement('select')
    mlbDropdown.classList.add('mlbDropdown') //change class list to id and assign dropdown class

    mlbDropdown.innerHTML = `<select name="mlbDropdown" id="mlbDropdown">
    <option class="button" id="select-league" value="select-league">Select League</option>
    <option class="button" id="american-league" value="american-league">American League</option>
    <option class="button" id="national-league" value="national-league">National League</option>
    </select>`

    queryBox.appendChild(mlbDropdown)

    mlbDropdown.addEventListener('change', function handleChange(event){
        if (event.target.value === "american-league"){
         addAmericanLeagueDropdown()
        } else if (event.target.value === "national-league"){
         addNationalLeagueDropdown()
         } else {
         console.log("hmmm")
         }
     })
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

addHighADropdown = (element) => {
    const highADropdown = document.createElement('select')
    highADropdown.classList.add('high-A-dropdown') //change class list to id and assign dropdown class

    highADropdown.innerHTML = `<select name="highADropdown" id="highADropdown">
    <option class="button" id="select-league" value="select-league">Select League</option>
    <option class="button" id="midwest-league" value="midwest-league">Midwest League</option>
    <option class="button" id="northwest-league" value="northwest-league">Northwest League</option>
    <option class="button" id="south-atlantic-league" value="south-atlantic-league">South Atlantic League</option>
    </select>`

    queryBox.appendChild(highADropdown)
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
/////////////////////////////////////////////////////
//-----------MLB DROPDOWN TEAM LISTS----------------//
/////////////////////////////////////////////////////

addAmericanLeagueDropdown = (element) => {
    const americanLeagueDropdown = document.createElement('select')
    americanLeagueDropdown.classList.add('american-league-dropdown') //change class list to id and assign dropdown class

    americanLeagueDropdown.innerHTML = `<select name="americanLeagueDropdown" id="americanLeagueDropdown" onchange="getPark()">
    <option class="button" id="select-team" value="select-team">Select Team</option>
    <option class="button" id="baltimore-orioles" value="baltimore-orioles" onclick="getPark()">Baltimore Orioles</option>
    <option class="button" id="boston-red-sox" value="boston-red-sox">Boston Red Sox</option>
    <option class="button" id="chicago-white-sox" value="chicago-white-sox">Chicago White Sox</option>
    <option class="button" id="cleveland-guardians" value="cleveland-guardians">Cleveland Guardians</option>
    <option class="button" id="detroit-tigers" value="detroit-tigers">Detroit Tigers</option>
    <option class="button" id="houston-astros" value="houston-astros">Houston Astros</option>
    <option class="button" id="kansas-city-royals" value="kansas-city-royals">Kansas City Royals</option>
    <option class="button" id="los-angeles-angels" value="los-angeles-angels">Los Angeles Angels</option>
    <option class="button" id="minnesota-twins" value="minnesota-twins">Minnesota Twins</option>
    <option class="button" id="new-york-yankees" value="new-york-yankees">New York Yankees</option>
    <option class="button" id="oakland-athletics" value="oakland-athletics">Oakland Athletics</option>
    <option class="button" id="seattle-mariners" value="seattle-mariners">Seattle Mariners</option>
    <option class="button" id="tampa-bay-rays" value="tampa-bay-rays">Tampa Bay Rays</option>
    <option class="button" id="texas-rangers" value="texas-rangers">Texas Rangers</option>
    <option class="button" id="toronto-blue-jays" value="toronto-blue-jays">Toronto Blue Jays</option>
    </select>`

    queryBox.appendChild(americanLeagueDropdown)

    // americanLeagueDropdown.addEventListener('change', function handleChange(event){
        // let teamName = document.querySelector("#americanLeagueDropdown")
        // console.log(teamName.value)
        // if (event.target.value === "baltimore-orioles"){
        //  console.log("WE'RE GOING TO CAMDEN")
        //  getPark() //line189
        //  } else {
        //  console.log("hmmm")
        //  }

//      })

}

addNationalLeagueDropdown = (element) => {
    const nationalLeagueDropdown = document.createElement('select')
    nationalLeagueDropdown.classList.add('national-league-dropdown') //change class list to id and assign dropdown class

    nationalLeagueDropdown.innerHTML = `<select name="nationalLeagueDropdown" id="nationalLeagueDropdown">
    <option class="button" id="select-team" value="select-team">Select Team</option>
    <option class="button" id="arizona-diamonbacks" value="arizona-diamondbacks">Arizona Diamondbacks</option>
    <option class="button" id="atlanta-braves" value="atlanta-braves">Atlanta Braves</option>
    <option class="button" id="chicago-cubs" value="chicago-cubs">Chicago Cubs</option>
    <option class="button" id="cincinnati-reds" value="cincinnati-reds">Cincinnati Reds</option>
    <option class="button" id="colorado-rockies" value="colorado-rockies">Colorado Rockies</option>
    <option class="button" id="los-angeles-dodgers" value="los-angeles-dodgers">Los Angeles Dodgers</option>
    <option class="button" id="miami-marlins" value="miami-marlins">Miami Marlins</option>
    <option class="button" id="milwaukee-brewers" value="milwaukee-brewers">Milwaukee Brewers</option>
    <option class="button" id="new-york-mets" value="new-york-mets">New York Mets</option>
    <option class="button" id="philadelphia-phillies" value="philadelphia-phillies">Philadelphia Phillies</option>
    <option class="button" id="pittsburgh-pirates" value="pittsburgh-pirates">Pittsburgh Pirates</option>
    <option class="button" id="san-diego-padres" value="san-diego-padres">San Diego Padres</option>
    <option class="button" id="san-francisco-giants" value="san-francisco-giants">San Francisco Giants</option>
    <option class="button" id="st-louis-cardinals" value="st-louis-cardinals">St. Louis Cardinals</option>
    <option class="button" id="washington-nationals" value="washington-nationals">Washington Nationals</option>
    </select>`

    queryBox.appendChild(nationalLeagueDropdown)

    nationalLeagueDropdown.addEventListener('change', function handleChange(event){
        if (event.target.value === "arizona-diamondbacks"){
         console.log("Chase Field is the spot")
         } else {
         console.log("hmmm")
         }

     })
}

const getPark = (event) => {
    console.log(event.target.value)
    // axios.get("http://localhost:4500/api/park/")
    //     .then(res => {
    //         const data = res.data;
    //         createParkCard(data)
    // })
};

createParkCard = park => {
    const parkCard = document.createElement('div')
    parkCard.classList.add('park-card')

    parkCard.innerHTML = `<img alt="park picture" src=${park.imageURL} class="park-picture"/>
    <p class ="park-title">${park.title}</p>
    <p class ="team-name">${park.team}</p>
    <p class ="park-city">${park.city}</p>
    <p class ="park-opened">${park.opened}</p>
    <p class ="park.capacity">${park.capacity}</p>
    </div>`

    parkInfoBox.appendChild(parkCard)
};

