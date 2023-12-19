const express = require('express');
const CityController = require('../../controllers/city-controller');

const router=express.Router();

router.post('',CityController.create);
router.get('/:id',CityController.get);
router.delete('/:id',CityController.destroy);
router.get('',CityController.getAll);


module.exports=router;