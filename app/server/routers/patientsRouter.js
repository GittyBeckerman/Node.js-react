const express = require('express');
const { GetPatientByID, GetAllApointmentOfCustomer, UpdatePatient, AddPatient } = require('../Services/UserService')
const router = express.Router();

router.get('/:id',async (req, res) => {
    const data = await GetPatientByID(req.params.id);
    if (data == null) {
        res.status(500).send("error")
    }
    res.status(200).send(data)
})

router.get('/apointment/?id=:id', async (req, res) => {
    const data = await GetAllApointmentOfCustomer(req.params.id)
    if(data == null){
        res.status(500).send("error")
    }
    res.status(200).send(data)
})

router.get('/search', (req, res) => {
    const name = req.query.name;
    const id = req.query.id;
    console.log(id)
    console.log(name)
    //  const data = getUserByID(req.query);
    res.send(data)
})

router.put('/', async (req, res, next) => {
    const data = req.body;
    await UpdatePatient(data);
})

router.post('/', async (req, res) =>{
    const data = req.body;
    await AddPatient(data)
    const new_patient = await GetPatientByID(data.id);
    if(new_patient == null){
        res.status(500).send("error")
    }
    res.status(200).send(new_patient)
})

module.exports = router;