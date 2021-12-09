const { User } = require('../models');

const userData = [
  {
    username: 'kateparknews',
   password: "password1"
  },
  {
    username: 'asilbwrites',
   password: "password2"
  },
  {
    username: 'lucasmtny',
   password: "password3"
  },
  {
    username: 'sarahintampa',
   password: "password4"
  },
];

const userSeeds = () => User.bulkCreate(userData);

module.exports = userSeeds;