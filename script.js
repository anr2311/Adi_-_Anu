"use strict";

/* IST is encoded explicitly so the invitation counts down correctly worldwide. */
(function () {
  const target = new Date("2026-12-14T11:00:00+05:30").getTime();
  const root = document.getElementById("countdown");
  const label = document.getElementById("countdown-message");
  const units = ["days", "hours", "minutes", "seconds"];

  function updateCountdown() {
    if (!root || !label) return;
    const distance = Math.max(0, target - Date.now());
    const seconds = Math.floor(distance / 1000);
    const values = [
      Math.floor(seconds / 86400),
      Math.floor((seconds % 86400) / 3600),
      Math.floor((seconds % 3600) / 60),
      seconds % 60
    ];
    units.forEach(function (unit, index) {
      const node = root.querySelector('[data-time="' + unit + '"]');
      if (node) node.textContent = String(values[index]).padStart(2, "0");
    });
    if (distance === 0) label.textContent = "Our wedding day is here";
  }

  updateCountdown();
  window.setInterval(updateCountdown, 1000);

  const revealNodes = Array.from(document.querySelectorAll(".reveal"));
  if (!("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    revealNodes.forEach(function (node) { node.classList.add("is-visible"); });
  } else {
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });
    revealNodes.forEach(function (node) { observer.observe(node); });
  }
})();
