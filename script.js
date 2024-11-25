document.addEventListener('DOMContentLoaded', function() {
  const toggleButton = document.getElementById('toggle-btn');
  const navbar = document.getElementById('navbar');

  // Toggle the 'active' class when the menu button is clicked
  toggleButton.addEventListener('click', function() {
    navbar.classList.toggle('active');
  });
});
