const Repository = require("./repository");

module.exports = class FundRaiserRepo extends Repository{
    constructor(model) {
        super(model);
      }

    async getfundsByGroupId(id){
        return await this.model.find({"groupId" : id});
    }
}