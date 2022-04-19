<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>
    ###title###
    </title>
    <link rel="stylesheet/less" href="./src/less/__global.less">
    <script src="https://cdn.jsdelivr.net/npm/less@4"></script>
    <link href='https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css' rel='stylesheet'>
</head>
<body>
<div class="wrapper">
    ###body()###
    <div class="blocks"></div>
</div>
<script>
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
</script>
<script src="js-core/controller.js" charset="utf-8"></script>
<script src="js-core/save.js" charset="utf-8"></script>
</body>
</html>
