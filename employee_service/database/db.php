<?php
$host = "127.0.0.1";  // Use IP instead of 'localhost' to avoid socket issues
$user = "root";       // MariaDB root user
$password = "";       // Your MariaDB root password (if any)
$database = "employee_service"; // Your actual database name
$port = 3306;         // Explicitly define the port

// Create a connection
$conn = new mysqli($host, $user, $password, $database, $port);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Optional: Set charset to UTF-8
$conn->set_charset("utf8");

?>
