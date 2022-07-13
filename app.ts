import express from "express";
const app = express();
app.use(express.static('public'));
app.use(express.json());
app.set('json spaces', 2);


const PORT = 3000;

app.set('views', 'templates');
app.set('view engine', 'ejs');

app.get('/', (_req, res) => {
  res.render('home-guest');
});

app.listen(PORT, () => {
  console.log(`we live on port ${PORT}`);
});