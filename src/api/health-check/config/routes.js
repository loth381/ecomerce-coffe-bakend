module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/health',
      handler: 'health-check.healthCheck',
      config: {
        auth: false,
      },
    },
  ],
};
