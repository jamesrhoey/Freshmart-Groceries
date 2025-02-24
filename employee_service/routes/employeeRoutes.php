<?php require_once __DIR__ . 
'/../controllers/EmployeeController.php'; 
$method = $_SERVER["REQUEST_METHOD"]; 
$uri = explode("/", 
$_SERVER["REQUEST_URI"]); $id = $uri[2] 
?? null; switch ($method) {
    case "GET": if ($id) { 
            EmployeeController::getEmployee($id);
        } else {
            EmployeeController::getAllEmployees();
        }
        break; case "POST": 
        EmployeeController::addEmployee(); 
        break;
    case "PUT": if ($id) { 
            EmployeeController::updateEmployee($id);
        }
        break; case "DELETE": if ($id) { 
            EmployeeController::deleteEmployee($id);
        }
        break; default: echo 
        json_encode(["status" => "error", 
        "message" => "Invalid request"]); 
        break;
}
?>
