<?php
/**
 * Created by PhpStorm.
 * User: user
 * Date: 25/08/2017
 * Time: 10:56
 */
//function to connect with the db using PDO
function connectDb($host,$db,$username,$password,$name,$email,$subject,$message){
    try{
        $conn = new PDO("mysql:host=$host;dbname=$db", $username, $password);
        // set the PDO error mode to exception
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        $query = "INSERT INTO `contacts` 
                  (`NAME`,`email`,`subject`,`message`)
                  VALUES
                  ('$name','$email','$subject','$message')";

        $conn->exec($query);

    }
    catch(PDOException $e){
     echo "failed to execute the query  ".$e->getMessage();
    }
}

//validate the data
function validate_data($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}
