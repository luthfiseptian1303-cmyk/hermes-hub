// Hermes Hub Client Script
document.addEventListener('DOMContentLoaded', () => {
  const uptimeEl = document.getElementById('uptime-counter');
  if (uptimeEl) {
    let seconds = 0;
    setInterval(() => {
      seconds++;
      const mins = Math.floor(seconds / 60);
      const secs = seconds % 60;
      uptimeEl.textContent = `${mins}m ${secs}s`;
    }, 1000);
  }
});
