document.addEventListener("DOMContentLoaded", function() {
  // Function to handle adding items to the cart and display modal
  function addToCart() {
    // Display the modal
    modal.style.display = "block";
  }

  // Get all the Buy Now buttons
  const buyButtons = document.querySelectorAll('.btn-buy');

  // Attach click event listeners to each Buy Now button
  buyButtons.forEach(button => {
    button.addEventListener('click', addToCart);
  });

  // Get the modal element
  const modal = document.getElementById("myModal");

  // Get the close button element
  const closeButton = document.querySelector(".close");

  // Close the modal when the close button is clicked
  closeButton.addEventListener("click", function() {
    modal.style.display = "none";
  });

  // Close the modal when the user clicks anywhere outside of the modal content
  window.addEventListener("click", function(event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});
