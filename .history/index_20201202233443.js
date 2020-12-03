const express = require('express');
const bodyParser = require('body-parser');
const JsonDB = require('node-json-db').JsonDB;
const Config = require('node-json-db/dist/lib/JsonDBConfig');
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

const db = new JsonDB(dbConfig);

app.use(bodyParser.json();
app.use(bodyParser.urlencoded({extended:true})))