const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const csurf = require('csurf');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const environment = require('./config');
const routes = require('./routes');

const isProduction = environment === 'production';

const app = express();
app.use(express.json());

app.use(morgan('dev'));
app.use(cookieParser());

if (!isProduction) {
    app.use(cors());
}

app.use(helmet({
    contentSecurityPolicy: false,
}));

app.use(csurf({
    cookie: {
        secure: isProduction,
        sameSite: isProduction && "Lax",
        httpOnly: true,
    },
}));

// ROUTES
app.use(routes)


module.exports = app;