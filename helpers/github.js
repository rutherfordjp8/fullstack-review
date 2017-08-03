const request = require('request');
const config = require('../config.js');
const save = require('../database/index.js');
let getReposByUsername = (username) => {
  // TODO - Use the request module to request repos for a specific
  // user from the github API

  // The options object has been provided to help you out,
  // but you'll have to fill in the URL
  let options = {
    url: 'https://api.github.com/users/' + username + '/repos',
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };

  request(options, (err, res) => {
    // console.log(res.body);
    // var body = [];
    // res.on('body', (chunks) => {
    //   body.push(chunks);
    // });
    // res.on('end', () => {
    // 
    // })
    save.save(err, res.body);
  });


}

module.exports.getReposByUsername = getReposByUsername;
