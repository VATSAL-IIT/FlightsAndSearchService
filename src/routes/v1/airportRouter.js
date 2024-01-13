const express = require('express');
const {create,get,update,destroy,getAll} = require('../../controllers/airport-controller');
const router=express.Router();

router.post('',create);
router.get('/:id',get);
router.delete('/:id',destroy);
router.get('',getAll);

module.exports=router;