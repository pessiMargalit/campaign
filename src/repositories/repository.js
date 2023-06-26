const mongoose = require("mongoose");
const { connect } = require("../models/mongoConnect");

module.exports = class Repository {
    constructor(model) {
        connect();
        this.model = model;
    }

    async getAll() {
        let items = await this.model.find({});
        return items;
    }

    async getById(id) {
        let item = await this.model.findById(id);
        return item;
    }

    async insert(data) {
        let result = await this.model.create(data);
        return result;
    }

    async update(id, data) {
        let result = await this.model.findByIdAndUpdate(id, data, { new: true });
        return result;
    }

    async delete(id) {
        let result = await this.model.findByIdAndDelete(id);
        return result;
    }

    async updateCollectedField(sum, id) {
        let current = await this.model.findById(id);
        if (current != undefined) {
            current.collected += sum;
            return await this.model.findByIdAndUpdate(id, current, { new: true });
        } else {
            return new Error("server error");
        }
    }
}

