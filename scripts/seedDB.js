const mongoose = require("mongoose");
const db = require("../models");
const fs = require("fs");


function seedDb(force) {
    
db.Spell.find({},
    (error, data) => {
        if (error) console.log(err);
        if (data && !force)
        return;

        // change to fs system parameters for the current Const
    fs.readFile("spells.json","utf-8", (err, data) => {
        if (err) console.log(err);
        let spellSeed = JSON.parse(data)
        // console.log(spellSeed);
        db.Spell.deleteMany({}, (err, data) => {
            if (err) console.log(err);
            console.log(data);
            db.Spell.create(spellSeed)
          });
    })

    })

}



module.exports = seedDb; 