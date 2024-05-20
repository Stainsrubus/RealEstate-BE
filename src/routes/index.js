import express from 'express'
import houseDatacontroller from '../controllers/houseData.js'
const router = express.Router()

router.get('/',(req,res)=>{
    res.status(200).send(`
    <h1 style="text-align:center">Welcome to Backend of Blog App</h1>`)
})

router.post('/createHouse', houseDatacontroller.createHouse);
router.get('/houses', houseDatacontroller.getAllHouses);
router.get('/houses/:id', houseDatacontroller.getHouseById);
router.get('/lasthouses', houseDatacontroller.getLastFourHouses);
router.get('/findByLocation', houseDatacontroller.findByLocation);

export default router