const express = require("express");
const patientsRouter = require('./routers/patientsRouter');
const doctorsRouter = require('./routers/doctorsRouter');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true, }));

app.use('/patients', patientsRouter);
app.use('/doctors', doctorsRouter);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
