const myModule = require("../models/fundRaiserModel");
const validFundRaiser = myModule.validFundRaiser;
const FundRaiserModel = myModule.FundRaiserModel;
const modules = require("../models/donationModel")
const DonationsRepo = require('../repositories/donationRepo');
const donRepo = new DonationsRepo(modules.DonationModel);
const FundRaiserRepo = require("../repositories/fundRaiserRepo");
const Service = require("./service");

const fundRaiserRepo = new FundRaiserRepo(FundRaiserModel);

class FundRaiserService extends Service {
    constructor(repo, valid_model) {
        super(repo, valid_model);
    }

    async getAll() {
        const fundRaisers = await this.repo.getAll();
        let fundRaisersWithDonations = [];
        const temp = async () => {
            for (const f of fundRaisers){
                const items = await donRepo.getById(f._id);
                var r = f.toObject();
                r.donations = items;
                fundRaisersWithDonations.push(r);
            };
            return fundRaisersWithDonations;
        }
        return await temp();
    }

    async getById(id){
        let fund = await this.repo.getById(id)
        const items = await donRepo.getById(id);
        var r = fund.toObject();
        r.donations = items;
        return r;
    }
}

module.exports = new FundRaiserService(fundRaiserRepo, validFundRaiser);