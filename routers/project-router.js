const express = require('express');

const project = require('../data/helpers/projectModel');
const actions = require('../data/helpers/actionModel');

const router = express.Router();

router.use(express.json());

router.get('/', (req, res) => {
  const messageOfTheDay = process.env.MOTD;
  res.status(200).json({ motd: messageOfTheDay });
});

module.exports = router;
