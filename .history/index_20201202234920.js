const express = require('express');
const bodyParser = require('body-parser');
const JsonDB = require('node-json-db').JsonDB;
const Config = require('node-json-db/dist/lib/JsonDBConfig').Config;
const uuid = require('uuid');
const speakeasy = require('speakeasy');

const app = express();

/**
 * Creates a node-json-db database config
 * @param {string} name - name of the JSON storage file
 * @param {boolean} Tells the to save on each push otherwise the save() mthod has to be called.
 * @param {boolean} Instructs JsonDB to save the database in human readable format
 * @param {string} separator - the separator to use when accessing database values
 */

const dbConfig = new Config("myDataBase",true,false,"/");

/**
 * Creates a Node-json-db JSON storage file
 * @param {instance} dbConfig - Node-json-db configuration
 */



const db = new JsonDB(dbConfig);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))

// Sanity Check 

app.get("/api",(req,res)=>{res.json({message:"Welcome to the two fact authentication example"})})


// Generating the secret key

app.post ("/api/register",(req,res)=>{
    const id = uuid.v4();
    try{
        const path = `/user/`
    }
})


const port = 8000;

app.listen(port,()=>{console.log(`App listening on PORT ${port}`)});
