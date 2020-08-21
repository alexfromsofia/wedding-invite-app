const express = require('express');
const { Guest, guestEnums } = require('../models/guest');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const guests = await Guest.find({});

    res.status(201).send(guests);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.post('/', async (req, res) => {
  const guest = new Guest({
    alias: req.body.name,
    name: req.body.alias,
  });

  try {
    await guest.save();

    res.status(201).send(guest);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.patch('/:id', async (req, res) => {
  const updates = Object.keys(req.body);
  const isValidOperation = updates.every((update) =>
    // eslint-disable-next-line
    guestEnums.includes(update)
  );

  if (!isValidOperation) {
    return res.status(400).send({ error: 'Invalid update!' });
  }

  try {
    const guest = await Guest.findOne({
      _id: req.params.id,
    });

    if (!guest) {
      return res.status(404).send();
    }

    updates.forEach((update) => (guest[update] = req.body[update]));

    await guest.save();

    res.send(guest);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
