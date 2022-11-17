const parks = require('./db.json')
const listItems = require('./db2.json')

module.exports = {

    getPark: (req, res) => {
        const {team} = req.params
        console.log(team)
        for (let i=0; i < parks.length; i++){
            if (parks[i].teamId === team){
               return res.status(200).send(parks[i])
            }
        }
    },

    randomPark: (req, res) => {
        let randomIndex = Math.floor(Math.random() * parks.length);
        let randomPark = parks[randomIndex];
      
        res.status(200).send(randomPark);
    },

    addListItem: (req, res) => {
        const {myPark} = req.body
        console.log(req.body)
        let greatestId = 0
        for (let i = 0; i < listItems.length; i++) {
            if (listItems[i].id > greatestId) {
                greatestId = listItems[i].id
            }
        }
        let nextId = greatestId + 1
        
        let newListItem = {
            id: nextId,
            myPark: myPark,
            // myRating: myRating,
        }

        listItems.push(newListItem)
        res.status(200).send(listItems)
    },

    deleteListItem: (req, res) => {
        const {id} = req.body
        for (let i = 0; i < listItems.length; i++) {
            if (listItems[i] === id) {
                listItems.splice(i, 1)
                res.status(200).send('list item deleted')
            }
        }
        res.status(400).send('list item not found')
    }
}