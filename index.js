import express from "express";
import { connect } from './config/db.js'
import { userRouter } from "./routes/user.routes.js";
import { notesRouter } from "./routes/notes.routes.js";
import cors from 'cors'
const app = express();
const port = process.env.PORT || 3000;

app.use('/uploads', express.static('uploads'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

connect()

app.use(express.static('public'))
app.use('/',userRouter)
app.use('/notes', notesRouter)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});