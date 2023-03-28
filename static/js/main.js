$(".nav-label").on("click", function () {
  $("nav").toggleClass("menu-active");
  $(this).toggleClass("nav-label-open");
});

// jQuery.
$(function () {
  // Reference the tab links.
  const tabLinks = $("#tab-links li a");

  // Handle link clicks.
  tabLinks.click(function (event) {
    var $this = $(this);

    // Prevent default click behaviour.
    event.preventDefault();

    // Remove the active class from the active link and section.
    $("#tab-links a.active, section.active").removeClass("active");

    // Add the active class to the current link and corresponding section.
    $this.addClass("active");
    $($this.attr("href")).addClass("active");
  });
});

$(document).ready(function () {
  $("a#contact-popup").magnificPopup({
    items: {
      src: `<section class="wrapper push-2 contact-form">
                  <a href="#" class="closeButton" id="close-btn"><i class="fa fa-times" aria-hidden="true"></i></a>
                  <div class="grid pop-up-padding justify-even">
                    <div class="unit s-1 m-1-3 pt-1">
                      <div class="text-center">
                        <a class="logo logo-contact" href="/"><img class="img-flex logo" src="/images/pomme-logo.png" alt="POMMe-Health coloured logo"></a>
                      </div>
                      <p class="text-center">POMMe-Health delivers a <br> communication
                      platform that<br>
                      eliminates gaps in healthcare.</p>
                      <div class="mt-4">
                        <p class="text-center">For more information please <br> email us:</p>
                        <div class="text-center">
                          <a class="email-us" href="mailto:info@pomme-health.com"><small class="text-center">info@pomme-health.com</small></a>
                        </div>
                        <div class="text-center pt-1">
                          <a target="_blank" href="https://www.linkedin.com/company/pomme-health/">
                            <i class="icon i-32"><img src="/images/linkedin.svg"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="unit s-1 m-2-3">
                      <form action="https://formsubmit.co/demo@pomme-health.com" method="POST" id="contact-popup" class="wrapper request-form white-popup">
                        <h3 class="request-demo">Request a Demo Today!</h3>
                        <input type="text" class="form-spacing f-18" id="fullName" name="name" required placeholder="Full Name">
                        <input type="email" class="form-spacing f-18" id="email" name="email" required placeholder="Email">
                        <input type="text" class="form-spacing f-18" id="subject" name="subject" value="Request a Demo" placeholder="Request a Demo" disabled>
                        <textarea id="message" class="form-spacing f-18" name="message" rows="3" required placeholder="Message"></textarea>
                        <button type="submit" class="nav-btn center">Send</button>
                      </form>
                    </div>
                  </div>
                </section>`,
      type: "inline",
    },
    callbacks: {
      open: function() { 
          $('#close-btn').on('click',function(event){
            event.preventDefault();
            $.magnificPopup.close();
          }); 
      }
    }
  });
});

$(document).ready(function () {
  $("a#pilot-popup").magnificPopup({
    items: {
      src: `<section class="wrapper push-2 contact-form">
              <a href="#" class="closeButton" id="close-btn"><i class="fa fa-times" aria-hidden="true"></i></a>
              <div class="grid pop-up-padding justify-even">
                <div class="unit s-1 m-1-3 pt-1">
                  <div class="text-center">
                    <a class="logo logo-contact" href="/"><img class="img-flex logo" src="/images/pomme-logo.png" alt="POMMe-Health coloured logo"></a>
                  </div>
                  <p class="text-center">POMMe-Health delivers a <br> communication
                  platform that<br>
                  eliminates gaps in healthcare.</p>
                  <div class="mt-4">
                    <p class="text-center">For more information please <br> email us:</p>
                    <div class="text-center">
                      <a class="email-us" href="mailto:info@pomme-health.com"><small class="text-center">info@pomme-health.com</small></a>
                    </div>
                    <div class="text-center pt-1">
                      <a target="_blank" href="https://www.linkedin.com/company/pomme-health/">
                        <i class="icon i-32"><img src="/images/linkedin.svg"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="unit s-1 m-2-3">
                  <form action="https://formsubmit.co/demo@pomme-health.com" method="POST" id="contact-popup" class="wrapper request-form white-popup">
                    <h3 class="request-demo">Start a Pilot Project Today!</h3>
                    <input type="text" class="form-spacing f-18" id="fullName" name="name" required placeholder="Full Name">
                    <input type="email" class="form-spacing f-18" id="email" name="email" required placeholder="Email">
                    <input type="text" class="form-spacing f-18" id="subject" name="subject" value="Start a Pilot Project" placeholder="Start a Pilot Project" disabled>
                    <textarea id="message" class="form-spacing f-18" name="message" rows="3" required placeholder="Message"></textarea>
                    <button type="submit" class="nav-btn center">Send</button>
                  </form>
                </div>
              </div>
            </section>`,
      type: "inline",
    },
    callbacks: {
      open: function() { 
          $('#close-btn').on('click',function(event){
            event.preventDefault();
            $.magnificPopup.close();
          }); 
      }
    }
  });
});

$(document).ready(function () {
  $("a#focus-popup").magnificPopup({
    items: {
      src: `<section class="wrapper push-2 contact-form">
              <a href="#" class="closeButton" id="close-btn"><i class="fa fa-times" aria-hidden="true"></i></a>
              <div class="grid pop-up-padding justify-even">
                <div class="unit s-1 m-1-3 pt-1">
                  <div class="text-center">
                    <a class="logo logo-contact" href="/"><img class="img-flex logo" src="/images/pomme-logo.png" alt="POMMe-Health coloured logo"></a>
                  </div>
                  <p class="text-center">POMMe-Health delivers a <br> communication
                  platform that<br>
                  eliminates gaps in healthcare.</p>
                  <div class="mt-4">
                    <p class="text-center">For more information please <br> email us:</p>
                    <div class="text-center">
                      <a class="email-us" href="mailto:info@pomme-health.com"><small class="text-center">info@pomme-health.com</small></a>
                    </div>
                    <div class="text-center pt-1">
                      <a target="_blank" href="https://www.linkedin.com/company/pomme-health/">
                        <i class="icon i-32"><img src="/images/linkedin.svg"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="unit s-1 m-2-3">
                  <form action="https://formsubmit.co/demo@pomme-health.com" method="POST" id="contact-popup" class="wrapper request-form white-popup">
                    <h3 class="request-demo">Join a Focus Group Today!</h3>
                    <input type="text" class="form-spacing f-18" id="fullName" name="name" required placeholder="Full Name">
                    <input type="email" class="form-spacing f-18" id="email" name="email" required placeholder="Email">
                    <input type="text" class="form-spacing f-18" id="subject" name="subject" value="Join a Focus Group" placeholder="Join a Focus Group" disabled>
                    <textarea id="message" class="form-spacing f-18" name="message" rows="3" required placeholder="Message"></textarea>
                    <button type="submit" class="nav-btn center">Send</button>
                  </form>
                </div>
              </div>
            </section>`,
      type: "inline",
    },
    callbacks: {
      open: function() { 
          $('#close-btn').on('click',function(event){
            event.preventDefault();
            $.magnificPopup.close();
          }); 
      }
    }
  });
});