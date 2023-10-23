# backend

### Get started

1. ``git clone http://github.com/dhnpx/backend.git`` OR download zip file
2. npm install
3. npm run seed
4. npm start

### Routes

* POST /login
    * data to send:
        {
            "username": <username>,
            "password": <password>
        }

* GET /accounts

* POST /accounts
    * data to send:
        {
            "username": <username>,
            "password": <password>
        }

* GET /accountInfo/<accountId>
    * e.g. `http://localhost:8000/accountInfo/17`
    * specify account id in url
    * omit id to get account info for all accounts

* GET /cardInfo/<accountId>
    * e.g. `http://localhost:8000/cardInfo/25`
    * specify account id in url
    * omit id to get account info for all accounts

* GET /products
