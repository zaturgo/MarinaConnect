<?php
session_start();
/**
 * Created by PhpStorm.
 * User: Florent
 * Date: 07/09/2018
 * Time: 14:33
 */
if (!(isset($_SESSION['pseudo']))){
    header('Location: connexion.php');
    exit();
}
?>


<!DOCTYPE html>
<html lang="en" class="h-100" style="font-family: 'Roboto', sans-serif;">
<head>
    <meta charset="UTF-8">
    <title>MarinaConnect</title>

    <link rel="icon" href="../img/marina.ico">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
    <link href='http://fonts.googleapis.com/css?family=Roboto' rel='stylesheet' type='text/css'>
    <link rel="stylesheet" href="https://www.w3schools.com/lib/w3-theme-blue.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"></script>
    <link rel='stylesheet' href='../lib/FullCalendar/fullcalendar.css' />
    <script src='../lib/FullCalendar/jquery-3.3.1.min.js'></script>
    <script src='../lib/FullCalendar/moment.js'></script>
    <script src='../lib/FullCalendar/fullcalendar.js'></script>


</head>
<body class="h-100" style="background-color: #E1F5FE;font-family: 'Roboto', sans-serif;">
<div class="w3-top">
    <div class="w3-bar w3-theme w3-top w3-left-align w3-large">
        <a href="index.php" class="w3-bar-item w3-button w3-theme-l1">Marina Connect&trade;</a>
        <a href="deconnexion.php" class="w3-bar-item w3-button w3-theme-l1 w3-right w3-hide-small">Se déconnecter
            <a href="partieClient.php" class="w3-bar-item w3-button w3-theme-l1 w3-right w3-hide-small">Mon compte</a>
            <a class="w3-bar-item w3-button w3-right w3-hide-large  w3-hide-medium w3-hover-white w3-large w3-theme-l1" href="javascript:void(0)" onclick="w3_open()"><i class="fa fa-bars"></i></a>

    </div>
</div>
<div class=" w3-hide-large">
<nav class="w3-sidebar w3-bar-block w3-collapse w3-large w3-theme-l5 w3-animate-left"  id="mySidebar">
    <a href="javascript:void(0)" onclick="w3_close()" class="w3-right w3-xlarge w3-padding-large w3-hover-black w3-hide-large" title="Close Menu">
        <i class="fa fa-remove"></i>
    </a>
    <h4 class="w3-bar-item"><b>Menu</b></h4>
    <a class="w3-bar-item w3-button w3-hover-black" href="partieClient.php">Mon compte</a>
    <a class="w3-bar-item w3-button w3-hover-black" href="deconnexion.php">Se déconnecter</a>
</nav>
</div>
<div class=" w3-hide-large" onclick="w3_close()" style="cursor:pointer" title="close side menu" id="myOverlay"></div>

<script>
    // Get the Sidebar
    var mySidebar = document.getElementById("mySidebar");

    // Get the DIV with overlay effect
    var overlayBg = document.getElementById("myOverlay");

    // Toggle between showing and hiding the sidebar, and add overlay effect
    function w3_open() {
        if (mySidebar.style.display === 'block') {
            mySidebar.style.display = 'none';
            overlayBg.style.display = "none";
        } else {
            mySidebar.style.display = 'block';
            overlayBg.style.display = "block";
        }
    }

    // Close the sidebar with the close button
    function w3_close() {
        mySidebar.style.display = "none";
        overlayBg.style.display = "none";
    }
</script>

<div class="w3-content w3-padding-64 shadow w3-mobile" style="min-height: 95.2%; background-color: white;">

