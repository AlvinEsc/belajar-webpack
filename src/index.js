// const run = require('./app/app');
// const AlertService = require('./app/alert.service');
// const CalculatorService = require('./app/calculator.service');
// const JokesService = require('./app/jokes.service');

// require('./style.css');
require('./vendor');
import { css } from './style.scss';
import _ from 'lodash';
import { run } from './app/app.js';
import { AlertService } from './app/alert.service.js';
import { CalculatorService } from './app/calculator.service.js';
import { JokesService } from './app/jokes.service.js';

const alertService = new AlertService();
const calculatorService = new CalculatorService();
const jokesService = new JokesService();

run(alertService, calculatorService, jokesService);

console.log(_.toUpper('Hello from index.js'));