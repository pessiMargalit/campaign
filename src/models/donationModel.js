
const Joi = require('joi');
const mongoose = require('mongoose');

const donationSchema = new mongoose.Schema({
    sum: Number,
    fundraiserId: String,
    donorName: String
}, {collection: "donations"});


const validDonationFunc = (_bodyData)=>{
    let joiSchema=Joi.object({
        sum:Joi.number().min(10).required(),
        fundraiserId:Joi.string().required(),
        donorName:Joi.string().default("anonymous")
        })
        console.log("trying to validate...");
    return joiSchema.validate(_bodyData);
    }

const donationModel = mongoose.model("donations", donationSchema);

module.exports = {
    validDonation: validDonationFunc,
    DonationModel : donationModel
}


