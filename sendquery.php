<?php
if(isset($_REQUEST['submit']))
{
$name = $_REQUEST['name'];
$email = $_REQUEST['email'];
$message = $_REQUEST['message'];
$weburl = $_REQUEST['weburl'];
$url =$_SERVER['HTTP_REFERER'];
$ip=$_SERVER['REMOTE_ADDR'];
$sub="Enquiry Mail from : ".$_REQUEST['email'];
$from=$_REQUEST['email'];	
}
function getUserIpAddr()
{
    if (!empty($_SERVER['HTTP_CLIENT_IP'])) //if from shared
    {
        return $_SERVER['HTTP_CLIENT_IP'];
    }
    else if (!empty($_SERVER['HTTP_X_FORWARDED_FOR']))   //if from a proxy
    {
        return $_SERVER['HTTP_X_FORWARDED_FOR'];
    }
    else
    {
        return $_SERVER['REMOTE_ADDR'];
    }
}
if(($name == NULL) &&( $name== ""))
{
echo "Name is Mandatory  <br>";
}
if(($email == NULL) &&($email == ""))
{
echo "Email is Mandatory  <br>";
}
/*
if(!eregi("^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$", $email)) {
  echo "Valid Email is Mandatory  <br>";
  }
 */


if(  (($email != NULL) && ($email != "")) && (($name != NULL) && ($name != "")) ) 
{
        $msg.="----------------------------------------------------------------\n";
	    $msg.="*** Enquiry Through sonvendra.github.io ***  \n";
	    $msg.="----------------------------------------------------------------\n";
		$msg.="From:-\n";
		$msg.="Name            :$name\n";
	    $msg.="Email           :$email\n";
		$msg.="Subject     :$subject\n";
		$msg.="----------------------------------------------------------------\n\n";
		$msg.="$message\n";
	   	$msg.="REFERRER :                        $url\n";
		$msg.="IP Address: " . getUserIpAddr();
		
	    $headers = "From: ${email}\nReply-To: ${email}";
	   
	   mail("sonvendra@gmail.com","Mail from:sonvendra.github.io","$msg","From:$email");
	
         echo "<script language=\"JavaScript\">\n";
         echo "<!-- hide from old browser\n\n";
    
    echo "function redirect() {\n";
    echo "Message Send" . "\";\n";
    echo "}\n\n";

    echo "timer = setTimeout('redirect()', '" . ($seconds*1000) . "');\n\n";

    echo "-->\n";
    echo "</script>\n"; 

}
else
{
header("location:https://sonvendra.github.io");
}
?>