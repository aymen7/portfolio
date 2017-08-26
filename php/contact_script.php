<?php
/**
 * Created by PhpStorm.
 * User: user
 * Date: 25/08/2017
 * Time: 10:44
 */
//include the functions php
include ("functions.php");
//declare the variables
$host="localhost";
$db="portfolio";
$username="root";
$password="";
//call the connectDb() to connect to dataBase

$errors = [];
$name = isset($_POST['name_input']) ? $_POST['name_input'] : '';
if (empty($name))
    $errors[] = 'name is empty';

$email = isset($_POST['email_input']) ? $_POST['email_input'] : '';
if (empty($email))
    $errors[] = 'email is empty';

$subject = isset($_POST['subject_input']) ? $_POST['subject_input'] : '';
if (empty($subject))
    $errors[] = 'subject is empty';

$message = isset($_POST['message']) ? $_POST['message'] : '';
if (empty($message))
    $errors[] = 'message is empty';
if($errors){
    foreach ($errors as $error) {
        echo $error ."<br>";
}
}

if(empty($errors)){
  $name=validate_data($name);
  $email=validate_data($email);
  $subject=validate_data($subject);
  $message=validate_data($message);


    connectDb($host,$db,$username,$password,$name,$email,$subject,$message);

}



