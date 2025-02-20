<?php
include_once 'config/database.php';

class EmployeeController {

    public function addEmployee($data) {
        global $conn;
        $sql = "INSERT INTO employees (name,bday, address, contact, emergencyNumber) VALUES (:name, :bday, :address, :contact, :emergencyNumber)";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':name', $data['name']);
        $stmt->bindParam(':bday', $data['bday']);
        $stmt->bindParam(':address', $data['address']);
        $stmt->bindParam(':contact', $data['contact']);
        $stmt->bindParam(':emergencyNumber', $data['emergencyNumber']);
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
        $sql = "UPDATE employees SET name = :name, bday = :bday, address = :address, contact = :contact, emergencyNumber = :emergencyNumber WHERE id = :id";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':name', $data['name']);
        $stmt->bindParam(':bday', $data['bday']);
        $stmt->bindParam(':address', $data['address']);
        $stmt->bindParam(':contact', $data['contact']);
        $stmt->bindParam(':emergencyNumber', $data['emergencyNumber']);
        $stmt->bindParam(':id', $id);
        $stmt->execute();

        return ['success' => 'Employee updated successfully'];
    }
}
?>
