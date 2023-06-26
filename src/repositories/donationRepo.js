const Repository = require("./repository");

module.exports = class DonationRepo extends Repository{
    constructor(model) {
        super(model);
      }

      async getById(id){
        let items = await this.model.find({"fundraiserId" : id});
        return items;
      }

}