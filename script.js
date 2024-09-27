// Function to display the current date and time
function updateTime() {
  const now = new Date();

  // Get current date
  const date = now.toLocaleDateString();

  // Get current time with seconds
  const time = now.toLocaleTimeString();

  // Update the DOM with date and time
  document.getElementById('date').innerText = `Date: ${date}`;
  document.getElementById('time').innerText = `Time: ${time}`;
}

// Call updateTime every second to update time in real time
setInterval(updateTime, 1000);

// Initial call to display immediately
updateTime();
