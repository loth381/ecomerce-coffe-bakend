'use strict';

module.exports = {
  async healthCheck(ctx) {
    ctx.send({ message: 'Service is healthy' });
  },
};
