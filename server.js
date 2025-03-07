// Browser: Mozilla Firefox Developer Edition
// Operating System: Windows 10
// Browser Version: 87.0b5
// Also tested in Google Chrome version 88.0.4324.190

// Use npm install to install the various packages
// cd into client directory and use the command npm start to see the front end React application. npm install will be required in this directory also

// I designed the database using 3 models - Clients, Physios and Sessions.
// Clients contains all the required information for a client.
// Physio contains all the required information for a physio.
// Sessions holds the required information for each session along with a reference to the physio and client associated with the session
// I was able to use the Mongoose populate method when querying the session to fill the information for each physio and client into the response

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

// imports of modals from models folder
const Client = require('./models/Clients');
const Physio = require('./models/Physios');
const Session = require('./models/Sessions');

// imports of routes from routes folder
const clients = require('./routes/clients');
const physios = require('./routes/physios');
const sessions = require('./routes/sessions');

// Middleware
app.use(express.json());
app.use(cors());
app.use(express.static('public'));

// Define Routes
app.use('/clients', clients);
app.use('/physios', physios);
app.use('/sessions', sessions);

// connect to database
mongoose.connect(
  'mongodb+srv://mohamed2:Maynooth@cluster0.pvd01.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log('connected to mongo db');
  }
);

app.listen(4002, () => {
  console.log('Connected on port 4002');
});
