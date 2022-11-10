const parks = require('./db.json')

module.exports = {

    getPark: (req, res) => {

        
        let park = parks.id
        //get specific park by id//not sure if syntax is correct on this
        res.status(200).send(park);
    }

}