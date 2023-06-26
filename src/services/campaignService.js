const myModule = require("../models/campaignModel");
const validcampaign = myModule.validcampaign;
const CampaignModel = myModule.CampaignModel;

const CampaignRepo = require("../repositories/campaignRepo");
const Service = require("./service");

const campaignRepo = new CampaignRepo(CampaignModel);

class CampaignService extends Service {
    constructor(repo, valid_model) {
        super(repo, valid_model);
    }
}

module.exports = new CampaignService(campaignRepo, validcampaign);