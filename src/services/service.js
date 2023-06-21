export class Service {

    constructor(repo,valid_model) {
      this.repo = repo;
      this.valid_model = valid_model;
    //   this.getAll = this.getAll.bind(this);
    //   this.insert = this.insert.bind(this);
    //   this.update = this.update.bind(this);
    //   this.delete = this.delete.bind(this);
    }

    async getAll() {
        return await this.repo.getAll();
    }

    async getById(id) {
        return await this.repo.getById(id);
    }

    async insert(data) {
        let valid_body =  this.repo.valid_model(data) ; 
        if(valid_body.error)
            return valid_body.error.details;
        return await this.repo.insert(data);
    }

    async update(data) {
        let valid_body =  this.repo.valid_model(data) ; 
        if(valid_body.error)
            return valid_body.error.details;
        return await this.repo.update(data);
    }

    async delete(id) {
        return await this.repo.delete(id);
    }
   
  }
