var akunModel = require('../models/akun_detail');
var LeaderModels = require('../models/leader');

exports.viewIndex = async (req, res) => {
  try {
    res.render("index");
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
