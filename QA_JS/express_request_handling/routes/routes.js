/* eslint-disable linebreak-style */
/* eslint-disable spaced-comment */
/* eslint-disable indent */
/* eslint-disable linebreak-style */
const router = require('express').Router();
const {
  //getProduct,
  getAllProduct,
  getProductByID,
  setProduct,
  // replace,
  deleteProduct,
} = require('../controller/routeController');

router.post('/createProduct', setProduct);
router.route('/:id').delete(deleteProduct);
router.route('/getAll').get(getAllProduct);
router.route('/get/:id').get(getProductByID);
//router.route('/replace/:index').post(replace);

module.exports = router;
