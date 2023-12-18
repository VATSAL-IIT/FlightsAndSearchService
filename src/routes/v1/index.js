const express = require('express');
const CityController = require('../../controllers/city-controller');

const router=express.Router();

router.post('/city',CityController.create);
router.get('/city/:id',CityController.get);
router.delete('/city/:id',CityController.destroy);

module.exports=router;