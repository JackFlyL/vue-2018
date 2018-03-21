const express = require('express');
const app = new express();

app.use(express.static('./dist/'));
console.info(222);

app.listen(3000)
