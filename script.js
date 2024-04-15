const clock = document.querySelector('.clock');

// Function to create a number element with click event listener
function createNumber(number, url) {
  const numElement = document.createElement('div');
  numElement.classList.add('number');
  numElement.textContent = number;

  // Add click event listener (replace with your navigation logic)
  numElement.addEventListener('click', () => {
    window.location.href = url; // Change URL to your second page
  });

  // Add hover event listener (optional)
  numElement.addEventListener('mouseenter', () => {
    // Add logic to display text on hover (e.g., using tooltips)
  });

  // Calculate position based on number value (replace with your layout logic)
  const angle = Math.PI / 6 * (number - 1);
  const radius = clock.offsetWidth / 2;

  numElement.style.left = radius * Math.cos(angle) + 'px';
  numElement.style.top = radius * Math.sin(angle) + 'px';

  return numElement;
}

// Generate numbers 1-12 and add them to the clock
for (let i = 1; i <= 12; i++) {
  const numberElement = createNumber(i, '#'); // Replace # with actual URL
  clock.appendChild(numberElement);
}
