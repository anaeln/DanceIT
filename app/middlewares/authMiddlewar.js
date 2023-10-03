module.exports = function (req, res, next) {
  const { session } = req;

  if (session.userKey) return next();
  else res.redirect('/login');
};
