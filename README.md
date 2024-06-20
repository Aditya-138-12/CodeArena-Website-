// File: assets/js/scroll.js

document.addEventListener('DOMContentLoaded', function() {
  // Handler to scroll to the element specified in the URL hash
  function scrollToHash() {
    if (window.location.hash) {
      var hash = window.location.hash.substring(1); // Remove the '#' character
      var element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth' // Optional: Use smooth scrolling
        });
      }
    }
  }

  // Scroll to the element when the hash changes
  window.addEventListener('hashchange', scrollToHash);

  // Scroll to the element on page load (if there's a hash in the URL)
  scrollToHash();
});
