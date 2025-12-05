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

// Read text fields
$name = $_POST['name'] ?? '';
$email = $_POST['email'] ?? '';
$phone = $_POST['phone'] ?? '';
$qualification = $_POST['qualification'] ?? '';
$applyFor = $_POST['applyFor'] ?? '';
$message = $_POST['message'] ?? '';

// Handle resume file upload
$resumePath = "";
if (isset($_FILES['resume'])) {
    $uploadDir = "../uploads/";
    if (!file_exists($uploadDir)) {
        mkdir($uploadDir, 0777, true);
    }

    $resumeName = time() . "_" . basename($_FILES["resume"]["name"]);
    $resumePath = $uploadDir . $resumeName;

    move_uploaded_file($_FILES["resume"]["tmp_name"], $resumePath);
}

// SEND EMAIL USING PHPMailer
$mail = new PHPMailer(true);

try {
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

    // Email Content
    $mail->Subject = "New Career Application";

    $mail->Body = "
        Name: $name
        Email: $email
        Phone: $phone
        Qualification: $qualification
        Apply For: $applyFor
        Message: $message
    ";

    // Attach resume
    if ($resumePath) {
        $mail->addAttachment($resumePath);
    }

    $mail->send();

    echo json_encode([
        "status" => true,
        "message" => "Career form submitted successfully",
        "file_uploaded" => $resumePath
    ]);

} catch (Exception $e) {
    echo json_encode([
        "status" => false,
        "message" => "Email sending failed",
        "error" => $mail->ErrorInfo
    ]);
}
?>
