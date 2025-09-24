<?php
define('DB_SERVER', 'localhost');
define('DB_USERNAME', 'root');
define('DB_PASSWORD', '');
define('DB_NAME', 'utilisateurs');
try {
    $pdo = new PDO("mysql:host=" . DB_SERVER . ";dbname=" . DB_NAME, DB_USERNAME, DB_PASSWORD);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("ERROR: Could not connect. " . $e->getMessage());
}

$sql = "SELECT * FROM utilisateurs";
if ($stmt = $pdo->prepare($sql)) {
    if ($stmt->execute()) {
        if (!($data = $stmt->fetchAll(PDO::FETCH_ASSOC))) {
            die("something wrong happened");
        }
    }
}
unset($stmt);
echo json_encode($data);

