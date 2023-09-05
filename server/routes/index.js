const router = require('express').Router();
const messageRoutes = require('./api/messageRoutes');

router.use('/message', messageRoutes);

router.use((req, res) => {
  return res.send('Wrong route!');
});

module.exports = router;
