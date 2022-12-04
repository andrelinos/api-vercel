import express, { Router } from 'express'

const app = express();


app.use(express.json());

const route = Router();

route.get('/', (req, res) => {
  return res.send('Hello World!');
})

app.use(route);

app.listen(4000, () => {
  console.log('Server listening on port 4000');
})
