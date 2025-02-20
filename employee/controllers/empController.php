<?php
include_once 'config/database.php';

class EmployeeController {

    public function addEmployee($data) {
        global $conn;
        $sql = "INSERT INTO employees (name, email, position) VALUES (:name, :email, :position)";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':name', $data['name']);
        $stmt->bindParam(':email', $data['email']);
        $stmt->bindParam(':position', $data['position']);
        $stmt->execute();

        return ['success' => 'Employee added successfully'];
    }

    public function getEmployee($id) {
        global $conn;
        $sql = "SELECT * FROM employees WHERE id = :id";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':id', $id);
        $stmt->execute();
        $employee = $stmt->fetch(PDO::FETCH_ASSOC);

        if ($employee) {
            return $employee;
        } else {
            return ['error' => 'Employee not found'];
        }
    }

    public function updateEmployee($id, $data) {
        global $conn;
        $sql = "UPDATE employees SET name = :name, email = :email, position = :position WHERE id = :id";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':name', $data['name']);
        $stmt->bindParam(':email', $data['email']);
        $stmt->bindParam(':position', $data['position']);
        $stmt->bindParam(':id', $id);
        $stmt->execute();

        return ['success' => 'Employee updated successfully'];
    }
}
?>
