// Import order model
Order = require('../models/orderModel');

// Handle index actions
exports.index = function (req, res) {
    Order.get(function (err, orders) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Order retrieved successfully",
            data: orders
        });
    });
};

// Handle create order actions
exports.new = function (req, res) {

    var order = new Order();
    order.name = req.body.name;
    order.stock = req.body.stock;

    // save the order and check for errors
    order.save(function (err) {
        if (err)
            res.json(err);

        res.json({
            message: 'New order created!',
            data: order
        });
    });
};

// Handle view order info
exports.view = function (req, res) {
    Order.findById(req.params.order_id, function (err, order) {
        if (err)
            res.send(err);
        res.json({
            message: 'order details loading..',
            data: order
        });
    });
};

// Handle update order info
exports.update = function (req, res) {
    process.stdout.write("UPDATE");
    Order.findById(req.params.order_id, function (err, order) {
        if (err)
            res.send(err);

        order.name = req.body.name;
        order.stock = req.body.stock;

        // save the order and check for errors
        order.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'order Info updated',
                data: order
            });
        });
    });
};

// Handle delete order
exports.delete = function (req, res) {
    order.remove({
        _id: req.params.order_id
    }, function (err, order) {
        if (err)
            res.send(err);

        res.json({
            status: "success",
            message: 'order deleted'
        });
    });
};
