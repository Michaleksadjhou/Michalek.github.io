// Get the heart element
var heart = document.getElementById('heart');

// Add event listeners to track mouse entering and leaving the heart
heart.addEventListener('mouseenter', function() {
  // Increase the size of the heart when mouse enters
  heart.style.transform = 'scale(1.2)';
});

heart.addEventListener('mouseleave', function() {
  // Reset the size of the heart when mouse leaves
  heart.style.transform = 'scale(1)';
});

