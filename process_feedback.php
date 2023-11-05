<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $opinion = $_POST['opinion'];
    $rating = $_POST['rating'];

    // Generic or "no-reply" email address
    $from = "no-reply@example.com"; // Replace with your desired email address or domain.

    $to = "artistryforge@gmail.com"; // Your email
    $subject = "Feedback - Rating: $rating";
    $message = $opinion;
    $headers = "From: $from";

    if (mail($to, $subject, $message, $headers)) {
        echo "Feedback submitted successfully!";
    } else {
        echo "Failed to submit feedback. Please try again later.";
    }
} else {
    echo "Form was not submitted.";
}
?>
