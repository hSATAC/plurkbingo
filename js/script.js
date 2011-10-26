var can = document.getElementById('canvas');
var ctx = can.getContext('2d');
var img = new Image();
var stamp = new Image();
stamp.src = 'images/button_ok.png';
var main_width = 580;
var scale = 1;
var restorePoints = [];
var domain = 'http://www.hsatac.net/plurkbingo';
$(function() {
  var img_url = QueryString.img;
  if(typeof(img_url) != 'undefined') {
    $("#img_url").val(img_url);
    init();
  }
  $("#img_url").change(function(e){
    init();
  });


  $(can).bind('click', function(e){
    saveRestorePoint();
    var x;
    var y;
    if (e.pageX || e.pageY) { 
      x = e.pageX;
      y = e.pageY;
    } else { 
      x = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft; 
      y = e.clientY + document.body.scrollTop + document.documentElement.scrollTop; 
    } 
    x -= can.offsetLeft;
    y -= can.offsetTop;
    x = x - (stamp.width/2);
    y = y - (stamp.height/2);
    ctx.drawImage(stamp, x, y, stamp.width, stamp.height);
  });

  $("#restore").click(function(e){
    undoDrawOnCanvas();
  });

  $("#save").click(function(e){
    var oImg = Canvas2Image.saveAsPNG(can, true);
    oImg.id = "canvasimage";
    oImg.style.border = can.style.border;
    can.parentNode.replaceChild(oImg, can);
  });
  $("#share_url").focus(function(){
    this.select();
  });

});
function init() {
  var opts = {
    lines: 12, // The number of lines to draw
    length: 7, // The length of each line
    width: 4, // The line thickness
    radius: 10, // The radius of the inner circle
    color: '#000', // #rgb or #rrggbb
    speed: 1, // Rounds per second
    trail: 60, // Afterglow percentage
    shadow: false // Whether to render a shadow
  };
  var target = document.getElementById('flash');
  var spinner = new Spinner(opts).spin(target);
  $.getImageData({
    url: $("#img_url").val(),
    success: function(img){
      if(img.width > main_width) {
        scale = (main_width/img.width);
        ctx.scale(scale,scale);
      }
      can.width = img.width*scale;
      can.height = img.height*scale;
      ctx.drawImage(img, 0, 0, img.width*scale, img.height*scale);
      spinner.stop();
    },
    error: function(xhr, text_status){
      spinner.stop();
    }
  });
  $("#share_url").val(domain+"?img="+$("#img_url").val());
};
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
var QueryString = function () {
  // This function is anonymous, is executed immediately and 
  // the return value is assigned to QueryString!
  var query_string = {};
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i=0;i<vars.length;i++) {
    var pair = vars[i].split("=");
        // If first entry with this name
    if (typeof query_string[pair[0]] === "undefined") {
      query_string[pair[0]] = pair[1];
        // If second entry with this name
    } else if (typeof query_string[pair[0]] === "string") {
      var arr = [ query_string[pair[0]], pair[1] ];
      query_string[pair[0]] = arr;
        // If third or later entry with this name
    } else {
      query_string[pair[0]].push(pair[1]);
    }
  } 
    return query_string;
} ();

