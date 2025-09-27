const adminAuth = (req, res, next) => {
  console.log("token check");
  const token = "xyz";
  const isAdminAuthorized = token === "xyz";

  if (!isAdminAuthorized) {
    res.status(401).send("Unauthorzed admin user");
  } else {
    console.log("authorized");
    next();
  }
};
module.exports = {
  adminAuth,
};
