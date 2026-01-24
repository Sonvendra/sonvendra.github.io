<?php
// Email configuration
$to_email = "info@ariesxpress.com";

// Check if form is submitted via POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    // Determine form type (contact form or quote form)
    $form_type = isset($_POST['form_type']) ? $_POST['form_type'] : 'contact';
    
    // Get form data and sanitize
    $user_name = isset($_POST['user_name']) ? htmlspecialchars(strip_tags(trim($_POST['user_name']))) : '';
    $user_phone = isset($_POST['user_phone']) ? htmlspecialchars(strip_tags(trim($_POST['user_phone']))) : '';
    $user_email = isset($_POST['user_email']) ? filter_var(trim($_POST['user_email']), FILTER_SANITIZE_EMAIL) : '';
    $user_city = isset($_POST['user_city']) ? htmlspecialchars(strip_tags(trim($_POST['user_city']))) : '';
    
    // Contact form specific fields
    $subject = isset($_POST['subject']) ? htmlspecialchars(strip_tags(trim($_POST['subject']))) : '';
    $message = isset($_POST['message']) ? htmlspecialchars(strip_tags(trim($_POST['message']))) : '';
    
    // Quote form specific field
    $query = isset($_POST['query']) ? htmlspecialchars(strip_tags(trim($_POST['query']))) : '';
    
    // Validation
    $errors = array();
    
    if (empty($user_name)) {
        $errors[] = "Name is required";
    }
    
    if (empty($user_phone)) {
        $errors[] = "Phone number is required";
    }
    
    if (empty($user_email) || !filter_var($user_email, FILTER_VALIDATE_EMAIL)) {
        $errors[] = "Valid email is required";
    }
    
    if (empty($user_city)) {
        $errors[] = "City is required";
    }
    
    // Form-specific validation
    if ($form_type == 'contact') {
        if (empty($subject)) {
            $errors[] = "Subject is required";
        }
        if (empty($message)) {
            $errors[] = "Message is required";
        }
    } else if ($form_type == 'quote') {
        if (empty($query)) {
            $errors[] = "Query is required";
        }
    }
    
    // If no errors, send email
    if (empty($errors)) {
        // Set email subject and body based on form type
        if ($form_type == 'quote') {
            $email_subject = "New Quote Request from " . $user_name;
            $email_body = "You have received a new quote request from your website.\n\n";
            $email_body .= "Name: " . $user_name . "\n";
            $email_body .= "Phone: " . $user_phone . "\n";
            $email_body .= "Email: " . $user_email . "\n";
            $email_body .= "City: " . $user_city . "\n\n";
            $email_body .= "Query:\n" . $query . "\n\n";
            $email_body .= "---\n";
            $email_body .= "This email was sent from your website quote request form.\n";
        } else {
            $email_subject = "New Contact Form Submission from " . $user_name;
            $email_body = "You have received a new message from your website contact form.\n\n";
            $email_body .= "Name: " . $user_name . "\n";
            $email_body .= "Phone: " . $user_phone . "\n";
            $email_body .= "Email: " . $user_email . "\n";
            $email_body .= "City: " . $user_city . "\n";
            $email_body .= "Subject: " . $subject . "\n\n";
            $email_body .= "Message:\n" . $message . "\n\n";
            $email_body .= "---\n";
            $email_body .= "This email was sent from your website contact form.\n";
        }
        
        // Email headers
        $headers = "From: " . $user_email . "\r\n";
        $headers .= "Reply-To: " . $user_email . "\r\n";
        $headers .= "X-Mailer: PHP/" . phpversion() . "\r\n";
        $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
        
        // Send email
        if (mail($to_email, $email_subject, $email_body, $headers)) {
            // Success response
            $response = array(
                'success' => true,
                'message' => 'Thank you! Your ' . ($form_type == 'quote' ? 'quote request' : 'message') . ' has been sent successfully. We will contact you soon.'
            );
        } else {
            // Error response
            $response = array(
                'success' => false,
                'message' => 'Sorry, there was an error sending your ' . ($form_type == 'quote' ? 'quote request' : 'message') . '. Please try again or contact us directly at info@ariesxpress.com'
            );
        }
    } else {
        // Validation errors
        $response = array(
            'success' => false,
            'message' => 'Please fill in all required fields correctly.',
            'errors' => $errors
        );
    }
    
    // Return JSON response
    header('Content-Type: application/json');
    echo json_encode($response);
    exit;
    
} else {
    // Not a POST request
    header('Content-Type: application/json');
    echo json_encode(array(
        'success' => false,
        'message' => 'Invalid request method.'
    ));
    exit;
}
?>
