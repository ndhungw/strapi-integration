#!/usr/bin/env node
const fs = require("fs");
const { cwd } = require("process");
const path = require("path");
console.log(`License run !!!`);

const privateKey = fs.readFileSync(path.join(__dirname, "license")).toString();
const publicKey = fs.readFileSync(path.join(__dirname, "key.pub")).toString();
fs.writeFileSync(path.join(cwd(), "license.txt"), privateKey);
fs.writeFileSync(path.join(cwd(), "node_modules/@strapi/core/resources/key.pub"), publicKey);
console.log(`License is active !!!`);
