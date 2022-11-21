const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const hostelRouter = require('./routes/hostel.routes');
const { authMiddleware } = require('./middlewares/auth');
const { userRouter } = require('./routes/user.routes');
const app = express();
app.use(express.json());
app.use(cors());

app.use(authMiddleware)
app.use("/auth", userRouter);
app.use("/", hostelRouter);


const port = process.env.PORT ||  3000;
app.listen(port, async () => {
  try {
    mongoose.connect(`mongodb+srv://faizan133:KTMduke390@cluster0.6bty07j.mongodb.net/?retryWrites=true&w=majority`, () => {
      console.log("DB connection established");
    });
    console.log("server listening on port " + port);
  } catch (error) {
    console.log(error.message);
  }
});
