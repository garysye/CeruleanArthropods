var donationController = require('./donationController');

module.exports = function (router) {

  //Routes requests to specific controller methods
  router.route('/')
     .post(donationController.createDonation)
     .get(donationController.getDonations)
}
