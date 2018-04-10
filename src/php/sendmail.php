<?php
$email = $_POST["email"];
$phone = $_POST["phone"];
$description = $_POST["description"];

// multiple recipients
$to = "somerom71@gmail.com";

// subject
$subj = "Заявка пеллеты";

// message
$message = "
<html>
    <head>
        <title>Заявка от $email</title>
    </head>
    <body><font style=\"font-family: Verdana; font-size: 12px; color: black\">
        Телефон: <b>$phone</b><br/>
        Почта: <b>$email</b><br/>
        Вопрос: <b>$description</b><br/>
    </body>
</html>
";

// To send HTML mail, the Content-type header must be set
//$headers = 'MIME-Version: 1.0' . "\r\n";
$headers = 'Content-type: text/html; charset=utf-8' . "\r\n";

// Additional headers
$headers .= 'From: PELLET LANDING PAGE pellets@gmail.com' . "\r\n";

mail($to, $subj, $message, $headers);

exit;