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

router.get('/getmusic/:musicid', (req, res) => {

    const id = req.params.musicid;
    const response = {};

    models.music.findOne({
        where: {id : id}
    }).then((data)=>{
        if(data === null) {
            response['message'] = 'no record based on this id'; 
            res.status(404).send(response);
        }
        res.status(200).send(data);        
    }).catch((err)=>{
        res.status(400).send(err);
    })
})

router.patch('/updatemusic/:musicid', (req, res) => {
    const data = req.body;
    const id = req.params.musicid;
    const response = {};

    models.music.update(data, {
        where: {id : id}
    }).then((rowsUpdated)=>{
        if(rowsUpdated[0] == 0) {
            response['message'] = `no record based on this id`; 
            res.status(404).send(response)
        }
        response['message'] = `${rowsUpdated[0]} row updated successfully !!!`;
        res.status(200).send(response);        
    }).catch((err)=>{
        res.status(400).send(err);
    });
})

router.delete('/deletemusic/:musicid', (req, res) => {
    const data = req.body;
    const id = req.params.musicid;
    const response = {};

    models.music.destroy({
        where: {id : id}
    }).then((rowsDeleted)=>{
        console.log(rowsDeleted);
        if(rowsDeleted == 0) {
            response['message'] = `no record based on this id`; 
            res.status(404).send(response)
        }
        response['message'] = `${rowsDeleted} row deleted successfully !!!`;
        res.status(200).send(response);        
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
            res.status(200).send(data);
        })
        .catch((err) => {
            console.log(err);
            res.send(400).send(err);
        })
})

module.exports = router;
