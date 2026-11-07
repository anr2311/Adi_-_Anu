// Countdown uses the venue's local time zone (+05:30, India).
const weddingTime = Date.parse("2026-12-14T11:00:00+05:30");
const timer = document.getElementById("timer");
function updateCountdown() {
  if (!timer) return;
  const remaining = weddingTime - Date.now();
  if (remaining <= 0) {
    timer.innerHTML = '<p class="countdown-title">Our forever begins today. Thank you for celebrating with us!</p>';
    return true;
  }
  const values = [
    Math.floor(remaining / 86400000),
    Math.floor(remaining / 3600000) % 24,
    Math.floor(remaining / 60000) % 60,
    Math.floor(remaining / 1000) % 60
  ];
  const labels = ["Days", "Hours", "Minutes", "Seconds"];
  timer.innerHTML = values.map((value,index) =>
    '<div><strong>' + String(value).padStart(2,"0") + '</strong><span>' + labels[index] + '</span></div>'
  ).join("");
  return false;
}
if (!updateCountdown()) {
  const interval = setInterval(() => { if (updateCountdown()) clearInterval(interval); }, 1000);
}
