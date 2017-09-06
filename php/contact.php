<div class="container-fluid " id="contact-div">
    <div class="row" id="contact-div-title">
        <h1><b>Contact Me</b></h1>
    </div><!-- end of the title div-->
    <div id="contact-form-wraper" class="col-lg-8 col-md-8 col-lg-offset-2 col-md-offset-2">
        <form id="contact-form" class="animated fadeIn"  method="post">
                <div class="form-group">
                <input type="text" class="form-control" id="name_input"  name="name_input" placeholder="Your Name" required
                pattern="^[A-Za-z\s]{1,}[\.]{0,1}[A-Za-z\s]{0,}$" minlength="4" maxlength="50">
                    <label class="tip"></label>
                </div>
                <div class="form-group">
                <input type="email" class="form-control" id="email_input"  name="email_input" placeholder="Your Email" required
                       pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$">
                    <label class="tip"></label>
                </div>
                <div class="form-group">
                <input type="text" class="form-control" id="subject_input"  name="subject_input" placeholder="Your Subject" required
                       pattern="^[A-Za-z\s]{1,}[\.]{0,1}[A-Za-z\s]{0,}$" minlength="4" maxlength="30">
                    <label class="tip"></label>
                </div>
            <div class="form-group">
            <textarea id="message" name="message" class="form-control" rows="5" cols="5" placeholder="Your Message ...." required></textarea>
            </div>
            <button type="submit" class="btn btn-primary" id="submit_btn" name="submit_btn" >
                <span>Submit</span><i class="fa fa-paper-plane" aria-hidden="true"></i> <i class="fa fa-check hidden" aria-hidden="true"></i></button>
        </form>
    </div><!-- end of the contact form wraper-->


</div><!-- end of the contact div-->