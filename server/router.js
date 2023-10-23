const router = require('express').Router();
const controller = require('./controller');

router.route('/login')
    .post(controller.login);

router.route('/accounts')
    .get(controller.getAllAccounts)
    .post(controller.postAccount);

router.route('/accountInfo/:accountId?')
    .get(controller.getAccountInfo);

router.route('/cardInfo/:accountId?')
    .get(controller.getCardInfo);

router.route('/products')
    .get(controller.getProducts);

module.exports = router;
