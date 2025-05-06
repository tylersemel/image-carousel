import "./styles.css";
import {next, previous} from './carousel.js';


if (process.env.NODE_ENV !== "production") {
  console.log("Looks like we are in development mode!");
}

console.log("I'm working!");


next(500, 0);
next(500, 1);
previous(500, 2);
previous(500, 1);
