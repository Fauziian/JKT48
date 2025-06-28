<?php
session_start();

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Ambil data dari form login
    $email = $_POST['email'];
    $password = $_POST['password'];

    // Validasi dan autentikasi user
    // Misalnya, validasi user dengan database
    // Contoh ini menggunakan data statis untuk demonstrasi

    $valid_email = 'user@example.com';
    $valid_password = 'password123';

    if ($email == $valid_email && $password == $valid_password) {
        $_SESSION['user_email'] = $email;
        header('Location: ../index.php');
        exit();
    } else {
        // Login gagal
        echo 'Email atau password salah.';
    }
}
?>
