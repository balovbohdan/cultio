const config = {};

config.v = '0.0.1';

config.devMode = process.env.MODE === 'dev';
config.prodMode = !config.devMode;

config.port = process.env.PORT || 1010;

module.exports = config;