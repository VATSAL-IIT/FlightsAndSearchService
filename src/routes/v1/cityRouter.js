const express = require('express');
const {get,update,create,destroy,getAll}= require('../../controllers/city-controller');
const router=express.Router();

router.post('',create);
router.get('/:id',get);
router.delete('/:id',destroy);
router.get('',getAll);
router.put('/:id',update)

module.exports=router;