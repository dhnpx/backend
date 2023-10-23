const { accounts, accountInfo, cardInfo, products } = require('./data.json');

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

    postAccount: (req) => {
        let account = {
            id: accounts[accounts.length - 1].id + 1,
            username: req.body.username,
            password: req.body.password,
        };
        accounts.push(account);
    },


    getAllAccounts: () => {
        return accounts;
    },

    getAccountInfo: (id) => {
        for (info of accountInfo) {
            if (info.accountId == id) {
                return info;
            }
        }
        return null;
    },

    getAllAccountInfo: () => {
        return accountInfo;
    },

    getCardInfo: (accountId) => {
        if (accountId == undefined) {
            return cardInfo;
        }
        for (card of cardInfo) {
            if (card.accoundId == accountId) {
                return card;
            }
        }
        return null;
    },

    getAllCardInfo: () => {
        return cardInfo;
    },
    
    getAllProducts: () => {
        return products;
    },
}
