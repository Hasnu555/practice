const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const authRoutes = require('./routes/authRoutes');
const recipeRoutes = require('./routes/recipeRoutes'); 
const { checkUser } = require('./middleware/middleware');



const app = express();

// Middleware
app.use(express.static('public'));
app.use(express.json());
app.use(cookieParser());

// View engine
app.set('view engine', 'ejs');

// Database connection
const dbURI = 'mongodb+srv://hasanjawaid:091200@hasan.mg8eu13.mongodb.net/practice?retryWrites=true';

app.use(cors());
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => {
    app.listen(5000, () => {
      console.log('Server is listening on port 5000');
    });
  })
  .catch((err) => console.log(err));

// Routes
app.get('*', checkUser);

// Mount routes
app.use(authRoutes);
app.use(recipeRoutes); 