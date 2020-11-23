const supertest = require("supertest");
const app = require("./app");

// jset/mysql2 fix
require("mysql2/node_modules/iconv-lite").encodingExists("foo");

it("returns the businesses and their associated stores", async () => {});
