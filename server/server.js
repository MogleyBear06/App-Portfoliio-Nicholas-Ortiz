require("dotenv").config();
const express = require('express');
const routes = require('./routes');

const app = express();
const db = require('./config/connection');

const cors = require('cors');
app.use(cors({
  origin: ['https://mbkconsulting.biz'],
  methods: ["GET", "POST", "DELETE"],
  credentials: true,
}));

app.options('*', cors());
app.use(express.urlencoded({extended : true }));
app.use(express.json());
app.use(routes);


db.on('error', console.error.bind(console, 'MongoDB connection error:'));

try {
  app.listen(process.env.PORT || 3000, () => {
    console.log(`API server running on port 3000`);
  });
} catch (err) {
  console.error(`Error while starting the server: ${err.message}`);
}
