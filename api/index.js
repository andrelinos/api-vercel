import express, { Router } from 'express'

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());

const route = Router();

route.get('/', (req, res) => {
  res.send('Hello World!');
})


app.listen(3000, () => {
  console.log(`Server listening on port ${PORT}`);
})