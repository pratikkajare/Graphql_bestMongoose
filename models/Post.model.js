const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    id: {
        type: String,
        required:true  
    },
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        required:true
    }
    });
const information = mongoose.model('informations', PostSchema);

const PostSchema2 = new mongoose.Schema({
    categoryid: {
        type: String,
        required:true
    },
    name: {
        type: String,
        required: true
    }
    });
const category = mongoose.model('categorys', PostSchema2);
 
    exports.db = { information, category };
// module.exports = information;
// module.exports = category;