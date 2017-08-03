const express = require('express');
const github = require('../helpers/github.js');
const db = require('../database/index.js');

let app = express();

app.use(express.static(__dirname + '/../client/dist'));

app.post('/repos', function (req, res) {
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database


  var data = [];
  req.on('data', function(chunks) {
    data.push(chunks);
    console.log(chunks);
  });
  req.on('end', function() {
    data = Buffer.concat(data).toString();
    console.log('USERNAME: ', data);
    github.getReposByUsername(data);
  });
  // github.getReposByUsername();
});

app.get('/repos', function (req, res) {
  var getResults = function(data) {
    // console.log(data);
    res.send(data);
  }.bind(this);

  db.getRepos(getResults);
  // console.log('Results from Get: ', results);

});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
