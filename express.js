// require express
const express = require('express');

// require the routes
const htmlRoutes = require('./routes/htmlRoutes');
const apiRoutes = require('./routes/apiRoutes');

// set up the port variable
const PORT = process.env.PORT || 3001;

// instantiate server
const app = express();

// parse incoming string or array data
app.use(express.urlencoded({extended: true}));
// parse incoming json data
app.use(express.json());
// make the files in public static resources
app.use(express.static('public'));
// set up the routes
app.use('/', htmlRoutes);
app.use('/api', apiRoutes)

// set up server to listen on the specified port
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
})