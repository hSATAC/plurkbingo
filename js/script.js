var can = document.getElementById('canvas');
can.onmousedown = function () { return false; }
var ctx = can.getContext('2d');
var img = new Image();
var stamp = new Image();
stamp.src = 'images/button_ok.png';
var main_width = 580;
var scale = 1;
var restorePoints = [];
var domain = 'http://bingo.hsatac.net/';
var img_uploaded = '';
$(function() {

  $("a[rel=twipsy]").twipsy({
    live: true
  })
  $("#modal-close").click(function(){
    $("#modal").modal('hide');
  });

  $(".twitter").click(function (e){
    if(img_uploaded != '') {
      window.open("https://twitter.com/home/?status=噗浪賓果： "+encodeURIComponent(img_uploaded+" 玩這個噗浪賓果："+$("#share_url").val()+" #plurkbingo"));
    } else {
      $('#modal').modal('show')
    }
    e.preventDefault();
  });
  $(".plurk").click(function (e){
    if(img_uploaded != '') {
      window.open("https://plurk.com/?status=噗浪賓果： "+encodeURIComponent(img_uploaded+" "+$("#share_url").val()+" (玩這個噗浪賓果)"));
    } else {
      $('#modal').modal('show')
    }
    e.preventDefault();
  });
  $(".facebook").click(function (e){
    if(img_uploaded != '') {
      window.open("http://www.facebook.com/dialog/feed?app_id=266143446762054&link="+img_uploaded+"&picture="+img_uploaded+"&name=PlurkBingo&caption=噗浪賓果&description=快來玩噗浪賓果 "+$('#share_url').val()+"&redirect_uri=http://bingo.hsatac.net");
    } else {
      $('#modal').modal('show')
    }
    e.preventDefault();
  });
  $(".imgur").click(function (e){
    if(img_uploaded != '') {
      window.open(img_uploaded);
    } else {
      $('#modal').modal('show')
    }
    e.preventDefault();
  });
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
    /*
       var oImg = Canvas2Image.saveAsPNG(can, true);
       oImg.id = "canvasimage";
       oImg.style.border = can.style.border;
       can.parentNode.replaceChild(oImg, can);
       */
    var opts2 = {
      lines: 12, // The number of lines to draw
    length: 7, // The length of each line
    width: 4, // The line thickness
    radius: 10, // The radius of the inner circle
    color: '#000', // #rgb or #rrggbb
    speed: 1, // Rounds per second
    trail: 60, // Afterglow percentage
    shadow: false // Whether to render a shadow
    };
    var target = document.getElementById('loading2');
    var spinner = new Spinner(opts2).spin(target);
    var opts = {
      success: function(res) {
                 $("#flash").prepend('<div class="alert-message"><a class="close" href="#">×</a><p><strong>恭喜！</strong><a href="'+res.upload.links.original+'">圖片</a>上傳成功，可以分享到您的社群網路嚕。</p></div>');
                 $(".alert-message").alert()
                   img_uploaded = res.upload.links.original;
                 spinner.stop();

               },
      error:  function(res) {
                $("#flash").prepend('<div class="alert-message error"><a class="close" href="#">×</a><p><strong>糟糕！</strong>圖片上傳失敗，請稍後再試一次。</p></div>');
                $(".alert-message").alert()
                  spinner.stop();
                  img_uploaded = '';

              }
    };
    $(can).imgurUpload(opts);
  });

  $("#share_url, #img_url").focus(function(){
    this.select();
  });

});
function init() {
  var opts = {
    lines: 12,
    length: 7, 
    width: 4, 
    radius: 10, 
    color: '#000',
    speed: 1, 
    trail: 60,
    shadow: false
  };
  var target = document.getElementById('loading');
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
      $(".alert-message").remove();

      $.ajax({
        url:"http://api.bit.ly/v3/shorten",
        data:{longUrl:domain+"?img="+$('#img_url').val(),apiKey:'R_ce09d5cc110aaefec88fac016517b561',login:'hsatac'},
        success:function(v) {
          $("#share_url").val(v.data.url);
        },
        error: function(){
                 $("#share_url").val(domain+"?img="+$("#img_url").val());
               },
        dataType:'json'
      });

    },
    error: function(xhr, text_status){
             $("#flash").prepend('<div class="alert-message error"><a class="close" href="#">×</a><p><strong>糟糕！</strong>圖片讀取失敗，請確認您輸入的圖片網址。</p></div>');
             $(".alert-message").alert()
               $("#share_url").val("");
             spinner.stop();
             img_uploaded = '';
           }
  });
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
  var query_string = {};
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i=0;i<vars.length;i++) {
    var pair = vars[i].split("=");
    if (typeof query_string[pair[0]] === "undefined") {
      query_string[pair[0]] = pair[1];
    } else if (typeof query_string[pair[0]] === "string") {
      var arr = [ query_string[pair[0]], pair[1] ];
      query_string[pair[0]] = arr;
    } else {
      query_string[pair[0]].push(pair[1]);
    }
  } 
  return query_string;
} ();

