
const Joi = require('joi');
const mongoose = require('mongoose');

const campaignSchema = new mongoose.Schema({
    target : Number,
    collected : Number,
    description: String,
    managerId: String,
    date : Date,
}, {collection: "campaigns"});

const CampaignModel = mongoose.model("campaigns", campaignSchema);

const validcampaignFunc = (_bodyData)=>{
    let joiSchema=Joi.object({
    target:Joi.number().min(50000, "Your target must be at least 50000$").required(),
    collected: Joi.number().required(),
    description:Joi.string().required(),
    managerId:Joi.string().required(),
    date: Joi.date().required()
    })
    return joiSchema.validate(_bodyData);
    }

    module.exports = {
        CampaignModel : CampaignModel,
        validcampaign : validcampaignFunc
    }