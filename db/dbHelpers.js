const { accounts, accountInfo, canrdInfo, products } = require('./data.json');

module.exports = {
    login: (req) => {
        let username = req.body.username;
        let password = req.body.password;

        for (acct of accounts) {
            if (username == acct.username && password == acct.password) {
                return true;
            }
        }
        return false;
    },

    getAllAccounts: () => {
        return accounts;
    },
}
