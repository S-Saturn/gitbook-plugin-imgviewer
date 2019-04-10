$(function() {
  // $('img').each(function(index, img) {
  //   let currentImg = $(img);
  //   currentImg.viewer({
  //     navbar: false,
  //     toolbar: false,
  //     fullscreen: false,
  //     loop: false,
  //     rotatable: false,
  //   });
  // });
  $('.book-body').change(function() {
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
  });
});