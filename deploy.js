console.log('Making deploy!');

var ghpages = require('gh-pages');

ghpages.publish('dist', {
  branch: 'gh-pages',
  repo: 'https://github.com/cloped/crud-react-webpack.git',
  add: true,
  message: 'auto-generated commit deploy',
  push: true,
}, function(err) {});
