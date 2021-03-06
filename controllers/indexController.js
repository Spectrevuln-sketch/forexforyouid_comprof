var akunModel = require('../models/akun_detail');

var LeaderModels = require('../models/leader');

var PromoModels = require('../models/pengajuan_promo');
var MentorModels = require('../models/mentor');
var ejs = require('ejs');
var path = require('path');
const { check, validationResult } = require('express-validator');
var nodemailer = require('nodemailer');
const config = require('../config');
const { SitemapStream, streamToPromise } = require('sitemap');
const { createGzip } = require('zlib');
const { Readable } = require('stream');
let sitemap;
var session_store;


exports.viewIndex = async (req, res) => {
  const success = req.flash('success');
  const alert = { messages: success };
  const mentor = await MentorModels.findAll();
  try {
    res.render("index", {
      alert,
      mentor
    });
  } catch (error) {

    console.log(error);

    return error;

  }

}



exports.viewtrading = async (req, res) => {

  var dataCent = await akunModel.findAll({ where: { "akun": "Cent" } });

  var dataClassic = await akunModel.findAll({ where: { "akun": "Classic" } });

  var dataProCent = await akunModel.findAll({ where: { "akun": "Pro Cent" } });

  var dataProSTP = await akunModel.findAll({

    where: { "akun": "Pro STP" }

  });

  try {

    res.render("trading", {

      dataCent,

      dataClassic,

      dataProCent,

      dataProSTP,

      "Akun1": "Cent",

      "Akun2": "Classic",

      "Akun3": "ProCent",

      "Akun4": "ProSTP"

    });

  } catch (error) {

    console.log(error);

    return error;

  }

}



exports.viewcopyTrading = async (req, res) => {

  var DataLeader = await LeaderModels.findAll();

  try {

    res.render('copy_trading', {

      DataLeader

    });

  } catch (error) {

    console.log(error);

    return error;

  }

}



exports.viewAllTrader = async (req, res) => {

  const DataLeader = await LeaderModels.findAll();

  try {

    res.render('all_traders', {

      DataLeader

    });

  } catch (error) {

    console.log(error)

    return error;

  }

}



exports.viewInvesting = async (req, res) => {

  try {

    res.render('investing');

  } catch (error) {

    console.log(error);

    return error;

  }

}





exports.viewAnalisa = async (req, res) => {

  try {

    res.render("analisa");

  } catch (error) {

    console.log(error);

    return error;

  }

}



exports.viewkalender = async (req, res) => {

  try {

    res.render('kalender-ekonomi');

  } catch (error) {

    console.log(error);

    return error;

  }

}



exports.viewTradingCentral = async (req, res) => {

  try {

    res.render('trading-central');

  } catch (error) {

    console.log(error);

    return error;

  }

}



exports.viewPlatform = async (req, res) => {

  try {

    res.render('platform')

  } catch (error) {

    console.log(error);

    return error;

  }

}



exports.viewCent = async (req, res) => {

  var dataCent = await akunModel.findAll({ where: { "akun": "Cent" } });

  try {

    res.render('cent', {

      dataCent,

      "Akun1": "Cent"

    });

  } catch (error) {

    console.log(error);

    return error;

  }

}



exports.viewProcent = async (req, res) => {

  var dataProcent = await akunModel.findAll({

    where: {

      "akun": "Pro Cent"

    }

  });

  try {

    res.render("procent", {

      dataProcent,

      "Akun2": "Pro Cent"

    });

  } catch (error) {

    console.log(error);

    return error;

  }

}



exports.viewClassic = async (req, res) => {

  const dataClassic = await akunModel.findAll({

    where: {

      "akun": "Classic"

    }

  })

  try {

    res.render("classic", {

      dataClassic,

      "Akun3": "Classic"

    });

  } catch (error) {

    console.log(error);

    return error;

  }

}



