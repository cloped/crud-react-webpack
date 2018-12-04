console.log('Making deploy!');

var ghpages = require('gh-pages');

ghpages.publish('dist', {
  branch: 'gh-pages',
  repo: 'https://github.com/cloped/crud-react-webpack.git',
  add: true,
  message: 'auto-generated commit deploy',
  push: true,
}, function(err) {
  if(!err){
    console.log('Deploy done!');
  } else {
    console.log(err);
    console.log('Failed deploy.');
  }
});
