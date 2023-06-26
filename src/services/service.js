
module.exports = class Service {

    constructor(repo, valid_model) {
        this.repo = repo;
        this.valid_model = valid_model;
    }

    async getAll() {
        return await this.repo.getAll();
    }

    async getById(id) {
        return this.repo.getById(id)
    }

    async insert(data) {
        const validBody = this.valid_model(data);
        if (validBody.error) {
            return validBody;
        } else {
            return await this.repo.insert(data);
        }
    }

    async update(id, data) {
        let validBody = this.valid_model(data);
        if (validBody.error) {
            return validBody;
        } else {
            return await this.repo.update(id,data);
        }
    }

    async delete(id) {
        return await this.repo.delete(id);
    }

}