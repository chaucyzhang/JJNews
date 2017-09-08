'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var NewsSchema = new Schema({
    title: {
        type: String,
        required: 'Kindly enter the title of news'
    },
    pagecontent:{
        type:String,
    },
    date: {
        type: Date,
        default: Date.now
    },
    author_name: {
        type: String,
        default: 'anonymous'
    },
    thumbnail_pic_s:{
        type: String
    },
    thumbnail_pic_s02:{
        type: String
    },
    thumbnail_pic_s03:{
        type: String
    },
    url:{
        type: String,
        required: 'Kindly enter the url of news'
    },
    type:{
        type:String,
        required: 'Kindly enter the type of news'
    },
    realtype:{
        type:String,
        required: 'Kindly enter the realtype of news'
    }
});

NewsSchema.set('toJSON', {
    transform: function (doc, ret, options) {
        ret.id = ret._id;
        delete ret._id;
    }
});

module.exports = mongoose.model('News', NewsSchema);