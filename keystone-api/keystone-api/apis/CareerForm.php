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

// Handle resume upload
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

// PHPMailer instance
$mail = new PHPMailer(true);

try {
    // SMTP config
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;

    $mail->Username = "shivarex.c@gmail.com";
    $mail->Password = "fzqn zxpq gpze hbla"; // Gmail App Password

    $mail->SMTPSecure = 'tls';
    $mail->Port = 587;

    // ============================================
    // 1. SEND EMAIL TO KEYSTONE TEAM (ADMIN EMAIL)
    // ============================================
    $mail->setFrom("shivarex.c@gmail.com", "Keystone Careers Portal");
    $mail->addAddress("shivarex.c@gmail.com");

    $mail->Subject = "New Career Application Received – $applyFor";
    $mail->isHTML(true);

    $mail->Body = "
        <p>Hello Team,</p>

        <p>A new candidate has submitted an application through the Careers page. Please find the details below:</p>

        <p>
            <strong>Name:</strong> $name<br><br>
            <strong>Email:</strong> $email<br><br>
            <strong>Phone Number:</strong> $phone<br><br>
            <strong>Qualification:</strong> $qualification<br><br>
            <strong>Applied For:</strong> $applyFor<br><br>
            <strong>Message:</strong><br> $message
        </p>

        <p>Kindly review and take the next steps.</p>

        <br>
        <p>Regards,<br><strong>Keystone Promoters – Careers Portal</strong></p>
    ";

    // Attach resume
    if ($resumePath) {
        $mail->addAttachment($resumePath);
    }

    $mail->send();

    // ============================================
    // 2. SEND EMAIL TO CANDIDATE (AUTO REPLY)
    // ============================================
    $mail->clearAddresses();
    $mail->clearReplyTos();
    $mail->clearAttachments();

    $mail->addAddress($email, $name);
    $mail->setFrom("shivarex.c@gmail.com", "Keystone Promoters – HR Team");

    $mail->Subject = "Thank You for Applying – Keystone Promoters";
    $mail->isHTML(true);

    $mail->Body = "
        <p>Hi <strong>$name</strong>,</p>

        <p>Thank you for applying for the <strong>$applyFor</strong> position at Keystone Promoters Pvt. Ltd.
        We have received your application and our HR team will review your profile shortly.</p>

        <h3>Your Submitted Details:</h3>
        <p>
            <strong>Name:</strong> $name<br><br>
            <strong>Email:</strong> $email<br><br>
            <strong>Phone:</strong> $phone<br><br>
            <strong>Qualification:</strong> $qualification<br><br>
            <strong>Position Applied For:</strong> $applyFor
        </p>

        <p>Our team will get back to you if your profile matches our requirements.</p>

        <p>Thank you for your interest in joining Keystone.</p>

        <br>
        <p>Warm Regards,<br><strong>Keystone Promoters – HR Team</strong></p>
    ";

    $mail->send();

    echo json_encode([
        "status" => true,
        "message" => "Career application submitted successfully",
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
