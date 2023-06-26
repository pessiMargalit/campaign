
const Joi = require('joi');
const mongoose = require('mongoose');

const fundRaiserSchema = new mongoose.Schema({
    target : Number,
    collected: Number,
    groupId: String,
    name: String
}, {collection: "fundRaisers"});

const FundRaiserModel = mongoose.model("fundRaisers", fundRaiserSchema);

const validFundRaiserFunc =(_bodyData)=>{
    let joiSchema=Joi.object({
    target:Joi.number().min(1000, "Your target must be at least 1000$").required(),
    collected: Joi.number().required(),
    groupId:Joi.string().required(),
    name:Joi.string().required()
    })
    return joiSchema.validate(_bodyData);
    }

    module.exports = {
        FundRaiserModel : FundRaiserModel,
        validFundRaiser : validFundRaiserFunc
    }