const models = require('../models');

module.exports = {
    get: (req, res, next) => {
        console.log("getting data");
        models.Package.find()
            .then((packages) => { 
                console.log(packages);
                return res.send(packages)}).catch(next);
    },

    post: (req, res, next) => {
        const { description } = req.body;
        const { _id } = req.user;

        models.Package.create({ description, author: _id })
            .then((createdPackages) => {
                return Promise.all([
                    models.User.updateOne({ _id }, { $push: { posts: createdPackages } }),
                    models.Package.findOne({ _id: createdPackages._id })
                ]);
            })
            .then(([modifiedObj, packagesObj]) => {
                res.send(packagesObj);
            })
            .catch(next);
    },

    put: (req, res, next) => {
        const id = req.params.id;
        const { description } = req.body;
        models.Package.updateOne({ _id: id }, { description })
            .then((updatedPackages) => res.send(updatedPackages))
            .catch(next)
    },

    delete: (req, res, next) => {
        const id = req.params.id;
        models.Package.deleteOne({ _id: id })
            .then((removedPackages) => res.send(removedPackages))
            .catch(next)
    }
};