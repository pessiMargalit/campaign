const Joi = require('joi');

const mongoose = require('mongoose');

const campaignSchema = new mongoose.Schema({
    target : Number,
    description: String,
    managerId: String
});

const CampaignModel = mongoose.model("groups", campaignSchema);

exports.CampaignModel = CampaignModel;

exports.validCampaign = (_bodyData) => {
    let joiSchema = Joi.object({
        target: Joi.number().min(50000,"The campaign's target must be at least 50000$").required("Targt is required"),
        managerId:Joi.string().required,
        description: Joi.string().required
    })
    return joiSchema.validate(_bodyData);
}