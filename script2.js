const numbers = document.querySelectorAll('.number');

numbers.forEach(number => {
  number.addEventListener('click', () => {
    // Simulate audio play for now (replace with your audio playing logic)
    alert(`Playing audio for number: ${number.textContent}`);
  });
});
