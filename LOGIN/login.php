<?php
// Mulai session di baris paling atas
session_start(); 

require 'koneksi.php';

$email = $_POST["email"];
$password_plain = $_POST["password"]; // Password dari form

// Gunakan PREPARED STATEMENTS untuk mencari user berdasarkan email
$query_sql = "SELECT id_user, email, password FROM tbl_users WHERE email = ?";
$stmt = mysqli_prepare($conn, $query_sql);

// Bind parameter
mysqli_stmt_bind_param($stmt, "s", $email);

// Eksekusi statement
mysqli_stmt_execute($stmt);

// Ambil hasilnya
$result = mysqli_stmt_get_result($stmt);

if ($row = mysqli_fetch_assoc($result)) {
    // Jika email ditemukan, verifikasi password
    // $row['password'] adalah password yang sudah di-hash dari database
    if (password_verify($password_plain, $row['password'])) {
        // Jika password cocok, login berhasil!
        // Simpan informasi pengguna ke dalam session
        $_SESSION['user_id'] = $row['id_user'];
        $_SESSION['user_email'] = $row['email'];
        
        // Redirect ke halaman setelah login
        header("Location: weblogin.html"); // atau halaman dashboard.php
        exit(); // Pastikan untuk exit setelah redirect
    } else {
        // Jika password salah
        echo "<script>alert('Email atau Password Anda Salah. Silahkan Coba Login Kembali.'); window.location='index.html';</script>";
    }
} else {
    // Jika email tidak ditemukan
    echo "<script>alert('Email atau Password Anda Salah. Silahkan Coba Login Kembali.'); window.location='index.html';</script>";
}

mysqli_stmt_close($stmt);
mysqli_close($conn);
?>