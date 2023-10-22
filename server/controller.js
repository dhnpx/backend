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
}
