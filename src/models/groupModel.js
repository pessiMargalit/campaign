


const Joi = require('joi');
const mongoose = require('mongoose');

const groupSchema = new mongoose.Schema({
    target: Number,
    collected: Number,
    campaignId: String,
    name: String,
    managerId: String
}, { collection: "groups" });

const GroupModel = mongoose.model("groups", groupSchema);

const validGroupFunc = (_bodyData) => {
    let joiSchema = Joi.object({
        target: Joi.number().min(10000, "Your target must be at least 10000$").required(),
        collected: Joi.number().required(),
        campaignId: Joi.string().required(),
        name: Joi.string().required(),
        managerId: Joi.string().required()
    })
    return joiSchema.validate(_bodyData);
}

module.exports = {
    GroupModel: GroupModel,
    validGroup: validGroupFunc
}