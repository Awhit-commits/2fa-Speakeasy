const express = require('express');
const bodyParser = require('body-parser');
const JsonDB = require('node-json-db').JsonDB;
const Config = require('node-json-db/dist/lib/JsonDBConfig');
const uuid = require('uuid');
const speakeasy = require('speakeasy');

const app = express();

const dbConfig = new Config("myDataBase",true,false,"/");

const db = new JsonDB(dbConfig);

app.use(bodyParser.json();
app.use(bodyParser.urlencoded()))