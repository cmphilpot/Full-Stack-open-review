const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const PORT = 5000;
const MAX_NOTES = 100;
const PATH_PREFIX = '/exampleapp';

const app = express();

// console.log('RUNNING')
// app.use(bodyParser())
