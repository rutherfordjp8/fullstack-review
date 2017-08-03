const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

var connection = mongoose.connection;

let repoSchema = mongoose.Schema({
  id: Number,
  name: {type: String, unique: true},
  full_name: String,
  owner: {
    id: Number,
    login: String,
    avatar_url: String
  },
  description: String,
  html_url: String
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (err, repos) => {
  if (err) {
    console.log('ERROR IN SAVE: ', err);
    // throw err;
  } else {
    // Repo.insertMany(repos);
    // console.log(typeof repos);
    // console.log(JSON.parse(repos));
    repos = JSON.parse(repos);
    for (var i = 0; i < repos.length; i++) {
      var newModel = new Repo({
        id: repos[i].id,
        name: repos[i].name,
        full_name: repos[i].full_name,
        owner: {
          id: repos[i].owner.id,
          login: repos[i].owner.login,
          avatar_url: repos[i].owner.avatar_url,
        },
        description: repos[i].description,
        html_url: repos[i].html_url
      });
      newModel.save(function(err) {
        if(err) {
          console.log('ERROR IN SAVE: ', err);
        } else {
          console.log('USER CREATED!');
        }
      });

      // newModel.id = repos[i].id;
      // newModel.name = repos[i].name;
      // newModel.full_name = repos[i].full_name;
      // newModel.owner.id = repos[i].owner.id;
      // newModel.owner.login = repos[i].owner.login;
      // newModel.owner.avatar_url = repos[i].owner.avatar_url;
      // newModel.description = repos[i].description;
      // connection.collection('repoSchema').insert(newModel);
      // var newModel = new Repo;
      // console.log()
    }
  }
}
  let getRepos = (cb) => {
    // var results = connection.collection('repoSchema').find();
    Repo.find().limit(25).then(function(results) {

      // console.log('INSIDE FIND', results);
      cb(results);
    });
    // console.log(results, '*********** RESULTS FROM GET REPOS');
  }

module.exports.save = save;
module.exports.getRepos = getRepos;
