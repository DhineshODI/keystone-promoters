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

// Read JSON input
$json = file_get_contents("php://input");
$data = json_decode($json, true);

if (!$data) {
    echo json_encode([
        "status" => false,
        "message" => "Invalid JSON received"
    ]);
    exit;
}

$name = $data['name'] ?? '';
$email = $data['email'] ?? '';
$phone = $data['phone'] ?? '';
$message = $data['message'] ?? '';
$isBrochure = isset($data['isBrochure']) && $data['isBrochure'] === true;

$mail = new PHPMailer(true);

try {
    // SMTP setup
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = "noreplykeystonepromoters@gmail.com";
    $mail->Password = "lpfl hysk mjyc bnnh"; // Gmail App Password
    $mail->SMTPSecure = 'tls';
    $mail->Port = 587;

    // Send to company
    $mail->setFrom("noreplykeystonepromoters@gmail.com", "Website Contact");
    $mail->addAddress("dhineshkodi2024@gmail.com");
    $mail->addAddress("noreplykeystonepromoters@gmail.com");
    $mail->addAddress("vaishuswety2107@gmail.com");    
    $mail->addReplyTo($email, $name);

    $mail->isHTML(true);

    // -----------------------
    // TEMPLATE FOR BROCHURE
    // -----------------------
    if ($isBrochure) {

        $mail->Subject = "New Brochure Download Request from Website";

        $mail->Body = "
            <h2>Download Brochure - Client</h2>
            <p>A user has requested to download the brochure.</p>

            <h3>Details:</h3>
            <p><strong>Name:</strong> $name</p>
            <p><strong>Email:</strong> $email</p>
            <p><strong>Phone Number:</strong> $phone</p>

            <hr>
            <p style='color:gray;'>Keystone Promoters Pvt Ltd</p>
        ";

    } else {
        // -----------------------
        // TEMPLATE FOR NORMAL ENQUIRY
        // -----------------------

        $mail->Subject = "New General Enquiry Received from Website";

        $mail->Body = "
            <h2>Client Enquiry</h2>

            <p><strong>Name:</strong> $name</p>
            <p><strong>Email:</strong> $email</p>
            <p><strong>Phone:</strong> $phone</p>
            <p><strong>Message:</strong> $message</p>

            <hr>
            <p style='color:gray;'>Keystone Promoters Pvt Ltd</p>
        ";
    }

    $mail->send();

    // ===== Send ACKNOWLEDGMENT TO USER =====
    $mail->clearAddresses();
    $mail->clearReplyTos();
    $mail->addAddress($email, $name);
    $mail->setFrom("noreplykeystonepromoters@gmail.com", "Keystone Promoters Pvt Ltd");

    if ($isBrochure) {

        $mail->Subject = "Thank You for Downloading the Brochure";

        $mail->Body = "
            <h3>Hi $name,</h3>
            <p>Thank you for showing interest in our project.</p>
            <p>The brochure has been downloaded successfully. A copy is also sent to your email for reference.</p>

            <h3>Your Details:</h3>
            <p><strong>Name:</strong> $name</p>
            <p><strong>Email:</strong> $email</p>
            <p><strong>Phone Number:</strong> $phone</p>

            <br>
            <p>Warm Regards,<br><strong>Keystone Promoters Pvt Ltd</strong></p>
        ";

    } else {

        $mail->Subject = "Thank You for Contacting Us";

        $mail->Body = "
            <h3>Hi $name,</h3>
            <p>Thank you for your enquiry. Our team will contact you shortly.</p>

            <br>
            <p>Best Regards,<br><strong>Keystone Promoters Pvt Ltd</strong></p>
        ";
    }

    $mail->send();

    echo json_encode([
        "status" => true,
        "message" => "Email sent successfully"
    ]);

} catch (Exception $e) {

    echo json_encode([
        "status" => false,
        "message" => "Email failed",
        "error" => $mail->ErrorInfo
    ]);
}
?>
