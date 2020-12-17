var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;
var userModel = require("../models/user");

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  userModel.findById(id, (err, user) => {
    done(err, user);
  });
});

passport.use(
  "local.signup",
  new LocalStrategy({
    usernameField: "email",
    passwordField: "password",
    passReqToCallback: true,
  },
    async (req, email, password, done) => {
      try {
        const user = await userModel.findOne({ email: email });
        if (user) {
          return done(null, false, { message: "Email Already Exists !" });
        }
        if (password != req.body.password2) {
          return done(null, false, { message: "Password Don`t Match !" });
        }
        const addUser = await new userModel();
        newUser.email = email;
        newUser.password = addUser.encryptPassword(password);
        newUser.username = req.body.name;
        await addUser.save();
        return done(null, addUser);
      } catch (error) {
        console.log(error);
        return done(error);

      }
    }
  )
);

passport.use(
  "local.signin", new LocalStrategy({
    usernameField: "email",
    passwordField: "password",
    passReqToCallback: true,
  },
    async (email, password, done) => {
      try {
        const user = await userModel.findOne({ email: email });
        if (!user) {
          return done(null, false, { message: "User Dosen't Exists !" });
        }
        if (!user.validPassword(password)) {
          return done(null, false, { message: "Wrong Password !" })
        }
        return done(null, user);
      } catch (error) {
        console.log(error);
        return done(error);
      }
    }
  )
)