<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json");

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require '../PHPMailer/src/Exception.php';
require '../PHPMailer/src/PHPMailer.php';
require '../PHPMailer/src/SMTP.php';

// GET JSON INPUT
$json = file_get_contents("php://input");
$data = json_decode($json, true);

if (!$data) {
    echo json_encode([
        "status" => false,
        "message" => "Invalid JSON received"
    ]);
    exit;
}

// Extract fields
$name = $data['name'] ?? '';
$email = $data['email'] ?? '';
$phone = $data['phone'] ?? '';
$message = $data['message'] ?? '';

$mail = new PHPMailer(true);

try {
    // SMTP Settings
    $mail->isSMTP();
$mail->Host = 'smtp.gmail.com';
$mail->SMTPAuth = true;

$mail->Username = "wordpress.odi@gmail.com"; 
$mail->Password = "YOUR_APP_PASSWORD"; // 16-digit Gmail App Password

$mail->SMTPSecure = 'tls';
$mail->Port = 587;

// sender & receiver same
$mail->setFrom("wordpress.odi@gmail.com", "Website Contact");
$mail->addAddress("wordpress.odi@gmail.com");

// reply to user
$mail->addReplyTo($email, $name);

    $mail->isHTML(true);
    $mail->Subject = "New Contact Form Submission";
    $mail->Body = "
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> $name</p>
        <p><strong>Email:</strong> $email</p>
        <p><strong>Phone:</strong> $phone</p>
        <p><strong>Message:</strong><br>$message</p>
    ";

    $mail->send();

    echo json_encode([
        "status" => true,
        "message" => "Email sent successfully",
        "data_received" => $data
    ]);

} catch (Exception $e) {
    echo json_encode([
        "status" => false,
        "message" => "Email sending failed",
        "error" => $mail->ErrorInfo
    ]);
}
?>
