const express = require('express');
const router = express.Router();
const FundRaiserService = require('../services/fundRaiserService')
const logger = require('../middlewares/logger');
const errorMW = require('../middlewares/errors');

router.get('/', async (req, res) => {
    res.send(await FundRaiserService.getAll())
})

router.get(`/:id`, async (req, res) => {
    res.send(await FundRaiserService.getById(req.params.id))
})

router.use(logger());

router.post('/', async (req, res, next) => {
    let result = await FundRaiserService.insert(req.body);
    if (result.error) {
        next(result.error)
    }
    else {
        res.send(result);
    }
});

router.put(`/:id`, async (req, res, next) => {
    if(req.body.roleId == req.params.id){
        let result = await FundRaiserService.update(req.params.id, req.body.data);
        if (result.error) {
            next(result.error)
        }
        else {
            res.send(result);
        }
    }
    else{
        next(new Error("you dont have role to do that"))
    }
});

router.delete(`/:id`, async (req, res) =>{
    res.send(await FundRaiserService.delete(req.params.id));
});

router.use(errorMW);

module.exports = router;