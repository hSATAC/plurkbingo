var can = document.getElementById('canvas');
var ctx = can.getContext('2d');
var img = new Image();
img.onload = function(){
  can.width = img.width;
  can.height = img.height;
  ctx.drawImage(img, 0, 0, img.width, img.height);
}
img.src = 'http://images.plurk.com/7cbfd054f79ecb8614f9734a2281f41d.jpg';

can.onclick = function() {
  ctx.translate(img.width-1, img.height-1);
  ctx.rotate(Math.PI);
  ctx.drawImage(img, 0, 0, img.width, img.height);
};

