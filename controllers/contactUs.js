const path = require("path");
const rootDir = require("../util/path");

exports.contactUscontroller = (req, res) => {
  res.sendFile(path.join(rootDir, "views", "contactUs.html"));
};

exports.postcontactUs = (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "success.html"));
};
