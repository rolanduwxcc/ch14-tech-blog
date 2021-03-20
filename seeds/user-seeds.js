const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
  {
    username: 'alex',
    email: 'alex@alex.com',
    password: 'password123'
  },
  {
    username: 'liam',
    email: 'liam@liam.com',
    password: 'password123'
  },
  {
    username: 'bob',
    email: 'bob@bob.com',
    password: 'password123'
  },
  {
    username: 'steve',
    email: 'steve@steve.com',
    password: 'password123'
  },
  {
    username: 'steve-O',
    email: 'steveo@gmail.com',
    password: 'password123'
  },
  {
    username: 'movie',
    email: 'movie@gmail.com',
    password: 'password123'
  },
  {
    username: 'morgan',
    email: 'morgan@gmail.com',
    password: 'password123'
  },
  {
    username: 'roo83',
    email: 'roo83@china.com.cn',
    password: 'password123'
  },
  {
    username: 'kenny',
    email: 'loggins@google.com',
    password: 'password123'
  },
  {
    username: 'jenny',
    email: 'jenny@wisconsin.gov',
    password: 'password123'
  }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;
