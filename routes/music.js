const express = require('express');
const models = require('../models');


const router = express.Router();

router.get('/allmusic', (req, res) => {

    models.music.findAll()
        .then((data) =>{
            res.status(200).send(data)
        })
        .catch((err) => {
            res.status(400).send(err)
        })
})

router.patch('/updatemusic/:musicid', (req, res) => {
    const data = req.body;

    models.music.update(data, {
        where: {id : req.params.musicid}
    }).then((data)=>{
        res.status(200).send(data);        
    }).catch((err)=>{
        res.status(400).send(err);
    })

})

router.delete('/deletemusic/:musicid', (req, res) => {

    models.music.destroy({
        where: {id : req.params.musicid}
    }).then((data)=>{
        res.status(200).send(data);        
    }).catch((err)=>{
        res.status(400).send(err);
    })
})

router.post('/addmusic', (req, res) => {
    
    const data = {
        name : req.body.name,
        genre : req.body.genre,
        singer : req.body.singer,
        writer : req.body.writer
    }

    models.music.create(data)
        .then((data) => {
            console.log(data);
            res.status(200).send(data);
        })
        .catch((err) => {
            console.log(err);
            res.send(400).send(err);
        })
})

module.exports = router;
