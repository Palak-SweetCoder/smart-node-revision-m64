/**
 * -----------------------------
 * -----SETUP SERVER SIDE-------
 * -----------------------------
 * Go to expressjs.com >> getting started >> installing
 * CMD go to projects >> run this command >> mkdir appname
 * Go to app folder run this command >> npm init or npm init -y (to avoid multiple questions)
 * Run this command >> npm install express
 * Create index.js file
 * Server side setup COMPLETED!!!
 * 
 * -----------------------------
 * -----SETUP NODE EXPRESS------
 * -----------------------------
 * Go to expressjs.com >> getting started >> hello world
 * Import or make require the express
 * Declare app
 * Declare the port
 * Set app.get function
 * Set app.listen function
 * Run this command >> node index.js
 * Go to localhost:5000
 * Install nodemon run this command >> npm install -g nodemon
 * Go to package.json >> scripts >> add this two line scripts >> "start": "node index.js", "start-dev" : "nodemon index.js",
 * Run this command to open the port >> nodemon index.js
 * Node express setup COMPLETED!!!
 * 
 * -----------------------------
 * -ACCESS API FROM CLIENT SIDE-
 * -----------------------------
 * Fetch the API to the client side
 * Check console there will be a CORS error!
 * To fix CORS error go to the expressjs.com >> Resources >> Middleware >> Cors
 * Run this command to the server side >> npm install cors
 * Make the cors require or import into the index.js
 * Then call the middleware under the port >> app.use(cors())
 * Access API and show data from server side completed!!!
 * 
 * -----------------------------
 * -----SETUP SERVER SIDE-------
 * -----------------------------
 * 
 * 
 */