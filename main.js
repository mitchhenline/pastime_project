const mlbDropdown = document.getElementById("mlbDropdown")
const tripleADropdown = document.getElementById("triple-A-dropdown")
const doubleADropdown = document.getElementById("double-A-dropdown")
const highADropdown = document.getElementById("high-A-dropdown")
const singleADropdown = document.getElementById("single-A-dropdown")
const queryBox = document.getElementById("query-box")
const parkInfoBox = document.getElementById("park-info-box")
const randomButton = document.getElementById("random-button")
const listItemsContainer = document.querySelector('#list-items-container')
const form = document.querySelector('#bucketlist-form')


const baseURL = 'http://localhost:4500'


////////////////////////////////////////////////////////////////////////
//------------------------BUCKET LIST---------------------------------//
///////////////////////////////////////////////////////////////////////


const errCallback = err => console.log(err.response.data)

clearList = () => {
    listItemsContainer.innerHTML = ``
}

const addListItem = body => axios.post('http://localhost:4500/api/listItems', body)
.then((res) => {
    console.log(res.data)
    clearList()
    for (let i = 0; i < res.data.length; i++){
        const list = document.createElement('h1')
        list.textContent = res.data[i].myPark
        listItemsContainer.appendChild(list)

    }
})
.catch(errCallback)

function submitHandler(e) {
    e.preventDefault()

    let myPark = document.querySelector('#my-park')

    let bodyObj = {
        myPark: myPark.value, 
    }
    addListItem(bodyObj)

    myPark.value = ''
}


form.addEventListener('submit', submitHandler)


////////////////////////////////////////////////////////////////////////
//------------------------DROPDOWN MENU-------------------------------//
////////////////////////////////////////////////////////////////////////


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


//////////////////////////////////////////////////////////////////////////////////////////
 //-------------------------------ADD DROPDOWN FUNCTIONS-------------------------------//
//////////////////////////////////////////////////////////////////////////////////////////

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

    tripleADropdown.addEventListener('change', function handleChange(event){
        if (event.target.value === "international-league"){
         addInternationalLeagueDropdown()
        } else if (event.target.value === "pacific-coast-league"){
         addPacificCoastLeagueDropdown()
         } else {
         console.log("hmmm")
         }
     })
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
    const americanLeagueDropdown = document.createElement('div')
    americanLeagueDropdown.classList.add('american-league-dropdown')

    americanLeagueDropdown.innerHTML = `<select name="americanLeagueDropdown" id="americanLeagueDropdown" onchange="getPark(event)">
    <option class="button" id="select-team">Select Team</option>
    <option class="button" id="baltimore-orioles" value="baltimore-orioles">Baltimore Orioles</option>
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

}

addNationalLeagueDropdown = (element) => {
    const nationalLeagueDropdown = document.createElement('div')
    nationalLeagueDropdown.classList.add('national-league-dropdown') 

    nationalLeagueDropdown.innerHTML = `<select name="nationalLeagueDropdown" id="nationalLeagueDropdown" onchange="getPark(event)">
    <option class="button" id="select-team">Select Team</option>
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
}

/////////////////////////////////////////////////////
//-----------TRIPLE A DROPDOWN TEAM LISTS-----------//
/////////////////////////////////////////////////////

