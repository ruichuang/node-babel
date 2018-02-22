import express from 'express';
import { split, Syntax } from 'sentence-splitter';

const app = express();
const sentences = split(`there it is I found it Hello World my name is Jonas`);


app.get('/', function(req, res) {
  res.send('Hello World!');
});


app.listen(3000, function() {
  console.log('Example app listening on port 3000!');
  console.log(JSON.stringify(sentences, null, 4));
});
