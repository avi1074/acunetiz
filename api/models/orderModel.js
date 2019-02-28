var mongoose = require('mongoose');

// Setup schema
var orderSchema = mongoose.Schema({
    name: String,
    products: [],
    create_date: {
        type: Date,
        default: Date.now
    }
});

var Order = module.exports = mongoose.model('order', orderSchema);

module.exports.get = function (callback, limit) {
    Order.find(callback).limit(limit);
};
