const fs = require('fs');

const getConfiguration = () => {
  if (!fs.existsSync(`${__dirname}/config.js`)) { 
    throw new Error(`the config file ${__dirname}/config.js was not found`);
  }
  const config = require(`./config`);
  return config;
};


module.exports.config = getConfiguration();