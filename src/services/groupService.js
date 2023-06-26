const { FundRaiserModel } = require("../models/fundRaiserModel");
const myModule = require("../models/groupModel");
const FundRaiserRepo = require("../repositories/fundRaiserRepo");
const validgroup = myModule.validGroup;
const GroupModel = myModule.GroupModel;

const GroupRepo = require("../repositories/groupRepo");
const Service = require("./service");
const groupRepo = new GroupRepo(GroupModel);

const fundsRepo = new FundRaiserRepo(FundRaiserModel);

class GroupService extends Service {
    constructor(repo, valid_model) {
        super(repo, valid_model);
    }

    async getAll() {
        const groups = await this.repo.getAll();
        let groupsWithfundRaisers = [];
        const temp = async () => {
            for (const g of groups){
                const items = await fundsRepo.getfundsByGroupId(g._id);
                var r = g.toObject();
                r.fundraisers = items;
                groupsWithfundRaisers.push(r);
            };
            return groupsWithfundRaisers;
        }
        return await temp();
    }

    async getById(id){
        let group = await this.repo.getById(id)
        const items = await fundsRepo.getfundsByGroupId(id);
        var g = group.toObject();
        g.fundraisers = items;
        return g;
    }
}

module.exports = new GroupService(groupRepo, validgroup);