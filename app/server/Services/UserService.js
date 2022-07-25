const mySQL = require('mysql');

const { query } = require('../DB/DB.js')

async function GetAllApointment() {
    const data = await query("SELECT * FROM store.apointment WHERE customer_id = id");
    return data;
}

module.exports = {
    getOrders
}