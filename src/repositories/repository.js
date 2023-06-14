import mongoose from "mongoose";

export class Repository {
    constructor(model) {
        this.model = model;
        // this.getAll = this.getAll.bind(this);
        // this.getById = this.getAll.bind(this);
        // this.insert = this.insert.bind(this);
        // this.update = this.update.bind(this);
        // this.delete = this.delete.bind(this);
    }

    async getAll() {
        let items = await this.model.find({});
        return items;
    }

    async getById(id) {
        let item = await this.model.findById(id)
        return item;
    }

    async insert(data) {
        let result = await this.model.create(data);
        return result;

    }
    async update(data) {
        let result = await this.model.replaceOne(data);
        return result;
    }
    async delete(id) {
        let result = await this.model.findByIdAndDelete(id);
        return result;

    }
}
