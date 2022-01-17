const jwt = require("jsonwebtoken");

const Helper = {
  /**
   * Generate Token
   * @param {string} id
   * @returns {string} token
   */

  generateToken(id) {
    const token = jwt.sign({ userId: id }, process.env.JWT_SECRET, {
      expiresIn: JWT_LIFETIME,
    });
    return token;
  },

  /**
   * isValidEmail helper method
   * @param {string} email
   * @returns {Boolean} True or False
   */
  isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  },
};

module.exports = Helper;
