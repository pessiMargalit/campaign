import { Service } from "./service";
import { DonationRepo } from "../repositories/donationRepo";
import { DonationModel, validDonation } from "../models/donationModel";

const donationRepo = new DonationRepo(DonationModel)

class DonationService extends Service {
    constructor(repo,valid_model) {
      super(repo,valid_model);
    }
  };


export default new DonationService(donationRepo,validDonation);