exports.viewProstp = async (req, res) => {

  const dataProstp = await akunModel.findAll({ where: { "akun": "Pro STP" } })

  try {

    res.render('prostp', {

      "Akun4": "Pro STP",

      dataProstp

    })

  } catch (error) {

    console.log(error);

    return error;

  }

}



exports.viewCompareAkun = async (req, res) => {

  var dataCent = await akunModel.findAll({ where: { "akun": "Cent" } });

  var dataClassic = await akunModel.findAll({ where: { "akun": "Classic" } });

  var dataProCent = await akunModel.findAll({ where: { "akun": "Pro Cent" } });

  var dataProSTP = await akunModel.findAll({

    where: { "akun": "Pro STP" }

  });

  try {

    res.render("trading", {

      dataCent,

      dataClassic,

      dataProCent,

      dataProSTP,

      "Akun1": "Cent",

      "Akun2": "Classic",

      "Akun3": "ProCent",

      "Akun4": "ProSTP"

    });

  } catch (error) {

    console.log(error);

    return error;

  }

}



exports.processPenganjuan = async (req, res) => {
  const formData = {
    nama,
    alamat,
    contact,
    email,
    kota,
  } = req.body
  try {
    const NewPromo = new PromoModels({
      nama,
      alamat,
      contact,
      email,
      kota
    });
    await NewPromo.save(function (err, user) {
      if (err)
        console.log(err);
      else (user);
      return save()
    });
    var transporter = nodemailer.createTransport(config.nodemailer.options);
    ejs.renderFile(path.join(__dirname, '../views/mail.ejs'), { formData }, function (err, data) {
      if (err) {
        console.log(err);
      } else {
        var mailOptions = {
          from: config.nodemailer.options.auth.user,
          to: "eglobal-trade@forexforyouid.com",
          subject: "email dari forexforyouid.com",
          html: data
        };
        transporter.sendMail(mailOptions, function (err, info) {
          if (err) {
            console.log(err);
          } else {
            console.log('Email Sent' + info.response);
          }
        });
        req.flash('success', "Kami akan segera menghubungi anda !");
        return res.redirect('/');
      }
    })

  } catch (err) {
    console.log(err);
  }
}


/* Process Data Mentoring */
exports.processDataMentoring = async (req, res) => {
  const formData = {
    nama,
    alamat,
    contact,
    email,
    kota,
  } = req.body
  try {
    const NewPromo = new PromoModels({
      nama,
      alamat,
      contact,
      email,
      kota
    });
    await NewPromo.save(function (err, user) {
      if (err)
        console.log(err);
      else (user);
      return save()
    });
    var transporter = nodemailer.createTransport(config.nodemailer.options);
    ejs.renderFile(path.join(__dirname, '../views/mail.ejs'), { formData }, function (err, data) {
      if (err) {
        console.log(err);
      } else {
        var mailOptions = {
          from: config.nodemailer.options.auth.user,
          to: "eglobal-trade@forexforyouid.com",
          subject: "email dari forexforyouid.com",
          html: data
        };
        transporter.sendMail(mailOptions, function (err, info) {
          if (err) {
            console.log(err);
          } else {
            console.log('Email Sent' + info.response);
          }
        });
        req.flash('success', "Kami akan segera menghubungi anda !");
        res.redirect('https://www.forex4uid.com/?affid=fvzavce');
      }
    })

  } catch (err) {
    console.log(err);
  }
}
/* End Process Data Mentoring */
/* Process Data Mentoring 2 */
exports.processDataMentoringSecondary = async (req, res) => {
  const formData = {
    nama,
    alamat,
    contact,
    email,
    kota,
  } = req.body
  try {
    const NewPromo = new PromoModels({
      nama,
      alamat,
      contact,
      email,
      kota
    });
    await NewPromo.save(function (err, user) {
      if (err)
        console.log(err);
      else (user);
      save()
    });
    var transporter = nodemailer.createTransport(config.nodemailer.options);
    ejs.renderFile(path.join(__dirname, '../views/mail.ejs'), { formData }, function (err, data) {
      if (err) {
        console.log(err);
      } else {
        var mailOptions = {
          from: config.nodemailer.options.auth.user,
          to: "eglobal-trade@forexforyouid.com",
          subject: "email dari forexforyouid.com",
          html: data
        };
        transporter.sendMail(mailOptions, function (err, info) {
          if (err) {
            console.log(err);
          } else {
            console.log('Email Sent' + info.response);
          }
        });
        req.flash('success', "Kami akan segera menghubungi anda !");
        res.redirect('https://account.forex4you.com/id/user-registration/?affid=q79pl2h');
      }
    })

  } catch (err) {
    console.log(err);
  }
}
/* End Process Data Mentoring 2 */

