$('img').each(function(index, img) {
  let currentImg = $(img);
  currentImg.viewer({navbar: false, toolbar: false, fullscreen: false, loop: false, rotatable: false,});
});