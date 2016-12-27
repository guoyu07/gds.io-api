'use strict';
const ghpages = require('gh-pages');
const path = require('path');
const tasks = {};
tasks.publish = () => {
  ghpages.publish(path.join(__dirname, '_docs'), {
    branch: 'gh-pages',
    message: ':ok_hand: auto generated commit',
    user: {
      name: 'CI Bot',
      email: 'ci.bot@qweeto.com'
    },
    push: true,
    repo: `https://${process.env.GH_TOKEN}@github.com/Qweeto/gds.io-api.git`,
    silent: true
  }, error => {
    if (error) {
      console.error(error);
      process.exit(1);
    }
  });
};
tasks.publish();
