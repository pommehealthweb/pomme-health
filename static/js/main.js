$('.nav-label').on('click', function () {
  $('nav').toggleClass('menu-active');
  $(this).toggleClass('nav-label-open');
});

// jQuery.
$(function() {
    // Reference the tab links.
    const tabLinks = $('#tab-links li a');
    
    // Handle link clicks.
    tabLinks.click(function(event) {
        var $this = $(this);
        
        // Prevent default click behaviour.
        event.preventDefault();
        
        // Remove the active class from the active link and section.
        $('#tab-links a.active, section.active').removeClass('active');
        
        // Add the active class to the current link and corresponding section.
        $this.addClass('active');
        $($this.attr('href')).addClass('active');
    });
});

$(document).ready(function() {
    $('a#contact-popup').magnificPopup({
      items: {
          src: `<form action="https://formspree.io/f/mjvldwov" method="POST" id="contact-popup" class="wrapper request-form white-popup">
                    <h4>Contact us</h4>

                    <!-- Name -->
                    <input type="text" class="form-spacing" id="fullName" name="fullName" required placeholder="Full Name">

                    <!-- Email -->
                    <input type="email" class="form-spacing" id="email" name="email" required placeholder="E-mail">

                    <!-- Subject -->
                    <input type="text" class="form-spacing" id="subject" name="subject" placeholder="Subject">

                    <!-- Message -->
                    <textarea id="message" class="form-spacing"  name="message" rows="3" required placeholder="Message"></textarea>

                    <!-- Send button -->
                    <button type="submit" class="nav-btn">Send</button>
                </form>`,
          type: 'inline'
      }
    });
});
