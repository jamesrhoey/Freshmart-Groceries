<?php
$host = "localhost";
$username = "root";
$password = "";  
$database = "employee_service"; 
$socket = "/data/data/com.termux/files/usr/var/run/mysqld.sock";  


$conn = new mysqli($host, $username, $password, $database, null, $socket);


if ($conn->connect_error) {
    die(json_encode(["status" => "error", "message" => "Database connection failed: " . $conn->connect_error]));
}
?>
