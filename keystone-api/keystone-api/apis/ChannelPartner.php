<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require '../PHPMailer/src/Exception.php';
require '../PHPMailer/src/PHPMailer.php';
require '../PHPMailer/src/SMTP.php';

// Read JSON input
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
$city = $data['city'] ?? '';
$phone = $data['phone'] ?? '';
$remarks = $data['remarks'] ?? '';

// PHPMailer initialization
$mail = new PHPMailer(true);

try {
    // SMTP Configuration
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;

    $mail->Username = "noreplykeystonepromoters@gmail.com";
    $mail->Password = "lpfl hysk mjyc bnnh"; // Gmail App Password

    $mail->SMTPSecure = 'tls';
    $mail->Port = 587;

    // ========== ADMIN EMAIL ==========
    $mail->setFrom("noreplykeystonepromoters@gmail.com", "Website Channel Partner Enquiry");

    $mail->addAddress("dhineshkodi2024@gmail.com");
    $mail->addAddress("vaishuswety2107@gmail.com");  
    $mail->addAddress("noreplykeystonepromoters@gmail.com");
    $mail->Subject = "New Channel Partner Enquiry Received from Website";
    $mail->isHTML(true);

    $mail->Body = "
        <p>A new Channel Partner enquiry has been submitted on the website.<br>
        Please find the details below:</p>

        <h3>Details:</h3>
        <p>
            <strong>Company Name:</strong> $companyName<br><br>
            <strong>Email:</strong> $email<br><br>
            <strong>Phone Number:</strong> $phone<br><br>
            <strong>City:</strong> $city<br><br>
            <strong>Remarks:</strong> $remarks
        </p>

        <br><hr>
        <p style='font-size:12px;color:#888;'>This email was automatically generated from the Channel Partner form on the website.</p>
    ";

    $mail->send();

    // ========== USER ACKNOWLEDGMENT EMAIL ==========
    $mail->clearAddresses();
    $mail->clearReplyTos();

    $mail->addAddress($email);
    $mail->setFrom("noreplykeystonepromoters@gmail.com", "Keystone Promoters Pvt Ltd");

    $mail->Subject = "Thank You for Your Channel Partner Enquiry";
    $mail->isHTML(true);

    $mail->Body = "
        <p>Hi <strong>$companyName</strong>,</p>

        <p>Thank you for your interest in partnering with us.  
        We’ve received your Channel Partner enquiry and our team will contact you shortly with the next steps.</p>

        <h3>Your Submitted Details:</h3>
        <p>
            <strong>Company Name:</strong> $companyName<br><br>
            <strong>Email:</strong> $email<br><br>
            <strong>Phone Number:</strong> $phone<br><br>
            <strong>City:</strong> $city<br><br>
            <strong>Remarks:</strong> $remarks
        </p>

        <p>We look forward to exploring an opportunity to work together.</p>

        <br>
        <p>Warm regards,<br>
        <strong>Keystone Promoters Pvt Ltd.</strong></p>
    ";

    $mail->send();

    echo json_encode([
        "status" => true,
        "message" => "Channel Partner form processed & emails sent successfully!",
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
