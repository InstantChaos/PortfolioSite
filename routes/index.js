let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) =>{
  let currentDate = new Date();
  currentDate = currentDate.toLocaleTimeString();
  res.render('index', { title: 'Express' , date: currentDate});
});

/* GET about page. */
router.get('/about', (req, res, next) =>{
  res.render('index', { title: 'About' });
});

module.exports = router;
