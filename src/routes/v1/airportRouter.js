const express = require('express');
const AirportController = require('../../controllers/airport-controller');

const router=express.Router();

router.post('/',AirportController.create);
router.get('/:id',AirportController.get);
router.delete('/:id',AirportController.destroy);
router.get('',AirportController.getAll);

module.exports=router;