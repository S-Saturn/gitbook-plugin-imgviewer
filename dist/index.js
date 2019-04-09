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
      $('img').each(function(index, img) {
        let currentImg = $(img);
        currentImg.viewer({
          navbar: false,
          toolbar: false,
          fullscreen: false,
          loop: false,
          rotatable: false,
        });
        currentImg.data('viewer');
      });

      page.content = $.html();
      return page;
    },
  },
};
