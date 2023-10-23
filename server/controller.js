const dbHelpers = require("../db/dbHelpers");

module.exports = {
    login: (req, res) => {
        if (dbHelpers.login(req)) {
            res.status(200).send("Success");
        } else {
            res.status(401).send("Login failed");
        }
    },

    getAllAccounts: (req, res) => {
        let accts = dbHelpers.getAllAccounts();
        if (accts) {
            res.status(200).send(accts);
        } else {
            res.status(500).send("Something went wrong");
        }
    },

    postAccount: (req, res) => {
        dbHelpers.postAccount(req);
        res.status(200).send("Account added");
    },

    getAccountInfo: (req, res) => {
        let accountInfo;
        if (req.params.accountId == undefined) {
            accountInfo = dbHelpers.getAllAccountInfo();
        } else {
            accountInfo = dbHelpers.getAccountInfo(req.params.accountId);
        }
        if (accountInfo == null) {
            res.status(404).send("Resource not found");
        } else {
            res.status(200).send(accountInfo);
        }
    },

    getCardInfo: (req, res) => {
        let cardInfo;
        if (req.params.accountId == undefined) {
            cardInfo = dbHelpers.getAllCardInfo();
        } else {
            cardInfo = dbHelpers.getCardInfo(req.params.accountId);
        }
        if (cardInfo == null) {
            res.status(404).send("Resource not found");
        } else {
            res.status(200).send(cardInfo);
        }
    },

    getProducts: (req, res) => {
        let products = dbHelpers.getAllProducts();
        if (products == null) {
            res.status(500).send("Something went wrong");
        } else {
            res.status(200).send(products);
        }
    },
}
