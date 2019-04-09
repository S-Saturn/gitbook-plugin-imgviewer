let cheerio = require('cheerio');

const getAssets = function() {
  return {
    assets: './dist/assets',
    js: [
      'jquery.min.js',
      'viewer.min.js',
      'jquery-viewer.min.js',
    ],
    css: [
      'viewer.min.css',
    ],
  };
};

module.exports = {
  book: getAssets(),
  hooks: {
    page: function(page) {
      let $ = cheerio.load(page.content);
      const $image = $('img');

      $image.viewer({
        navbar: false,
        toolbar: false,
        fullscreen: false,
        loop: false,
        rotatable: false,
      });

      $image.data('viewer');
      page.content = $.html();
      return page;
    },
  },
};
