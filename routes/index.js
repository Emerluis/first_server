const express = require('express');
const router = express.Router();



const IndexController = require('../controllers/index');

router.get('/', IndexController.index);

router.get('/products', IndexController.getProducts);

router.post('/new-product', IndexController.newProducts);

module.exports = router;