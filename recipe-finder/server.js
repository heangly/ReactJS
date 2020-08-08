const express = require('express');
const axios = require('axios');
const app = express();
const pg = require('pg');

const PORT = 5000;
const HOST = 'localhost';


app.use(express.json());

// api ket setyp
const apiFile = require("./env.json");
const apiId = apiFile["api_id"];
const apiKey = apiFile["api_key"];
const baseUrl = apiFile["base_api_url"];

// sample:
// "https://api.edamam.com/search?q=chicken&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}
// usage:
// `${baseUrl}app_id=${apiId}&app_key=${apiKey}&q=${searchTerm}`

const fetchingRecipeData = async (foodName) =>{
  const url = `${baseUrl}app_id=${apiId}&app_key=${apiKey}&q=${foodName}&to=12`;
  const response = await axios.get(url);
  return response.data;
}

app.get('/server/search', (req, res) => {
  const {foodName} = req.query;
  console.log(`Receiving a server GET request for Searching ${foodName}`);
  fetchingRecipeData(foodName)
    .then(data => res.send(data.hits))
    .catch(err => console.log(err));
})

app.listen(PORT, HOST, () => console.log(`Lisitening to https://${HOST}:${PORT}`));

// ==============>  DATABASE <=================
// CREATE TABLE recipes(id SERIAL PRIMARY KEY, name VARCHAR(100), numlike INT, image Text, UNIQUE(name));
// database setup
const env = require("./env.json").database;
const Pool = pg.Pool;
const pool = new Pool(env);

pool.connect().then(() => console.log((`Connected to database ${env.database}`)));


app.post('/server/top5', async (req, res) => {
  console.log('Receiving a request fro top5 route')
  const {name, numlike, image} = req.body;

  if (!name || !numlike || !image){
    res.status(400).send();
  }else{
    const insertCommand = 'INSERT INTO recipes(name, numlike, image) VALUES($1, $2, $3) RETURNING *';
    const values = [name, numlike, image];
    try {
      const response = await pool.query(insertCommand, values)
      console.log("Inserted to DB:\n", response.rows);
      res.status(200);
      res.send();
    }catch(err){
      pool.query(`UPDATE recipes SET numlike = ${numlike}  WHERE name = '${name}'`) 
        .then(res.status(200).send())
        .catch(res.status(400).send());
    }   
  }
});

app.get('/server/getnumlikes', (req, res) => {
  const {foodName} = req.query;
  console.log(`Receiving a server GET request for getRecipes ${foodName}`);
  let command = `SELECT numlike FROM recipes WHERE name='${foodName}'`;
  pool.query(command)
      .then(response => res.status(200).json({rows: response.rows}))
      .catch(err => console.log(`cannot extract data from DB:\n${err}`));

})


app.get('/server/gettop5', (req, res) => {
  console.log(`Receiving a server GET request for get TOP 5`);
  let command = `SELECT * FROM recipes`;
  pool.query(command)
      .then(response => {
        // sort the top object based on numlike will be at the top
        function compare(a, b) {
          if (a.numlike < b.numlike ){
            return 1;
          }
          if ( a.numlike > b.numlike ){
            return -1;
          }
          return 0;
        }
        response.rows.sort(compare);

        let count = 1;
        let data = [];
        
        for (let i = 0; i < response.rows.length; i++){
          data.push(response.rows[i]);
          if(count === 5){
            break;
          }
          count ++ 
        }
      
        res.status(200).json({top5: data});
      })
      .catch(err => console.log(`cannot extract data from DB:\n${err}`));

})
