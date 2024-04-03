import app from "./app";
import { PORT } from "./config.js";
import './database'

const port  = PORT || 8080; 

app.listen(port);
console.log('Server listening on port', port);
