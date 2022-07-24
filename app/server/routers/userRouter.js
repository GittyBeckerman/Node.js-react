const express = require('express');
const { getUsers, getUserByID } = require('../DB/userDB')
const router = express.Router();

router.get('/:id', (req, res) => {
//    res.send(req.params.id);


    const data = getUserByID(req.params.id);
    res.send(data)
})

router.get('/:id', (req, res) => {
    const data = getUserByID(req.params.id);
    if (data == null) {
        res.status(500).send("error ")

    }
    res.status(200).send(data)
})


router.get('/', (req, res) => {

    res.send("all user")
})


router.get('/search', (req, res) => {
    const name = req.query.name;
    const id = req.query.id;
    console.log(id)
    console.log(name)
    //  const data = getUserByID(req.query);
    res.send(data)
})



router.post('/', (req, res, next) => {
    const data = req.body;
    console.log(data);
    res.send('Hello World! from post ')
})

module.exports = router;