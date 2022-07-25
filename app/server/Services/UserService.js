const mySQL = require('mysql2');

const { query } = require('../DB/DB.js')

async function GetPatientByID(id) {
    // const data = await query(`select * from project_database.patients where patient_id = ${id}`);
    // return data;
    const data = await query(`SELECT * FROM project_database.patients WHERE patient_id = ${id}`);
    console.log(data)
    return data;
}

async function GetAllApointmentOfCustomer(id) {
    const data = await query(`SELECT * FROM project_database.apointment WHERE patient_id = ${id}`);
    return data;
}

async function UpdatePatient(data){
    await query(`UPDATE project_database.patients SET address = "${data.address}", phone = ${data.phone}, email = "${data.email}" WHERE patient_id = ${data.id}`)
}

async function AddPatient(data){
    await query(``)
}

module.exports = {
    GetPatientByID,
    GetAllApointmentOfCustomer,
    UpdatePatient,
    AddPatient
}