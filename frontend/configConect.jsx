import { env, loadEnvFile } from "node:process";
loadEnvFile("../.env.local");

const SERVER_PORT = process.env.REACT_APP_CONFIG_SERVER_PORT || 4000

export { SERVER_PORT };