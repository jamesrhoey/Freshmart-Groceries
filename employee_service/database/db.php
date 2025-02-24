<?php
$host = "127.0.0.1";  
$user = "root";      
$password = "";      
$database = "employee_service"; 
$port = 3306;        

// Create a connection
$conn = new mysqli($host, $user, $password, $database, $port);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Optional: Set charset to UTF-8
$conn->set_charset("utf8");

?>
