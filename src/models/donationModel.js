
const Joi = require('joi');
const mongoose = require('mongoose');

const donationSchema = new mongoose.Schema({
    sum: Number,
    fundraiserId: String,
    donorName: String
});

const DonationModel = mongoose.model("donations", donationSchema);

exports.DonationModel = DonationModel;

exports.validDonation = (bodyData) => {

    let joiSchema = Joi.object({
        sum: Joi.number().min(2).required,
        fundraiserId:Joi.string().required,
        donorName: Joi.string().default("Anonymous")
    })
    return joiSchema.validate(bodyData);
}

