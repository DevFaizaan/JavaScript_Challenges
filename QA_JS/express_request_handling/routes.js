/* eslint-disable linebreak-style */
const router = require('express').Router();
const {
  get,
  getAll,
  getByID,
  set,
  replace,
  deletes,
} = require('./routeController');

router.route('/').get(get).post(set);
router.route('/:id').delete(deletes);
router.route('/getAll').get(getAll);
router.route('/get/:id').get(getByID);
router.route('/replace/:index').post(replace);

module.exports = router;
