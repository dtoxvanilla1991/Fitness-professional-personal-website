const env = process.env.NODE_ENV || 'development';

const config = {
    development: {
        port: process.env.PORT || 4500,
        dbURL: 'mongodb+srv://dtoxvanilla:12345@coellocluster.sskgn.mongodb.net/CoelloCut',
        authCookieName: 'x-auth-token'
    },
    production: {}
};

module.exports = config[env];