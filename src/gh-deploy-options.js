const ghpages = require('gh-pages');

ghpages.publish('dist', {
  branch: 'gh-pages2',
  repo: 'https://github.com/yegorgangalo/goit-js-hw-13-image-finder.git'
},
    () => {
    console.log('Deploy Complete!')
  });