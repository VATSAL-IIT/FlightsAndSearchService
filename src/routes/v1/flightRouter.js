const express = require('express');
const {create,get,getAll,update}= require('../../controllers/flight-controller');
const {FlightMiddleware}=require('../../middlewares/index')
const router=express.Router();

router.post('',FlightMiddleware.validateCreateFlight,create);
router.get('/:id',get);
router.get('',getAll);
router.patch('/:id',update);
module.exports=router;