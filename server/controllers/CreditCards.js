const { CreditCards } = require('../models');

module.exports = {
  getCardsByUserId: async (req, res) => {
    const { userId } = req.params;
    try {
      const data = await CreditCards.getCardsByUserId(userId);
      res.send(data);
    } catch (err) {
      res.status(400).send({
        msg: `There was an error finding cards related to userId: ${userId}`,
      });
    }
  },
};