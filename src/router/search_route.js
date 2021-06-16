const express = require('express');
const routeSearch = express.Router();
const searchController = require('../Controller/searchController');

routeSearch.use('/', searchController.searchCusController);

module.exports = routeSearch ; 