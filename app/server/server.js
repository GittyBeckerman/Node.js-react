const express = require("express");
const userRouter = require('./routers/userRouter');

const PORT = process.env.PORT || 8000;

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true, }));

app.use('/users', userRouter);
app.get('/', (res,req)=>{console.log('lll')})

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
