const fs = require('fs');
const { faker } = require('@faker-js/faker');

let data = {
    accounts: [],
    accountInfo: [],
    cardInfo: [],
    products: [],
};

for (let i = 1; i < 50; i++) {
    let account = {
        id: i,
        username: faker.internet.userName(),
        password: faker.internet.password(),
    };

    let accountInfo = {
        id: i,
        accountId: account.id,
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        phone: faker.phone.number(),
        street: faker.location.streetAddress(),
        city: faker.location.city(),
        state: faker.location.state(),
        zip: faker.location.zipCode(),
    };

    let cardInfo = {
        id: i,
        accountId: account.id,
        number: faker.finance.creditCardNumber(),
        cvv: faker.finance.creditCardCVV(),
    };

    let product = {
        id: i,
        name: faker.commerce.productName(),
        desc: faker.commerce.productDescription(),
        price: faker.commerce.price(),
    };

    data.accounts.push(account);
    data.accountInfo.push(accountInfo);
    data.cardInfo.push(cardInfo);
    data.products.push(product);
}

fs.writeFile('./db/data.json', JSON.stringify(data), err => { if (err) { console.log(err) } });

