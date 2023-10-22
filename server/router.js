const router = require('express').Router();
const controller = require('./controller');

router.route('/login')
    .post(controller.login);

router.route('/accounts')
    .get(controller.getAllAccounts);

module.exports = router;