/* View Mentoring */
exports.viewMentoring = async (req, res) => {
  const slug = req.params.slug
  const getMentor = await MentorModels.findOne({ where: { slug: slug } })
  res.render('mentoring_view', {
    getMentor
  });
}


/* End View Mentoring */


//============================ Genterate sitemap ===============================
exports.sitemap = async (req, res) => {
  res.header('Content-Type', 'application/xml');
  res.header('Content-Encoding', 'gzip');
  if (sitemap) {
    res.send(sitemap);
    return
  }
  try {
    const smStream = new SitemapStream({ hostname: 'https://forexforyouid.com/' })
    const pipeline = smStream.pipe(createGzip());
    // pipe your entries or directly write them.
    smStream.write({ url: '/', changefreq: 'daily', priority: 0.5 })
    smStream.write({ url: '/all-traders', changefreq: 'daily', priority: 0.5 })
    smStream.write({ url: '/analisa', changefreq: 'daily', priority: 0.5 })
    smStream.write({ url: '/cent', changefreq: 'daily', priority: 0.5 })  // changefreq: 'weekly',  priority: 0.5
    smStream.write({ url: '/investing', changefreq: 'daily', priority: 0.5 })
    smStream.write({ url: '/kalender-ekonomi', changefreq: 'daily', priority: 0.5 })
    smStream.write({ url: '/platform', changefreq: 'daily', priority: 0.5 })
    smStream.write({ url: '/trading-central', changefreq: 'daily', priority: 0.5 })
    smStream.write({ url: '/cent_akun', changefreq: 'daily', priority: 0.5 })
    smStream.write({ url: '/procent_akun', changefreq: 'daily', priority: 0.5 })
    smStream.write({ url: '/classic_akun', changefreq: 'daily', priority: 0.5 })
    smStream.write({ url: '/prostp_akun', changefreq: 'daily', priority: 0.5 })
    smStream.write({ url: '/compare-accounts', changefreq: 'daily', priority: 0.5 })
    smStream.write({ url: '/mentor_trading/:slug', changefreq: 'daily', priority: 0.5 })
    /* or use
    Readable.from([{url: '/page-1'}...]).pipe(smStream)
    if you are looking to avoid writing your own loop.
    */

    // cache the response
    streamToPromise(pipeline).then(sm => sitemap = sm)
    // make sure to attach a write stream such as streamToPromise before ending
    smStream.end()
    // stream write the response
    pipeline.pipe(res).on('error', (e) => { throw e })
  } catch (err) {
    console.log(err);
  }
}
//============================ End Genterate sitemap ===============================











//============================ Validation Form Pengajuan Promo ===============================

exports.validate = (method) => {

  switch (method) {

    case 'customer_pengajuan': {

      return [

        check('nama', "Nama harus di isi").exists(),

        check('email', 'Harus Menggunakan Format Email').exists().isEmail(),

        check('alamat').exists(),

        check('contact').exists().isInt().withMessage('Nomor Harus Angka').isLength({ min: 12 }).withMessage('Nomor Telephone Minimal 12 Angka')

      ]

    }

  }

}