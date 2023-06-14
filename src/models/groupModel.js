
const Joi = require('joi');

const mongoose = require('mongoose');

const groupSchema = new mongoose.Schema({
    target : Number,
    name: String,
    managerId: String
});

const GroupModel = mongoose.model("groups", groupSchema);

exports.GroupModel = GroupModel;

exports.validGroup = (_bodyData) => {
    let joiSchema = Joi.object({
        target: Joi.number().min(10000,"The target must be at least $10000").required("Targt is required"),
        managerId:Joi.string().required,
        name: Joi.string().required
    })
    return joiSchema.validate(_bodyData);
}