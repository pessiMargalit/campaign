const myModule = require("../models/donationModel");
const validDonation = myModule.validDonation;
const DonationModel = myModule.DonationModel;

const DonationRepo = require("../repositories/donationRepo");
const Service = require("./service");

const donationRepo = new DonationRepo(DonationModel);

const fundRaiserService = require('./fundRaiserService');
const groupService =  require('./groupService');
const campaignService = require('./campaignService');

class DonationService extends Service {
    constructor(repo, valid_model) {
        super(repo, valid_model);
    }

    async insert(data) {
        const validBody = this.valid_model(data);
        if (validBody.error) {
            return validBody;
        } else {
            try {
                let sum = data.sum;
            await fundRaiserService.repo.updateCollectedField(sum, data.fundraiserId);
            let fund = await fundRaiserService.repo.getById(data.fundraiserId);
            let groupId = fund.groupId;
            await groupService.repo.updateCollectedField(sum, groupId);
            let group = await groupService.repo.getById(fund.groupId);
            let camId = group.campaignId;
            await campaignService.repo.updateCollectedField(sum, camId);
            return await this.repo.insert(data);
            } catch (error) {
                return new Error(`${error.massage}`);
            }
        }
    }
}

module.exports = new DonationService(donationRepo, validDonation);