import express from 'express';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import { config } from 'dotenv';
const app = express();
const port = 3000;
config();

app.set('view engine', 'ejs');

const __dirname = dirname(fileURLToPath(import.meta.url));
app.use('/assets', express.static(path.join(__dirname, 'assets')));
app.set('views', path.join(__dirname, 'public'));

app.get('/', (req, res) => {
  res.render('index', { title: 'Home' });
});


app.listen(port, () => {
    console.log(`running on port http://localhost:${port}`)
});