const express = require('express');

const invitations = require('./invitations');

const router = express.Router();

router.use('/invitations', invitations);

module.exports = router;
