var express = require('express');
var router = express.Router();
var IndexControllers = require('../controllers/indexController');


/* GET home page. */
router.get('/', IndexControllers.viewIndex);

//============================ Trading View ===============================
router.get('/trading', IndexControllers.viewtrading);
//============================ Copy Trading View ===============================
router.get('/copy-trading', IndexControllers.viewcopyTrading);
//============================ All Traders View ===============================
router.get('/traders_user', IndexControllers.viewAllTrader);
//============================ Analisa View ===============================
router.get('/analisa', IndexControllers.viewAnalisa);
//============================ investing ===============================
router.get('/investing', IndexControllers.viewInvesting);
//=============================================== KalenderEkonomi =========================================
router.get('/kalender-ekonomi', IndexControllers.viewkalender);
//=============================================== trading central view =========================================
router.get('/trading-central', IndexControllers.viewTradingCentral);
//=============================================== platform trading =========================================
router.get('/platform', IndexControllers.viewPlatform);

//============================ akun Cent view page ===============================
router.get('/cent_akun', IndexControllers.viewCent);
//============================ Akun Pro Cent View Page ===============================
router.get('/procent_akun', IndexControllers.viewProcent);
//============================ Akun Classic View Page ===============================
router.get('/classic_akun', IndexControllers.viewClassic);

//============================ Akun ProSTP View Page===============================
router.get('/prostp_akun', IndexControllers.viewProstp);

//============================ compare Akun View  ===============================
router.get('/compare-accounts', IndexControllers.viewCompareAkun);


router.get('/sitemap.xml', function (req, res) {
  res.header('Content-type: application/xml');
  res.send('sitemap.xml');
})

module.exports = router;

