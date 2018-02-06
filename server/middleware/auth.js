const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  if (req.session.token) {
    const a = jwt.verify(req.session.token, '047220ee-81ee-45ca-8960-41fe8530f556');
    console.log(a);
    next();
  } else {
    res.status(403)
      .json({
        success: false,
        error: 'unauthorized access',
      });
  }
};

