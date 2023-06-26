const express = require('express');
const router = express.Router();
const DonationService = require('../services/donationService')
const logger = require('../middlewares/logger');
const errorMW = require('../middlewares/errors');
const { error } = require('console');

router.get('/', async (req, res) => {
    res.send(await DonationService.getAll())
})
router.get(`/:id`, async (req, res) => {
    res.send(await DonationService.getById(req.params.id))
})

router.use(logger());

router.post('/', async(req, res, next) =>{
    let result = await DonationService.insert(req.body);
    if(result instanceof Error){
        next(result)
    }else if(result.error){
        next(result.error)
    }
    else{
        res.send(result);
    }
})
// router.put(`/:id`, async (req, res, next) => {
//     let result = await DonationService.update(req.params.id, req.body);
//     if(result.error){
//         next(result.error)
//     }
//     else{
//         res.send(result);
//     }
// })

// router.delete(`/:id`, async (req, res) =>{
//     res.send(await DonationService.delete(req.params.id));
// });

router.use(errorMW);

module.exports = router;