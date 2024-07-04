<?php
require 'koneksi.php';
$email = $_POST["email"];
$password = $_POST["password"];

$query_sql = "SELECT * FROM table_user 
            WHERE email = '$email' AND password = '$password'";

$result = mysqli_query($conn, $query_sql);

if (mysqli_num_rows($result) > 0) {
    header("Location: weblogin.html");
} else {    
    echo "<script>alert('Email atau Password Anda Salah. Silahkan Coba Login Kembali.'); window.location='index.html';</script>";
}
?>
