console.log('Making deploy!');

var ghpages = require('gh-pages');
var flag = true;

ghpages.publish('dist', {
  branch: 'gh-pages',
  repo: 'git@github.com:cloped/crud-react-webpack.git',
  add: true,
  message: 'auto-generated commit deploy',
  push: true,
}, function(err) {
  console.log('Deploy didnt worked');
  flag = false;
});

if (flag) {
  console.log('Deployed!');
}
