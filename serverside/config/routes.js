const router = require('../routes/');

module.exports = (app) => {

    app.use('/user', router.user);

    app.use('/packages', router.packages);

    app.use('*', (req, res, next) => res.send('<h1> Something went wrong. Try again. :thumbsup: </h1>'));
};