<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require '../PHPMailer/src/Exception.php';
require '../PHPMailer/src/PHPMailer.php';
require '../PHPMailer/src/SMTP.php';

// Read JSON from frontend
$json = file_get_contents("php://input");
$data = json_decode($json, true);

if (!$data) {
    echo json_encode([
        "status" => false,
        "message" => "Invalid or empty JSON"
    ]);
    exit;
}

$companyName = $data['companyName'] ?? '';
$email = $data['email'] ?? '';
$phone = $data['phone'] ?? '';
$location = $data['location'] ?? '';
$extent = $data['extent'] ?? '';
$remarks = $data['remarks'] ?? '';

// PHPMailer setup
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
$mail->addReplyTo($email, $companyName);

    // Email Content
    $mail->Subject = "New Joint Venture Form Submission";
    $mail->Body = "
        Company Name: $companyName
        Email: $email
        Phone: $phone
        Location: $location
        Land Extent: $extent
        Remarks: $remarks
    ";

    $mail->send();

    echo json_encode([
        "status" => true,
        "message" => "Joint Venture form submitted successfully!",
        "data_received" => $data
    ]);

} catch (Exception $e) {
    echo json_encode([
        "status" => false,
        "message" => "Error sending email",
        "error" => $mail->ErrorInfo
    ]);
}
?>
