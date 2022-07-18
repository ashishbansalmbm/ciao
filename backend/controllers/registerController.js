const httpStatus = require("http-status-codes");
const logger = require("../logging/logger");

module.exports = {
  async createUser(req, res, next) {
    let response;
    try {
      // response = await registerServices.createUser(req.body);
      return res.status(response.httpStatus).send(response);
    } catch (err) {
      logger.error("Error in Create User Controller", { meta: err });
      return res
        .status(httpStatus.INTERNAL_SERVER_ERROR)
        .send({
          httpStatus: httpStatus.INTERNAL_SERVER_ERROR,
          status: "failed",
          errorDetails: err,
        });
    }
  },

  async createRetailer(req, res, next) {
    let response;
    try {
      // response = await registerServices.createRetailer(req.body);
      return res.status(response.httpStatus).send(response);
    } catch (err) {
      logger.error("Error in Create Retailer Controller", { meta: err });
      return res
        .status(httpStatus.INTERNAL_SERVER_ERROR)
        .send({
          httpStatus: httpStatus.INTERNAL_SERVER_ERROR,
          status: "failed",
          errorDetails: err,
        });
    }
  },

  async createRetailerStore(req, res, next) {
    let response;
    try {
      // response = await registerServices.createRetailerStore(req.body);
      return res.status(response.httpStatus).send(response);
    } catch (err) {
      logger.error("Error in Create Retailer Store Controller", { meta: err });
      return res
        .status(httpStatus.INTERNAL_SERVER_ERROR)
        .send({
          httpStatus: httpStatus.INTERNAL_SERVER_ERROR,
          status: "failed",
          errorDetails: err,
        });
    }
  },
};
