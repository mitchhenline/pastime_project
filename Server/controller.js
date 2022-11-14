const parks = require('./db.json')

module.exports = {

    getPark: (req, res) => {
        const {team} = req.params
        for (let i=0; i < parks.length; i++){
            if (parks[i].teamId === team){
               return res.status(200).send(parks[i])
            } else {
                return console.log("Cannot find matching teamID")
            }
        }
        
    }

}