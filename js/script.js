var can = document.getElementById('canvas');
var ctx = can.getContext('2d');
var img = new Image();
var stamp = new Image();
stamp.src = 'images/button_ok.png';
var main_width = 580;
var scale = 1;
var restorePoints = [];

$.getImageData({
  url: "http://images.plurk.com/e75b675ce666abbbc4d8168e6d70822a.jpg",
  success: function(img){
    if(img.width > main_width) {
      scale = (main_width/img.width);
      ctx.scale(scale,scale);
    }
    can.width = img.width*scale;
    can.height = img.height*scale;
    ctx.drawImage(img, 0, 0, img.width*scale, img.height*scale);
  },
  error: function(xhr, text_status){
         }
});

can.onclick = function(e) {
  saveRestorePoint();
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
  x = x - (stamp.width/2);
  y = y - (stamp.height/2);
  ctx.drawImage(stamp, x, y, stamp.width, stamp.height);
};
$("#restore").click(function(e){
  undoDrawOnCanvas();
});
$("#save").click(function(e){
  var oImg = Canvas2Image.saveAsPNG(can, true);
  oImg.id = "canvasimage";
  oImg.style.border = can.style.border;
  can.parentNode.replaceChild(oImg, can);
});
function saveRestorePoint() {
  restorePoints.push(can.toDataURL("image/png"));
}

function undoDrawOnCanvas() {
  if (restorePoints.length > 0) {
    var oImg = new Image();
    oImg.onload = function() {
      ctx.drawImage(oImg, 0, 0);
    }
    oImg.src = restorePoints.pop();
  }
}
