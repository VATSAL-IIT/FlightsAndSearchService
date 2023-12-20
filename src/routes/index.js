const express = require('express');
const router = express.Router();

const v1CityRoutes = require('./v1/cityRouter');
const v1AirportRoutes= require('./v1/airportRouter');
const v1FlightRoutes = require('./v1/flightRouter');

router.use('/v1/city',v1CityRoutes);
router.use('/v1/airport',v1AirportRoutes);
router.use('/v1/flight',v1FlightRoutes);

module.exports = router;