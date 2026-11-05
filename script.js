const weddingTime = new Date("2026-12-14T11:00:00+05:30").getTime();
const timer = document.getElementById("timer");
function updateCountdown(){
  const remaining = weddingTime - Date.now();
  if(remaining <= 0){timer.innerHTML = "<p>Today is the special day! Celebrations are underway.</p>";return;}
  const values = [
    Math.floor(remaining / 86400000),
    Math.floor(remaining / 3600000) % 24,
    Math.floor(remaining / 60000) % 60,
    Math.floor(remaining / 1000) % 60
  ];
  const labels = ["Days","Hours","Minutes","Seconds"];
  timer.innerHTML = values.map((value,index) => `<div><b>${String(value).padStart(2,"0")}</b><span>${labels[index]}</span></div>`).join("");
}
updateCountdown();
setInterval(updateCountdown,1000);
