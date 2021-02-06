const express = require('express');
const models = require('../models');

const router = express.Router();

const error = (err, res) => {
  const response = {
    statusCode: 400,
    error: err.message,
  };
  return res.status(response.statusCode).send(response);
};

const idNotFound = (res) => {
  const response = {
    statusCode: 404,
    error: 'no record based on this id',
  };
  return res.status(response.statusCode).send(response);
};

const success = (rows, data, res, req) => {
  const response = {};

  if (req.method === 'PATCH') {
    response.statusCode = 200;
    response.body = `${rows[0]} row updated successfully !!!`;
  } else if (req.method === 'DELETE') {
    response.statusCode = 200;
    response.body = `${rows} row deleted successfully !!!`;
  } else if (req.method === 'GET') {
    response.statusCode = 200;
    response.body = data;
  } else {
    response.statusCode = 200;
    response.body = 'record added successfully !!';
  }

  return res.status(response.statusCode).send(response);
};

router.get('/allmusic', (req, res) => {
  models.music.findAll()
    .then((data) => {
      success(0, data, res, req);
    })
    .catch((err) => {
      error(err, res);
    });
});

router.get('/getmusic/:musicid', (req, res) => {
  const id = req.params.musicid;

  models.music.findOne({
    where: { id },
  }).then((data) => {
    if (data === null) {
      idNotFound(res);
    } else {
      success(0, data, res, req);
    }
  }).catch((err) => {
    error(err, res);
  });
});

router.patch('/updatemusic/:musicid', (req, res) => {
  const params = req.body;
  const id = req.params.musicid;

  models.music.update(params, {
    where: { id },
  }).then((rowsUpdated) => {
    if (rowsUpdated[0] === 0) {
      idNotFound(res);
    } else {
      success(rowsUpdated, null, res, req);
    }
  }).catch((err) => {
    error(err, res);
  });
});

router.delete('/deletemusic/:musicid', (req, res) => {
  const id = req.params.musicid;

  models.music.destroy({
    where: { id },
  }).then((rowsDeleted) => {
    if (rowsDeleted === 0) {
      idNotFound(res);
    } else {
      success(rowsDeleted, null, res, req);
    }
  }).catch((err) => {
    error(err, res);
  });
});

router.post('/addmusic', (req, res) => {
  const params = {
    name: req.body.name,
    genre: req.body.genre,
    singer: req.body.singer,
    writer: req.body.writer,
  };

  models.music.create(params)
    .then((data) => {
      success(0, data, res, req);
    })
    .catch((err) => {
      error(err, res);
    });
});

module.exports = router;
