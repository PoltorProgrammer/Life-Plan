// Initialize EmailJS
(function() {
  emailjs.init("QxUeTcpoVTh5Q6aVdMHTt"); // Replace with your actual USER_ID from EmailJS
})();

document.getElementById("feedbackForm").addEventListener("submit", function(e) {
  e.preventDefault(); // Prevent default form submission

  // Collect form data
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const feedback = document.getElementById("feedback").value;
  const agree = document.querySelector('input[name="agree"]:checked').value;

  // Send email via EmailJS
  emailjs
    .send("service_ijyhe75", "template_27f57pi", {
      from_name: name,
      reply_to: email,
      message: feedback,
      agree: agree,
    })
    .then(
      function(response) {
        alert("Feedback sent successfully! Thank you.");
        document.getElementById("feedbackForm").reset(); // Reset form
      },
      function(error) {
        alert("An error occurred while sending feedback. Please try again.");
      }
    );
});

// Parallax Scrolling Effect
let lastScrollY = 0;

function parallaxEffect() {
  const scrollPosition = window.scrollY;
  const parallaxSpeed = 0.5; // Adjust for desired speed

  // Apply parallax effect on body::before pseudo-element
  const bodyStyle = document.body.style;
  bodyStyle.setProperty('--parallax-offset', `${scrollPosition * parallaxSpeed}px`);

  lastScrollY = scrollPosition;
  requestAnimationFrame(parallaxEffect);
}

// Start the animation loop
requestAnimationFrame(parallaxEffect);

document.addEventListener("scroll", function () {
  const scrollTop = window.scrollY; // Current scroll position
  document.body.style.backgroundPosition = `center ${scrollTop * 0.04}px`; // Adjust the multiplier for speed
});


document.getElementById("feedbackForm").addEventListener("submit", function(e) {
  e.preventDefault(); // Prevent default form submission

  // Collect form data
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const feedback = document.getElementById("feedback").value;
  const agree = document.querySelector('input[name="agree"]:checked').value;
  
  // Collect all selected checkboxes
  const nextSteps = Array.from(document.querySelectorAll('input[name="nextSteps"]:checked'))
    .map(option => option.value)
    .join(", "); // Join selected values into a single string

  // Send email via EmailJS
  emailjs
    .send("service_ijyhe75", "template_27f57pi", {
      from_name: name,
      reply_to: email,
      message: feedback,
      agree: agree,
      next_steps: nextSteps,
    })
    .then(
      function(response) {
        alert("Feedback sent successfully! Thank you.");
        document.getElementById("feedbackForm").reset(); // Reset form
      },
      function(error) {
        alert("An error occurred while sending feedback. Please try again.");
      }
    );
});
