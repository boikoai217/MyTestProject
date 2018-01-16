var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Start Site by Artyom Boyko',  picture: 'images/homeDota.jpg' });
});

/* Skywrath Mage. */
router.get('/mage', function(req, res, next) {
    res.render('hero', { title: 'Skywrath Mage',
                        picture: 'images/Mage.jpg',
                        about: 'Выходец из потомства Скайрасов при дворе Тернового Гнезда – Драгонус – с юных лет сражался на полях битвы вместе с другими героями.'});
});
/* Spirit Breaker. */
router.get('/braker', function(req, res, next) {
    res.render('hero', { title: 'Spirit Breaker',
        picture: 'images/Braker.jpg',
        about: 'Существует мир, который в тысячи раз больше нашего. Там живут духи, существа, гордые и величественные, наделенные огромным интеллектом.'});
});
/* Elder Titan. */
router.get('/elder', function(req, res, next) {
    res.render('hero', { title: 'Elder Titan',
        picture: 'images/Elder.jpg',
        about: 'Титаны – это существа, которые стоят у истоков происхождения всего, что есть во вселенной. Они появились, когда вселенная только начала зарождаться.'});
});
/* Omniknight. */
router.get('/omnik', function(req, res, next) {
    res.render('hero', { title: 'Omniknight',
        picture: 'images/Omnik.jpg',
        about: 'Орден Всезнающего был посвящён служению этому богу. Рыцари сражались, ходили в крестовые походы, и одним из них был Ревнитель Громобой.'});
});



module.exports = router;
//yulmosk@mail.ru