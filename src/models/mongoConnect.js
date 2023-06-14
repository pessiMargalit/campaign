
const mongoose = require('mongoose');

main().catch(err => console.log(err));
async function connect() {
  
    const connString = process.env.DATABASE_URL;
    await mongoose.connect(
        connString);
    console.log('connect!!')
}

module.exports = { connect }