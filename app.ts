import express from "express";
import router from "./router";

const app = express();
const PORT = 3000;

app.use(express.static('public'));

app.set('views', 'templates');
app.set('view engine', 'ejs');

app.use(express.json());
app.set('json spaces', 2);

app.use('/', router);

app.listen(PORT, () => {
  console.log(`we live on port ${PORT}`);
});