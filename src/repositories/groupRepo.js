const Repository = require("./repository");

module.exports = class GroupRepo extends Repository{
    constructor(model) {
        super(model);
      }
}