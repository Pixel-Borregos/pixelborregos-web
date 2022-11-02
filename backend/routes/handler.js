const express = require("express");
const router = express.Router();

// De aqui se jalan los datos de Firebase
router.get('/Projects', (req, res) => {
    const str = [{
        "ProjectTitle": "Spider-Man 4 (2022)",
        "ProjectGenre": "Action - Adventure - 3D",
        "ProjectDescription": "Sam Raimi's Spider-Man 4 in videogame form, what else do you need?"
    }];
    res.end(JSON.stringify(str));
});

router.post('/addProject', (req, res) => {
    res.end('NA')
});

module.exports = router;
