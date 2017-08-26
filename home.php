<!DOCTYPE html>

<html lang="en">
    <!-------------------------- the head tag------------------------------------------>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->

        <link rel="stylesheet" type="text/css" href="CreativeLinkEffects/css/demo.css" />
        <link rel="stylesheet" type="text/css" href="CreativeLinkEffects/css/component.css" />

        <link rel="stylesheet" href="jquery-ui-1.12.1.custom/jquery-ui.css">
        <link rel="stylesheet" href="jquery-ui-1.12.1.custom/jquery-ui.theme.css">

        <!-- Bootstrap -->
        <link href="bootstrap-3.3.7-dist/css/bootstrap.min.css" rel="stylesheet">

        <!-- normalize css-->
        <link href="css/normalize.css" rel="stylesheet">

        <!-- font awesome -->
        <link rel="stylesheet" href="css/font-awesome.min.css">

        <link rel="stylesheet" href="animate.css-master/animate.css">
        <!-- my style css-->
        <link rel="stylesheet" href="css/home_style.css" >
        <link rel="stylesheet" href="css/responsive_home_style1.css" >



        <!-- font links -->
        <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Signika" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">




        <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
        <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
        <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
        <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
        <![endif]-->

        <title>Home</title>
    </head>
    <!----------------------------- the body tag--------------------------------------->
    <body>

         <!-- include the header php-->
         <?php        include ("php/header.php");    ?>

         <div class="row" id="nav-row">

             <nav class="navbar navbar-default  col-lg-offset-0 col-md-offset-0  row">
                 <div class="container-fluid col-lg-offset-1 col-md-offset-1" id="navbar-background">

                     <!-- Brand and toggle get grouped for better mobile display -->
                     <div class="navbar-header">

                         <button type="button" class="navbar-toggle collapsed"
                                 data-toggle="collapse" data-target="#target1"
                                 aria-expanded="false">
                             <span class="sr-only">Toggle navigation</span>
                             <span class="icon-bar"></span>
                             <span class="icon-bar"></span>
                             <span class="icon-bar"></span>
                         </button>
                         <a class="navbar-brand" href="#">Bennour Aymen</a>
                     </div><!-- end of the navbar-header div-->

                     <!-- Collect the nav links, forms, and other content for toggling -->
                     <div class="collapse navbar-collapse" id="target1">
                         <ul class="nav navbar-nav " id="main-nav">


                             <li class="main-nav-list " id="link-1"><a href="#about-div">About Me</a></li>

                             <li class="main-nav-list" id="link-2"><a href="#services1-div">Services</a></li>

                             <li class="main-nav-list" id="link-3"><a href="#skills-div">Skills</a></li>

                             <li class="main-nav-list  active" id="link-4"><a href="#contact-div">Contact</a></li>

                             <li class="main-nav-list" id="link-5"><a href="#">Blog</a></li>
                         </ul><!-- end for the main nav list-->

                     </div><!-- end of the navba-collapse-->

                 </div>
             </nav><!-- end of the nav tag-->

         </div><!-- end of the first row div-->


         <!-- include the about php -->
         <?php        include("php/about.php");    ?>

         <!--?php        include ("php/services.php");       ?-->

         <?php        include ("php/services1.php");       ?>

         <?php        include ("php/skills.php");       ?>

         <?php        include ("php/contact.php");       ?>

         <?php        include ("php/dialog.php");       ?>


         <?php        include ("php/footer.php");       ?>

         <!-- Return to Top -->
             <a href="#" id="return-to-top"><i class="fa fa-arrow-up fa-5x" aria-hidden="true"></i>
             </a>

    <!-- js scripts ------------------------------>

    <!-- jquery script-->
    <script src="js_files/jquery-3.1.1.js"></script>

    <!-- jquery ui script-->
    <script src="jquery-ui-1.12.1.custom/jquery-ui.js"></script>
       <!-- bootstrap script-->
       <script type="text/javascript" src="bootstrap-3.3.7-dist/js/bootstrap.js"></script>

         <script src="CreativeLinkEffects/js/modernizr.custom.js"></script>

         <script src="jquery-circle-progress-master/dist/circle-progress.js"></script>

         <script src="jquery.appear-master/jquery.appear.js"></script>

         <script src="jquery-validation-master/src/core.js"></script>

    <!-- my js script-->
    <script src="js_files/js_home.js"></script>

    </body><!-- end of the body tag -------------->


</html><!-- end of the document-->