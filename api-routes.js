// Initialize express router
let router = require('express').Router();

// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Welcome!',
    });
});

var productController = require('./api/controllers/productController');
router.route('/products')
    .get(productController.index)
    .post(productController.new);

router.route('/products/:product_id')
    .get(productController.view)
    .patch(productController.update)
    .delete(productController.delete)
    .put(productController.update);

var orderController = require('./api/controllers/orderController');
router.route('/orders')
    .get(orderController.index)
    .post(orderController.new);

router.route('/orders/:order_id')
    .get(orderController.view)
    .patch(orderController.update)
    .delete(orderController.delete)
    .put(orderController.update);

var userController = require('./api/controllers/userController');
router.route('/users')
    .get(userController.index)
    .post(userController.new);

router.route('/users/:user_id')
    .get(userController.view)
    .patch(userController.update)
    .delete(userController.delete)
    .put(userController.update);

module.exports = router;