import express from 'express';
import db from './config/dbConnect.js';
import routes from './routes/index.js'

const app = express();
app.use(express.json());

const initializeDB = () => {
  db.on('error', console.log.bind(console, 'Connection Error'));
  db.once('open', () => { console.log('Connection with db was successfully') } );
}

initializeDB();
routes(app);

export default app