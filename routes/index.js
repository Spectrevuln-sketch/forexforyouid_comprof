var express = require('express');
var router = express.Router();
var IndexControllers = require('../controllers/indexController');


/* GET home page. */
router.get('/', IndexControllers.validate('customer_pengajuan'), IndexControllers.viewIndex);

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


//============================ View Mentoring ===============================
router.get('/mentor_trading/:slug', IndexControllers.viewMentoring);

//============================ Prosess Daftar Mentoring ===============================
router.post('/daftar_mentoring', IndexControllers.validate('customer_pengajuan'), IndexControllers.processDataMentoring)
//============================ Prosess Daftar Mentoring Secondary ===============================
router.post('/daftar_mentoring_secondary', IndexControllers.validate('customer_pengajuan'), IndexControllers.processDataMentoringSecondary)

//============================ Pengajuan Promo ===============================
router.post('/pengajuan_promo', IndexControllers.validate('customer_pengajuan'), IndexControllers.processPenganjuan)

router.get('/sitemap.xml', IndexControllers.sitemap);

module.exports = router;

