var can = document.getElementById('canvas');
var ctx = can.getContext('2d');
var img = new Image();
var stamp = new Image();
stamp.src = 'http://cdn1.iconfinder.com/data/icons/nuvola2/48x48/actions/button_ok.png';
var main_width = 580;
var scale = 1;
img.onload = function(){
  if(img.width > main_width) {
    scale = (main_width/img.width);
    ctx.scale(scale,scale);
  }
  can.width = img.width*scale;
  can.height = img.height*scale;
  ctx.drawImage(img, 0, 0, img.width*scale, img.height*scale);
}
img.src = 'http://images.plurk.com/b82bab63d060084b9e08da00ead9bfd5.jpg';

can.onclick = function(e) {

  var x;
  var y;
  if (e.pageX || e.pageY) { 
    x = e.pageX;
    y = e.pageY;
  }
  else { 
    x = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft; 
    y = e.clientY + document.body.scrollTop + document.documentElement.scrollTop; 
  } 
  x -= can.offsetLeft;
  y -= can.offsetTop;
  x = x - (stamp.width*scale/2);
  y = y - (stamp.height*scale/2);
  ctx.drawImage(stamp, x, y, stamp.width*scale, stamp.height*scale);
  //ctx.translate(img.width-1, img.height-1);
  //ctx.rotate(Math.PI);
  //ctx.drawImage(img, 0, 0, img.width, img.height);
};

