var cheerio = require('cheerio');

var getAssets = function() {
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
    page: function(_page) {
      let $ = cheerio.load(_page.content);
      $('img').each(function(index, img) {
        let currentImg = $(img);
        currentImg.viewer({
          navbar: false,
          toolbar: false,
          fullscreen: false,
          loop: false,
          rotatable: false,
        });
      });

      _page.content = $.html();
      return _page;
    },
  },
};
