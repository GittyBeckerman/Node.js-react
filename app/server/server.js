const express = require("express");
const patientsRouter = require('./routers/patientsRouter');
const doctorsRouter = require('./routers/doctorsRouter');
const userRouter = require('./routers/patientsRouter');

const PORT = process.env.PORT || 8000;

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true, }));

app.use('/patients', patientsRouter);
app.use('/doctors', doctorsRouter);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
