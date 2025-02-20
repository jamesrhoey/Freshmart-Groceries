<?php
include_once '../controllers/empController.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST' && $_SERVER['REQUEST_URI'] == '/employees') {
    $data = json_decode(file_get_contents('php://input'), true);
    $controller = new EmployeeController();
    echo json_encode($controller->addEmployee($data));
}


if ($_SERVER['REQUEST_METHOD'] == 'GET' && preg_match('/^\/employees\/(\d+)$/', $_SERVER['REQUEST_URI'], $matches)) {
    $controller = new EmployeeController();
    echo json_encode($controller->getEmployee($matches[1]));
}

if ($_SERVER['REQUEST_METHOD'] == 'PUT' && preg_match('/^\/employees\/(\d+)$/', $_SERVER['REQUEST_URI'], $matches)) {
    $data = json_decode(file_get_contents('php://input'), true);
    $controller = new EmployeeController();
    echo json_encode($controller->updateEmployee($matches[1], $data));
}
?>
