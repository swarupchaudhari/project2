<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    $to = "your-email@example.com"; // CHANGE THIS
    $subject = "New Portfolio Message";
    $body = "Name: $name\nEmail: $email\nMessage:\n$message";

    mail($to, $subject, $body);

    echo "Message Sent Successfully!";
}
?>