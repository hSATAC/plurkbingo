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
  $('#img_url').combobox(
    [
'土木系',
'大四畢業取向日文系',
'工業設計',
'中文系',
'中文系2',
'中藥資',
'元智資傳(多媒體設計)',
'公管/公行',
'化工系',
'化學系',
'心理系',
'心理系諮商組',
'文化大學',
'文學系(文藝理論)',
'文學院',
'日文1',
'日文2',
'日文3',
'外語系(偏歐文)',
'幼教系',
'幼教系2',
'生科系',
'企管系',
'地理系',
'服設',
'服裝系',
'東亞',
'法律系',
'物理系',
'物理系',
'社工系',
'社會系1',
'社會系2',
'社學系3',
'建築系',
'政大',
'政治系',
'美術系1',
'美術系2',
'美術系3',
'英文(教學組)',
'英文系1',
'英文系2',
'英文系3',
'音樂系',
'食品營養',
'哲學系',
'哲學系',
'旅遊系',
'特教系',
'財金金融',
'商學院',
'國企系',
'國際政治經濟系',
'教育系',
'規劃設計學系',
'設計系2',
'設計系1',
'景觀',
'森林系',
'華教',
'傳播科系',
'會計系',
'經濟系',
'義大利文系',
'資工系',
'資處科',
'資傳系',
'資管系1',
'資管系2',
'資管系3',
'資管系4',
'資管系5',
'資網系',
'農藝系',
'遊戲設計系',
'電機系',
'圖書資訊系',
'圖傳系',
'德文系1',
'德文系2',
'數學系',
'機械系',
'歷史1',
'歷史2',
'餐旅系',
'餐旅管理',
'戲劇系',
'臨床心理系',
'織品設計系',
'醫務管理系',
'醫學院',
'獸醫系1',
'獸醫系2',
'藝術系',
'護理系1',
'護理系2',
'護理系3',
'觀光系'
      ],

    [
      
'http://images.plurk.com/d652a7bf79a7787afb0e8a09534402ea.jpg',
'http://images.plurk.com/ce80d02bb31927177eba49f25c681de7.jpg',
'http://images.plurk.com/aa70c63edda742a5c1882c79147f5fc8.jpg',
'http://images.plurk.com/e75b675ce666abbbc4d8168e6d70822a.jpg',
'http://images.plurk.com/e30d152e93911e48699da5c94c4e7711.jpg',
'http://images.plurk.com/47d19a6693f1a56999aaec2b4a041f9a.jpg',
'http://i.imgur.com/WJGjw.png',
'http://images.plurk.com/e2f1b4e18af82c3f1598fd3a73c08dd5.jpg',
'http://images.plurk.com/8ab8445f55286910e7f427136f01818f.jpg',
'http://images.plurk.com/56fb8e43b185ec47dbe2cc03aba25e55.jpg',
'http://images.plurk.com/tn_b82bab63d060084b9e08da00ead9bfd5.gif',
'http://images.plurk.com/2c70e4c64373c391b8af28d258367855.jpg',
'http://images.plurk.com/20b1300e01d36a38b8caa65e3ce26e32.jpg',
'http://images.plurk.com/a4e0b296b9fe2344719eb4a25109af33.jpg',
'http://images.plurk.com/2de950ad48237d18a888972dc319c9ab.jpg',
'http://images.plurk.com/ae1340cd819cdf386707bbe764c63314.jpg',
'http://images.plurk.com/112dc1c9921b1f89f3ce1000fdcb9f67.jpg',
'http://i.imgur.com/s3YIN.jpg',
'http://images.plurk.com/21b62e9f1186a2f0147e3f0a62931c3c.jpg',
'http://images.plurk.com/5a0a81260d800697864f77adb6603f0f.jpg',
'http://images.plurk.com/2f8f2d26f6f83a249093076f95ddde98.jpg',
'http://images.plurk.com/8e59d2fc76277be942b777ca59b3eca4.jpg',
'http://images.plurk.com/1fd24d1c5c40257edc041469f5f2db42.jpg',
'http://images.plurk.com/2a809993eae0731212bff64af7f9a372.jpg',
'http://images.plurk.com/30d5804376837a96fb67fb3230b2832c.jpg',
'http://images.plurk.com/56908e3fde1d1e098de51b49c561527d.jpg',
'http://images.plurk.com/22cd0d3ed164ecc6af73ef3847605756.jpg',
'http://a8.sphotos.ak.fbcdn.net/hphotos-ak-ash4/307605_2428129429917_1452024805_32784947_337121583_n.jpg',
'http://images.plurk.com/d940920d7b844f8f1c67ac466c051b2d.jpg',
'http://images.plurk.com/dfc42cd8764effd4cf05418367c68e7a.jpg',
'http://images.plurk.com/7cbfd054f79ecb8614f9734a2281f41d.jpg',
'http://images.plurk.com/1aab826c945c90a61b5a9522546a977f.jpg',
'http://images.plurk.com/f9472699cf932e41d99c9627323507da.jpg',
'http://images.plurk.com/ecfcc12d7997f81a373f76dc312fa203.jpg',
'http://images.plurk.com/b18a72ed78adf433aa4d46ef2ea3778f.jpg',
'http://images.plurk.com/ff3c176083081bbddd8657ff6c9a509a.jpg',
'http://images.plurk.com/40984f564f90318b5d73ec2d2705c9c4.jpg',
'http://images.plurk.com/435deda093b866c889f1442b30f75a8b.jpg',
'http://images.plurk.com/56c6517c69d5f82a6cce4005ec457797.jpg',
'http://images.plurk.com/e6bb64b9455f98c7b78b13f6e686a283.jpg',
'http://images.plurk.com/be4b6aaa28284115d972dcca33cfab6a.jpg',
'http://i.imgur.com/hFV2C.png',
'http://images.plurk.com/06bf4bf969275b414ea7b447bc6b1bea.jpg',
'http://i.imgur.com/yODlS.jpg',
'http://images.plurk.com/1d21f3703231c8a57a012aa4769913af.jpg',
'http://images.plurk.com/4522d69c632edf2bcb57ff56942b770b.jpg',
'http://images.plurk.com/0750950806c09af5f6ccb67824012652.jpg',
'http://images.plurk.com/486dc2e72f4463b6998be0e67f5a3410.jpg',
'http://images.plurk.com/4e79fcfa2221f1627630341f83f92eb9.jpg',
'http://a5.sphotos.ak.fbcdn.net/hphotos-ak-snc7/313876_304968822851029_100000137424641_1484754_1476046854_n.jpg',
'http://images.plurk.com/7db64118486d1b54d8155ea7b068fa44.jpg',
'http://images.plurk.com/2f611711e4cffadb23e8085542b6552f.jpg',
'http://images.plurk.com/6dbd9f5a44a590b31e407aeb4d201161.jpg',
'http://images.plurk.com/6e5bae8d8ff3eea61b22545e897ed4dc.jpg',
'http://images.plurk.com/bc4915252f2012920632e3aebafd896c.jpg',
'http://images.plurk.com/30b4f770e996d6718ca940dc7b05453e.jpg',
'http://images.plurk.com/a81ff018a242f3867e14b504bc7a7939.jpg',
'http://images.plurk.com/b93294fd88011a8bdcf91bc2254a5205.jpg',
'http://images.plurk.com/e845cd83a47c79280c9902e345e6f5b6.jpg',
'http://images.plurk.com/1fe61d59ac7d138cf704aa83be0d5d1d.jpg',
'http://images.plurk.com/aa68f13e34b3e91f98265c7d40d45302.jpg',
'http://images.plurk.com/8f9cc904c89453dd7a479e3b1417a1b5.jpg',
'http://images.plurk.com/5adf83e9cfef485d6361ab79bbb76433.jpg',
'http://images.plurk.com/7532a0b9d2d7ff655a2ac39bde56da04.jpg',
'http://pics10.yamedia.tw/34/userfile/k/kimbimly/album/14ea02a5f64596.jpg',
'http://images.plurk.com/61a013001b3cf916522629b1d89509cc.jpg',
'http://images.plurk.com/4374eb399a28129c27d77aefaf184423.jpg',
'http://images.plurk.com/75a4a66c115f1c7935e4ac7ae6217969.jpg',
'http://i.imgur.com/xi4Iq.png',
'http://images.plurk.com/017d8172c19f9fa151467832ceb351af.jpg',
'http://images.plurk.com/64e2d585c6163c4d0bea7fb4e5658615.jpg',
'http://images.plurk.com/9b0d7754ee4cd005c6c0b1fcc2ccee8a.jpg',
'https://fbcdn-sphotos-a.akamaihd.net/hphotos-ak-ash4/s720x720/316042_2310553597759_1066934329_3303654_1529492686_n.jpg',
'http://images.plurk.com/1cb0675fbacf794930861c56c6914ba8.jpg',
'http://images.plurk.com/05bc3bfe9b6ce310198174cf964878bd.jpg',
'http://i.imgur.com/G9Vfb.png',
'http://images.plurk.com/08b2e1a7aa7b7be28012ef12d16cf080.jpg',
'http://images.plurk.com/70a41fdc77bb98cd1df286e3f6a0358b.jpg',
'http://images.plurk.com/b8864af7cd05d2343ac6ef4761a1889b.jpg',
'http://images.plurk.com/d23c06b3e9e0478816f30f8f1f3be1d9.jpg',
'http://images.plurk.com/32dea87a3a511e2b6aa492f720fea52c.jpg',
'http://images.plurk.com/f3e9ed11a1c105efc021939954e6a7f5.jpg',
'http://images.plurk.com/77b5d0e38f12a6d15bc9f1a72b0133d0.jpg',
'http://images.plurk.com/852123c7f94e4cdee60bdc02d3fc4004.jpg',
'http://images.plurk.com/e94f2cadf972ccbad70dbba77b65feb6.jpg',
'http://images.plurk.com/4bc1c18f65c4fc439969be126ba021bb.jpg',
'http://images.plurk.com/a2026d91b691faeb25777a85a4d18b6f.jpg',
'http://images.plurk.com/0d31adec7e59aae3228357537213fc9a.jpg',
'http://images.plurk.com/tn_301b276d606185b37a03ecd765090728.gif',
'http://images.plurk.com/0c91da8953854d894568b680c7ebec03.jpg',
'http://images.plurk.com/a40a98874bd4a398861f1e64d966e106.jpg',
'http://images.plurk.com/tn_770218826917925bad3e5b126c042fbc.gif',
'http://images.plurk.com/e4e60a606218887df88a2f854c7bac89.jpg',
'http://images.plurk.com/e9dcd7edabc2942d5f3091ffc6b5c09f.jpg',
'http://images.plurk.com/88863e539ebf13f390205655b0a294ea.jpg',
'http://images.plurk.com/2e6e037d7418999a1870567948ef3122.jpg',
'http://images.plurk.com/65197b961340c2d0859b01653de3e10d.jpg',
'http://images.plurk.com/7f59fd4bf645a32e1535412c258aa953.jpg',
'http://images.plurk.com/276b7f8aa2b5b20da91f832523e26207.jpg'
      ]
      );

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

