// Step 1: Get the form element
const form = document.getElementById('registrationForm');

// Step 2: Add event listener for 'submit'
form.addEventListener('submit', function(event) {
  // Step 3: Prevent default form submission (page reload)
  event.preventDefault();

  // Step 4: Collect form data
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const selectedEvent = document.getElementById('event').value;

  // Step 5: Handle the event (show confirmation)
  alert("Thank you, " + name + "! You have registered for the " + selectedEvent + ".\nConfirmation sent to: " + email);
  //Add the code for the validation
});
