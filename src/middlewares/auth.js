const adminAuth = (req, res, next) => {
  const adminToken = "xyz";
  const token = "abc";
  const isAdminAuthValidated = token === adminToken;
  if (!isAdminAuthValidated) {
    res.status(401).send("Unauthoirized User");
  } else {
    next();
  }
};

module.exports = { adminAuth };
