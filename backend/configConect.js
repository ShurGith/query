import { env, loadEnvFile } from "node:process";
loadEnvFile("./.env.local");

const SERVER_PORT = process.env.REACT_APP_CONFIG_SERVER_PORT||4000
const DB_HOST = process.env.REACT_APP_CONFIG_DB_HOST
const DB_PORT = process.env.REACT_APP_CONFIG_DB_PORT || 33006
const DB_NAME = process.env.REACT_APP_CONFIG_DB_NAME 
const DB_USER = process.env.REACT_APP_CONFIG_DB_USER 
const DB_PASSWORD = process.env.REACT_APP_CONFIG_DB_PASSWORD


export { DB_HOST, DB_PORT, DB_NAME, DB_USER, DB_PASSWORD, SERVER_PORT };