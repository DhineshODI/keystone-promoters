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

    $mail->Username = "noreplykeystonepromoters@gmail.com";
    $mail->Password = "lpfl hysk mjyc bnnh"; // Gmail App Password

    $mail->SMTPSecure = 'tls';
    $mail->Port = 587;

    // ============================
    // ADMIN EMAIL
    // ============================
    $mail->setFrom("noreplykeystonepromoters@gmail.com", "Website JV Enquiry");
    // $mail->addAddress("dhineshkodi2024@gmail.com");
    // $mail->addAddress("vaishuswety2107@gmail.com");    
    $mail->addAddress("noreplykeystonepromoters@gmail.com");

    $mail->Subject = "New Joint Venture Enquiry Received from Website";

    $mail->isHTML(true);
    $mail->Body = "
        <p>Hi Team,</p>
        <p>A new Joint Venture enquiry has been submitted through the website. Please find the details below:</p>

        <p><strong>Name:</strong> $companyName<br>
        <strong>Email:</strong> $email<br>
        <strong>Phone:</strong> $phone<br>
        <strong>Location of the Property:</strong> $location<br>
        <strong>Land Extent:</strong> $extent<br>
        <strong>Remarks:</strong> $remarks</p>

        <br><hr><br>
        <p style='color:#888;font-size:12px;'>This message was auto-generated from the website JV form.</p>
    ";

    $mail->send();

    // ============================
    // USER ACKNOWLEDGEMENT EMAIL
    // ============================
    $mail->clearAddresses();
    $mail->clearReplyTos();

    $mail->addAddress($email);
    $mail->setFrom("noreplykeystonepromoters@gmail.com", "Keystone Promoters Pvt Ltd");

    $mail->Subject = "Thank You for Your Joint Venture Enquiry";

    $mail->Body = "
        <p>Hi <strong>$companyName</strong>,</p>

        <p>Thank you for considering a partnership with us. We’ve received your details, and our team will contact you shortly to discuss the next steps.</p>

        <h3>Your Details:</h3>
        <p>
            <strong>Name:</strong> $companyName<br>
            <strong>Email:</strong> $email<br>
            <strong>Phone:</strong> $phone<br>
            <strong>Location of the Property:</strong> $location<br>
            <strong>Land Extent:</strong> $extent<br>
            <strong>Remarks:</strong> $remarks
        </p>

        <br>
        <p>Warm regards,<br>
        <strong>Keystone Promoters Pvt Ltd.</strong></p>
    ";

    $mail->send();

    echo json_encode([
        "status" => true,
        "message" => "JV form submitted & emails sent successfully!",
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