addInternationalLeagueDropdown = (element) => {
    const internationalLeagueDropdown = document.createElement('div')
    internationalLeagueDropdown.classList.add('international-league-dropdown')

    internationalLeagueDropdown.innerHTML = `<select name="internationalLeagueDropdown" id="internationalLeagueDropdown" onchange="getPark(event)">
    <option class="button" id="select-team">Select Team</option>
    <option class="button" id="buffalo-bisons" value="buffalo-bisons">Buffalo Bisons</option>
    <option class="button" id="charlotte-knights" value="charlotte-knights">Charlotte Knights</option>
    <option class="button" id="columbus-clippers" value="columbus-clippers">Columbus Clippers</option>
    <option class="button" id="durham-bulls" value="durham-bulls">Durham Bulls</option>
    <option class="button" id="gwinnett-stripers" value="gwinnett-stripers">Gwinnett Stripers</option>
    <option class="button" id="indianapolis-indians" value="indianapolis-indians">Indianpolis Indians</option>
    <option class="button" id="iowa-cubs" value="iowa-cubs">Iowa Cubs</option>
    <option class="button" id="jacksonville-jumbo-shrimp" value="jacksonville-jumbo-shrimp">Jacksonville Jumbo Shrimp</option>
    <option class="button" id="lehigh-valey-ironpigs" value="lehigh-valley-ironpigs">Lehigh Valley IronPigs</option>
    <option class="button" id="louisville-bats" value="louisville-bats">Louisville Bats</option>
    <option class="button" id="memphis-redbirds" value="memphis-redbirds">Memphis Redbirds</option>
    <option class="button" id="nashville-sounds" value="nashville-sounds">Nashville Sounds</option>
    <option class="button" id="norfolk-tides" value="norfolk-tides">Norfolk Tides</option>
    <option class="button" id="omaha-storm-chasers" value="omaha-storm-chasers">Omaha Storm Chasers</option>
    <option class="button" id="rochester-red-wings" value="rochester-red-wings">Rochester Red Wings</option>
    <option class="button" id="scranton-wilkes-barre-railriders" value="scranton-wilkes-barre-railriders">Scranton/Wilkes-Barre RailRiders</option>
    <option class="button" id="st-paul-saints" value="st-paul-saints">St. Paul Saints</option>
    <option class="button" id="syracuse-mets" value="syracuse-mets">Syracuse Mets</option>
    <option class="button" id="toledo-mud-hens" value="toledo-mud-hens">Toledo Mud Hens</option>
    <option class="button" id="worcester-red-sox" value="worcester-red-sox">Worcester Red Sox</option>
    </select>`

    queryBox.appendChild(internationalLeagueDropdown)

}

addPacificCoastLeagueDropdown = (element) => {
    const pacificCoastLeagueDropdown = document.createElement('div')
    pacificCoastLeagueDropdown.classList.add('pacific-coast-league-dropdown') 

   pacificCoastLeagueDropdown.innerHTML = `<select name="pacificCoastLeagueDropdown" id="pacificCoastLeagueDropdown" onchange="getPark(event)">
    <option class="button" id="select-team">Select Team</option>
    <option class="button" id="albuquerque-isotopes" value="albuquerque-isotopes">Albuquerque Isotopes</option>
    <option class="button" id="el-paso-chihuahuas" value="el-paso-chihuahuas">El Paso Chihuahuas</option>
    <option class="button" id="las-vegas-aviators" value="las-vegas-aviators">Las Vegas Aviators</option>
    <option class="button" id="oklahoma-city-dodgers" value="oklahoma-city-dodgers">Oklahoma City Dodgers</option>
    <option class="button" id="reno-aces" value="reno-aces">Reno Aces</option>
    <option class="button" id="round-rock-express" value="round-rock-express">Round Rock Express</option>
    <option class="button" id="sacramento-river-cats" value="sacramento-river-cats">Sacramento River Cats</option>
    <option class="button" id="salt-lake-bees" value="salt-lake-bees">Salt Lake Bees</option>
    <option class="button" id="sugar-land-space-cowboys" value="sugar-land-space-cowboys">Sugar Land Space Cowboys</option>
    <option class="button" id="tacoma-rainiers" value="tacoma-rainiers">Tacoma Rainiers</option>
    </select>`

    queryBox.appendChild(pacificCoastLeagueDropdown)
}

////////////////////////////
/////GRAB PARK FUNCTIONS////
////////////////////////////

const getPark = (event) => {
    const team = event.target.value


    axios.get(`http://localhost:4500/api/park/${team}`)
        .then(res => {
            const data = res.data;
            createParkCard(data)
            console.log(data)
    })
};



createParkCard = park => {
    clearPark()

    const parkCard = document.createElement('div')
    parkCard.classList.add('park-card')

    parkCard.innerHTML = `<img alt="park picture" src=${park.imageURL} class="park-picture"/>
    <p class ="park-title">${park.title}</p>
    <p class ="team-name">${park.team}</p>
    <p class ="park-city">${park.city}</p>
    <p class ="park-opened">${park.opened}</p>
    <p class ="park-capacity">${park.capacity}</p>
    </div> `
    parkInfoBox.appendChild(parkCard)
};


clearPark = () => {
    parkInfoBox.innerHTML = ``
}

////////////////////////////
//////RANDOM PARK///////////
////////////////////////////

// const randomPark = () => {
//     axios.get("http://localhost:4000/api/random")
//         .then(res => {
//             const data = res.data;
//             createParkCard(data)
//     })
// };

// randomButton.addEventListener('click', randomPark)