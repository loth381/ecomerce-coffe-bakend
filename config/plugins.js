module.exports = {
  "strapi-neon-tech-db-branches": {
    enabled: true,
    config: {
      neonApiKey: "r2www8lla0nhicd0hmcz8q2fc1c8ymwd0l5f8s3bft3esp87q6y1uoxs579zfake", // get it from here: https://console.neon.tech/app/settings/api-keys
      neonProjectName: "ecommerce-coffe", // the neon project under wich your DB runs
      neonRole: "neondb_owner", // create it manually under roles for your project first
      gitBranch: "main" // branch can be pinned via this config option. Will not use branch from git then. Usefull for preview/production deployment
    },
  },
};
