'use strict';
module.exports = function(app) {
    var newsList = require('../controllers/NewsController');

    app.route('/news')
        .get(newsList.get_newsList)
        .post(newsList.create_news);


    app.route('/news/:id')
        .get(newsList.get_newsById)
        .put(newsList.update_newsById)
        .delete(newsList.delete_newsById);
};
