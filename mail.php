<?php 
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
require 'vendor/autoload.php';
$mail = new PHPMailer(true);
try{
    $mail->SMTPDebug = 30;
    $mail->isSMTP();
    $mail->SMTPKeepAlive = true;
    $mail->Mailer ="smtp";
    $mail->Host = "smtp.gmail.com";
    $mail->SMTPAuth = "true";
    $mail->Username = "epoxysjdmail@gmail.com";
    $mail->Password = "jmofbovtqmuwspjg";
    $mail->SMTPSecure = 'tls';
    $mail->Port = '587';

    $mail->SetFrom("willgoulet555@gmail.com", "Will");
    $mail->addAddress("willgoulet555@gmail.com");
    $mail->Subject = "Email";
    $mail->Body = "Salut";
    $mail->send();
    echo "sent succesfully";    
}
catch(Exception $e){
    echo "Error" .$e;
}
?>