<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Plurk Bingo Playground</title>
    <meta name="description" content="The easiest way to play plurk bingo without launching your painter!">
    <meta name="author" content="hSATAC(Ash Wu)">

    <!-- Le HTML5 shim, for IE6-8 support of HTML elements -->
    <!--[if lt IE 9]>
      <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
    <![endif]-->

    <!-- Le styles -->
    <link href="bootstrap.css" rel="stylesheet">
    <style type="text/css">
      /* Override some defaults */
      html, body {
        background-color: #eee;
      }
      body {
        padding-top: 40px; /* 40px to make the container go all the way to the bottom of the topbar */
      }
      .container > footer p {
        text-align: center; /* center align it with the container */
      }
      .container {
        width: 820px; /* downsize our container to make the content feel a bit tighter and more cohesive. NOTE: this removes two full columns from the grid, meaning you only go to 14 columns and not 16. */
      }

      /* The white background content wrapper */
      .content {
        background-color: #fff;
        padding: 20px;
        margin: 0 -20px; /* negative indent the amount of the padding to maintain the grid system */
        -webkit-border-radius: 0 0 6px 6px;
           -moz-border-radius: 0 0 6px 6px;
                border-radius: 0 0 6px 6px;
        -webkit-box-shadow: 0 1px 2px rgba(0,0,0,.15);
           -moz-box-shadow: 0 1px 2px rgba(0,0,0,.15);
                box-shadow: 0 1px 2px rgba(0,0,0,.15);
      }

      /* Page header tweaks */
      .page-header {
        background-color: #f5f5f5;
        padding: 20px 20px 10px;
        margin: -20px -20px 20px;
      }

      /* Styles you shouldn't keep as they are for displaying this base example only */
      .content .span10,
      .content .span4 {
        min-height: 500px;
      }
      /* Give a quick and non-cross-browser friendly divider */
      .content .span4 {
        margin-left: 0;
        padding-left: 19px;
        border-left: 1px solid #eee;
      }

      .topbar .btn {
        border: 0;
      }

    </style>

    <!-- Le fav and touch icons -->
    <link rel="shortcut icon" href="images/favicon.ico">
    <link rel="apple-touch-icon" href="images/apple-touch-icon.png">
    <link rel="apple-touch-icon" sizes="72x72" href="images/apple-touch-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="114x114" href="images/apple-touch-icon-114x114.png">
  </head>

  <body>

    <div class="topbar">
      <div class="fill">
        <div class="container">
          <a class="brand" href="#">Plurk Bingo</a>
          <ul class="nav">
            <li class="active"><a href="/">Home</a></li>
            <li><a href="http://www.plurk.com/p/eewzk6" target="_blank">Gallery</a></li>
            <li><a href="http://hsatac.net/+" target="_blank">About</a></li>
          </ul>

        </div>
      </div>
    </div>

    <div class="container">

      <div class="content">
        <div class="page-header">
          <h1>Plurk Bingo <small>You don't need to launch painter to play plurk bingo anymore!</small></h1>
        </div>
        <div class="row">
          <div class="span10">
            <h2>Bingo</h2>
            <canvas id="canvas">
            </canvas>
          </div>
          <div class="span4">
            <h3>Steps</h3>
            <form class="form-stacked"> 
            <div class="clearfix">
              <label for="xlInput3">1.請輸入賓果圖片網址</label>
              <div class="input">
                <input class="span3" id="img_url" name="img_url" type="text">
              </div>
            </div>
            <div class="clearfix">
              <label>2.開始賓果</label>
              <button type="button" id="restore" class="btn danger">復原</button>
            </div>
            <div class="clearfix">
              <label>3.我做完了</label>
              <button type="button" id="save" class="btn primary">轉為圖檔</button>
            </div>
            <div class="clearfix">
              <label>4.右鍵另存圖片</label>
            </div>
            </form>
          </div>
        </div>
      </div>

      <footer>
        <p>&copy; hSATAC(Ash Wu) 2011</p>
      </footer>

    </div> <!-- /container -->

<script src="//ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js"></script>

<script>window.jQuery || document.write('<script src="js/libs/jquery-1.6.2.min.js"><\/script>')</script>

<script src="js/base64.js" type="text/javascript"></script>
<script src="js/canvas2image.js" type="text/javascript"></script>
<script src="js/script.js"></script>
  </body>
</html>
