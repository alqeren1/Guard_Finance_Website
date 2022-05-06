<?php




if (isset($_POST['submit'])) {
   $name = $_POST['name'];
   $mailFrom = $_POST['mail'];
   $message = $_POST['message'];

$mailTo = "enver.enes98@gmail.com";
$headers = "From: ".$mailFrom;
$txt = "New Request ".$name.".\n\n".$message;
$subject = "HelloGal";

mail($mailTo, $subject, $txt, $headers);
header("Location: index.html?mailsend");

}
    ?>