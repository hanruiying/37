<?php

require_once "jssdk.php";
require_once "function.php";
header("Content-Type:application/json; chaeset=utf-8");
// benbun
// $jssdk = new JSSDK("wxa15b3d29f66c9db4", "efb553e764f6a906b80d83f3b5429528");
// zanshang
$jssdk = new JSSDK("wxce79a3e1b2df2691", "84db493a4c875d148fcc86770910ba1b");

// $url = $_GET['url'];
$url = I('url', '');

$remove_xss_url = remove_xss($url);

if (strlen($url) != strlen($remove_xss_url)) {
    output(array("code" => 10002)); 
} else {
  	$url = urldecode($remove_xss_url);
	$signPackage = $jssdk->GetSignPackage($url);
	output($signPackage);
}

function output($result) {
  $str = json_encode($result);
  if (isset($_GET['callback'])) {
    $callback = $_GET['callback'];
    $str = $callback.'('.$str.')';
  }
  echo $str;
  exit(0);
}

?>