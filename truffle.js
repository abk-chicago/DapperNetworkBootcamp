require('babel-register');
require('babel-polyfill');

module.exports = {
    networks: {
        development: {
            host: "localhost",
            port: 9545,
            network_id: "5777"
        }
    },

    solc: {
        optimizer: {
            enabled: true,
            runs: 200
        }
    }};
