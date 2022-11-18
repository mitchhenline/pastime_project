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

// const deleteListItem = id => axios.delete('http://localhost:4500/api/listItems:id', id)
// .then((res) => {
// console.log('working')
// })

const addListItem = body => axios.post('http://localhost:4500/api/listItems', body)
.then((res) => {
    console.log(res.data)
    clearList()
    for (let i = 0; i < res.data.length; i++){
        const list = document.createElement('h3')
        list.setAttribute("id", "list-item-text")
        list.textContent = res.data[i].myPark
        listItemsContainer.appendChild(list)
        // const deleteButton = document.createElement('button')
        // deleteButton.setAttribute = ("id", "delete-button")
        // deleteButton.setAttribute = ("onclick", "deleteListItem(event)")
        // deleteButton.textContent = "X"
        // listItemsContainer.appendChild(deleteButton)

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
// listItem.addEventListener('click', deleteListItem)


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

    doubleADropdown.addEventListener('change', function handleChange(event){
        if (event.target.value === "eastern-league"){
         addEasternLeagueDropdown()
        } else if (event.target.value === "southern-league"){
         addSouthernLeagueDropdown()
        } else if (event.target.value === "texas-league"){
            addTexasLeagueDropdown()
         } else {
         console.log("hmmm")
         }
     })
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

    highADropdown.addEventListener('change', function handleChange(event){
        if (event.target.value === "midwest-league"){
         addMidwestLeagueDropdown()
        } else if (event.target.value === "northwest-league"){
         addNorthwestLeagueDropdown()
        } else if (event.target.value === "south-atlantic-league"){
         addSouthAtlanticLeagueDropdown()
         } else {
         console.log("hmmm")
         }
     })
}

addSingleADropdown = (element) => {
    const singleADropdown = document.createElement('select')
    singleADropdown.classList.add('single-A-dropdown') //change class list to id and assign dropdown class

    singleADropdown.innerHTML = `<select name="singleADropdown" id="singleADropdown">
    <option class="button" id="select-league" value="select-league">Select League</option>
    <option class="button" id="california-league" value="california-league">California League</option>
    <option class="button" id="carolina-league" value="carolina-league">Carolina League</option>
    <option class="button" id="florida-state-league" value="florida-state-league">Florida State League</option>
    </select>`

    queryBox.appendChild(singleADropdown)

    singleADropdown.addEventListener('change', function handleChange(event){
        if (event.target.value === "california-league"){
         addCaliforniaLeagueDropdown()
        } else if (event.target.value === "carolina-league"){
         addCarolinaLeagueDropdown()
        } else if (event.target.value === "florida-state-league"){
         addFloridaStateLeagueDropdown()
         } else {
         console.log("hmmm")
         }
     })
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

/////////////////////////////////////////////////////
//-----------DOUBLE A DROPDOWN TEAM LISTS-----------//
/////////////////////////////////////////////////////

addEasternLeagueDropdown = (element) => {
    const easternLeagueDropdown = document.createElement('div')
    easternLeagueDropdown.classList.add('eastern-league-dropdown') 

   easternLeagueDropdown.innerHTML = `<select name="easternLeagueDropdown" id="easternLeagueDropdown" onchange="getPark(event)">
    <option class="button" id="select-team">Select Team</option>
    <option class="button" id="akron-rubber-ducks" value="akron-rubber-ducks">Akron Rubber Ducks</option>
    <option class="button" id="altoona-curve" value="altoona-curve">Altoona Curve</option>
    <option class="button" id="binghamton-rumble-ponies" value="binghamton-rumble-ponies">Binghamton Rumble Ponies</option>
    <option class="button" id="bowie-baysox" value="bowie-baysox">Bowie Baysox</option>
    <option class="button" id="erie-seawolves" value="erie-seawolves">Erie SeaWolves</option>
    <option class="button" id="harrisburg-senators" value="harrisburg-senators">Harrisburg Senators</option>
    <option class="button" id="hartford-yard-goats" value="hartford-yard-goats">Hartford Yard Goats</option>
    <option class="button" id="new-hampshire-fisher-cats" value="new-hampshire-fisher-cats">New Hampshire Fisher Cats</option>
    <option class="button" id="portland-sea-dogs" value="portland-sea-dogs">Portland Sea Dogs</option>
    <option class="button" id="reading-fightin-phils" value="reading-fightin-phils">Reading Fightin Phils</option>
    <option class="button" id="richmond-flying-squirrels" value="richmond-flying-squirrels">Richmond Flying Squirrels</option>
    <option class="button" id="somerset-patriots" value="somerset-patriots">Somerset Patriots</option>
    </select>`

    queryBox.appendChild(easternLeagueDropdown)
}

addSouthernLeagueDropdown = (element) => {
    const southernLeagueDropdown = document.createElement('div')
    southernLeagueDropdown.classList.add('southern-league-dropdown')

    southernLeagueDropdown.innerHTML = `<select name="southernLeagueDropdown" id="southernLeagueDropdown" onchange="getPark(event)">
    <option class="button" id="select-team">Select Team</option>
    <option class="button" id="biloxi-shuckers" value="biloxi-shuckers">Biloxi Shuckers</option>
    <option class="button" id="birmingham-barons" value="birmingham-barons">Birmingham Barons</option>
    <option class="button" id="chattanooga-lookouts" value="chattanooga-lookouts">Chattanooga Lookouts</option>
    <option class="button" id="mississippi-braves" value="mississippi-braves">Mississippi Braves</option>
    <option class="button" id="montgomery-biscuits" value="montgomery-biscuits">Montgomery Biscuits</option>
    <option class="button" id="pensacola-blue-wahoos" value="pensacola-blue-wahoos">Pensacola Blue Wahoos</option>
    <option class="button" id="rocket-city-trash-pandas" value="rocket-city-trash-pandas">Rocket City Trash Pandas</option>
    <option class="button" id="tennessee-smokies" value="tennessee-smokies">Tennessee Smokies</option>
    </select>`

    queryBox.appendChild(southernLeagueDropdown)
}

addTexasLeagueDropdown = (element) => {
    const texasLeagueDropdown = document.createElement('div')
    texasLeagueDropdown.classList.add('texas-league-dropdown')

    texasLeagueDropdown.innerHTML = `<select name="texasLeagueDropdown" id="texasLeagueDropdown" onchange="getPark(event)">
    <option class="button" id="select-team">Select Team</option>
    <option class="button" id="amarillo-sod-poodles" value="amarillo-sod-poodles">Amarillo Sod Poodles</option>
    <option class="button" id="arkansas-travelers" value="arkansas-travelers">Arkansas Travelers</option>
    <option class="button" id="corpus-christi-hooks" value="corpus-christi-hooks">Corpus Christi Hooks</option>
    <option class="button" id="frisco-roughriders" value="frisco-roughriders">Frisco RoughRiders</option>
    <option class="button" id="midland-rockhounds" value="midland-rockhounds">Midland RockHounds</option>
    <option class="button" id="northwest-arkansas-naturals" value="northwest-arkansas-naturals">Northwest Arkansas Naturals</option>
    <option class="button" id="san-antonio-missions" value="san-antonio-missions">San Antonio Missions</option>
    <option class="button" id="springfield-cardinals" value="springfield-cardinals">Springfield Cardinals</option>
    <option class="button" id="tulsa-drillers" value="tulsa-drillers">Tulsa Drillers</option>
    <option class="button" id="wichita-wind-surge" value="wichita-wind-surge">Wichita Wind Surge</option>
    </select>`

    queryBox.appendChild(texasLeagueDropdown)
}

/////////////////////////////////////////////////////
//-----------HIGH A DROPDOWN TEAM LISTS-----------//
/////////////////////////////////////////////////////

addMidwestLeagueDropdown = (element) => {
    const midwestLeagueDropdown = document.createElement('div')
    midwestLeagueDropdown.classList.add('midwest-league-dropdown') 

   midwestLeagueDropdown.innerHTML = `<select name="midwestLeagueDropdown" id="midwestLeagueDropdown" onchange="getPark(event)">
    <option class="button" id="select-team">Select Team</option>
    <option class="button" id="beloit-sky-carp" value="beloit-sky-carp">Beloit Sky Carp</option>
    <option class="button" id="cedar-rapids-kernals" value="cedar-rapids-kernals">Cedar Rapids Kernals</option>
    <option class="button" id="dayton-dragons" value="dayton-dragons">Dayton Dragons</option>
    <option class="button" id="fort-wayne-tincaps" value="fort-wayne-tincaps">Fort Wayne TinCaps</option>
    <option class="button" id="great-lakes-loons" value="great-lakes-loons">Great Lakes Loons</option>
    <option class="button" id="lake-county-captains" value="lake-county-captains">Lake County Captains</option>
    <option class="button" id="lansing-lugnuts" value="lansing-lugnuts">Lansing Lugnuts</option>
    <option class="button" id="peoria-chiefs" value="peoria-chiefs">Peoria Chiefs</option>
    <option class="button" id="quad-cities-river-bandits" value="quad-cities-river-bandits">Quad Cities River Bandits</option>
    <option class="button" id="south-bend-cubs" value="south-bend-cubs">South Bend Cubs</option>
    <option class="button" id="west-michigan-whitecaps" value="west-michigan-whitecaps">West Michigan Whitecaps</option>
    <option class="button" id="wisconsin-timber-rattlers" value="wisconsin-timber-rattlers">Wisconsin Timber Rattlers</option>
    </select>`

    queryBox.appendChild(midwestLeagueDropdown)
}

addNorthwestLeagueDropdown = (element) => {
    const northwestLeagueDropdown = document.createElement('div')
    northwestLeagueDropdown.classList.add('northwest-league-dropdown')

    northwestLeagueDropdown.innerHTML = `<select name="northwestLeagueDropdown" id="northwestLeagueDropdown" onchange="getPark(event)">
    <option class="button" id="select-team">Select Team</option>
    <option class="button" id="eugene-emeralds" value="eugene-emeralds">Eugene Emeralds</option>
    <option class="button" id="everett-aquasox" value="everett-aquasox">Everett AquaSox</option>
    <option class="button" id="hillsboro-hops" value="hillsboro-hops">Hillsboro Hops</option>
    <option class="button" id="spokane-indians" value="spokane-indians">Spokane Indians</option>
    <option class="button" id="tri-city-dust-devils" value="tri-city-dust-devils">Tri-City Dust Devils</option>
    <option class="button" id="vancouver-canadians" value="vancouver-canadians">Vancouver Canadians</option>
    </select>`

    queryBox.appendChild(northwestLeagueDropdown)
}

addSouthAtlanticLeagueDropdown = (element) => {
    const southAtlanticLeagueDropdown = document.createElement('div')
    southAtlanticLeagueDropdown.classList.add('south-atlantic-league-dropdown')

    southAtlanticLeagueDropdown.innerHTML = `<select name="southAtlanticLeagueDropdown" id="southAtlanticLeagueDropdown" onchange="getPark(event)">
    <option class="button" id="select-team">Select Team</option>
    <option class="button" id="aberdeen-ironbirds" value="aberdeen-ironbirds">Aberdeen IronBirds</option>
    <option class="button" id="ashville-tourists" value="ashville-tourists">Ashville Tourists</option>
    <option class="button" id="bowling-green-hot-rods" value="bowling-green-hot-rods">Bowling Green Hot Rods</option>
    <option class="button" id="brooklyn-cyclones" value="brooklyn-cyclones">Brooklyn Cyclones</option>
    <option class="button" id="greensboro-grasshoppers" value="greensboro-grasshoppers">Greensboro Grasshoppers</option>
    <option class="button" id="greenville-drive" value="greenville-drive">Greenville Drive</option>
    <option class="button" id="hickory-crawdads" value="hickory-crawdads">Hickory Crawdads</option>
    <option class="button" id="hudson-valley-renegades" value="hudson-valley-renegades">Hudson Valley Renegades</option>
    <option class="button" id="jersey-shore-blueclaws" value="jersey-shore-blueclaws">Jersey Shore BlueClaws</option>
    <option class="button" id="rome-braves" value="rome-braves">Rome Braves</option>
    <option class="button" id="wilmington-blue-rocks" value="wilmington-blue-rocks">Wilmington Blue Rocks</option>
    <option class="button" id="winston-salem-dash" value="winston-salem-dash">Winston-Salem Dash</option>
    </select>`

    queryBox.appendChild(southAtlanticLeagueDropdown)
}

/////////////////////////////////////////////////////
//-----------SINGLE A DROPDOWN TEAM LISTS----------//
/////////////////////////////////////////////////////

addCaliforniaLeagueDropdown = (element) => {
    const californiaLeagueDropdown = document.createElement('div')
    californiaLeagueDropdown.classList.add('california-league-dropdown') 

   californiaLeagueDropdown.innerHTML = `<select name="californiaLeagueDropdown" id="californiaLeagueDropdown" onchange="getPark(event)">
    <option class="button" id="select-team">Select Team</option>
    <option class="button" id="fresno-grizzlies" value="fresno-grizzlies">Fresno Grizzlies</option>
    <option class="button" id="inland-empire-66ers" value="inland-empire-66ers">Inland Empire 66ers</option>
    <option class="button" id="lake-elsinore-storm" value="lake-elsinore-storm">Lake Elsinore Storm</option>
    <option class="button" id="modesto-nuts" value="modesto-nuts">Modesto Nuts</option>
    <option class="button" id="rancho-cucamonga-quakes" value="rancho-cucamonga-quakes">Rancho Cucamonga Quakes</option>
    <option class="button" id="san-jose-giants" value="san-jose-giants">San Jose Giants</option>
    <option class="button" id="stockton-ports" value="stockton-ports">Stockton Ports</option>
    <option class="button" id="visalia-rawhide" value="visalia-rawhide">Visalia Rawhide</option>
    </select>`

    queryBox.appendChild(californiaLeagueDropdown)
}

addCarolinaLeagueDropdown = (element) => {
    const carolinaLeagueDropdown = document.createElement('div')
    carolinaLeagueDropdown.classList.add('carolina-league-dropdown')

    carolinaLeagueDropdown.innerHTML = `<select name="carolinaLeagueDropdown" id="carolinaLeagueDropdown" onchange="getPark(event)">
    <option class="button" id="select-team">Select Team</option>
    <option class="button" id="augusta-greenjackets" value="augusta-greenjackets">Augusta GreenJackets</option>
    <option class="button" id="carolina-mudcats" value="carolina-mudcats">Carolina Mudcats</option>
    <option class="button" id="charleston-riverdogs" value="charleston-riverdogs">Charleston RiverDogs</option>
    <option class="button" id="columbia-fireflies" value="columbia-fireflies">Columbia Fireflies</option>
    <option class="button" id="delmarva-shorebirds" value="delmarva-shorebirds">Delmarva Shorebirds</option>
    <option class="button" id="down-east-wood-ducks" value="down-east-wood-ducks">Down East Wood Ducks</option>
    <option class="button" id="fayetteville-woodpeckers" value="fayetteville-woodpeckers">Fayetteville Woodpeckers</option>
    <option class="button" id="fredericksburg-nationals" value="fredericksburg-nationals">Fredericksburg Nationals</option>
    <option class="button" id="kannapolis-cannon-ballers" value="kannapolis-cannon-ballers">Kannapolis Cannon Ballers</option>
    <option class="button" id="lynchburg-hillcats" value="lynchburg-hillcats">Lynchburg Hillcats</option>
    <option class="button" id="myrtle-beach-pelicans" value="myrtle-beach-pelicans">Myrtle Beach Pelicans</option>
    <option class="button" id="salem-red-sox" value="salem-red-sox">Salem Red Sox</option>
    </select>`

    queryBox.appendChild(carolinaLeagueDropdown)
}

addFloridaStateLeagueDropdown = (element) => {
    const floridaStateLeagueDropdown = document.createElement('div')
    floridaStateLeagueDropdown.classList.add('florida-state-league-dropdown')

    floridaStateLeagueDropdown.innerHTML = `<select name="floridaStateLeagueDropdown" id="floridaStateLeagueDropdown" onchange="getPark(event)">
    <option class="button" id="select-team">Select Team</option>
    <option class="button" id="bradenton-marauders" value="bradenton-marauders">Bradenton Marauders</option>
    <option class="button" id="clearwater-threshers" value="clearwater-threshers">Clearwater Threshers</option>
    <option class="button" id="daytona-tortugas" value="daytona-tortugas">Daytona Tortugas</option>
    <option class="button" id="dunedin-blue-jays" value="dunedin-blue-jays">Dunedin Blue Jays</option>
    <option class="button" id="fort-myers-mighty-mussels" value="fort-myers-mighty-mussels">Fort Myers Mighty Mussels</option>
    <option class="button" id="jupiter-hammerheads" value="jupiter-hammerheads">Jupiter Hammerheads</option>
    <option class="button" id="lakeland-flying-tigers" value="lakeland-flying-tigers">Lakeland Flying Tigers</option>
    <option class="button" id="palm-beach-cardinals" value="palm-beach-cardinals">Palm Beach Cardinals</option>
    <option class="button" id="st-lucie-mets" value="st-lucie-mets">St. Lucie Mets</option>
    <option class="button" id="tampa-tarpons" value="tampa-tarpons">Tampa Tarpons</option>
    </select>`

    queryBox.appendChild(floridaStateLeagueDropdown)
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

const randomPark = () => {
    console.log('click works')
    axios.get("http://localhost:4500/api/random")
        .then(res => {
            const data = res.data;
            console.log(data)
            createParkCard(data)
    })
};

randomButton.addEventListener('click', randomPark)