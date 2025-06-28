<?php
require 'koneksi.php';

$username = $_POST["username"];
$email = $_POST["email"];
$password_plain = $_POST["password"]; // Password dari form

// VALIDASI SEDERHANA (bisa Anda kembangkan)
if (empty($username) || empty($email) || empty($password_plain)) {
    echo "Semua kolom wajib diisi!";
    exit;
}

// HASH PASSWORD SEBELUM DISIMPAN KE DATABASE
// Ini adalah cara aman untuk menyimpan password
$password_hashed = password_hash($password_plain, PASSWORD_DEFAULT);

// Gunakan PREPARED STATEMENTS untuk mencegah SQL Injection
$query_sql = "INSERT INTO tbl_users (username, email, password) VALUES (?, ?, ?)";
$stmt = mysqli_prepare($conn, $query_sql);

// Bind parameter ke statement
// "sss" berarti ketiga variabel adalah string
mysqli_stmt_bind_param($stmt, "sss", $username, $email, $password_hashed);

// Eksekusi statement
if (mysqli_stmt_execute($stmt)) {
    // Jika berhasil, redirect ke halaman login (index.html)
    header("Location: index.html");
} else {
    // Cek jika error karena email duplikat
    if (mysqli_errno($conn) == 1062) {
        echo "<script>alert('Email sudah terdaftar. Silakan gunakan email lain.'); window.location='register.html';</script>";
    } else {
        echo "Pendaftaran Gagal : " . mysqli_stmt_error($stmt);
    }
}

// Tutup statement
mysqli_stmt_close($stmt);
mysqli_close($conn);
?>