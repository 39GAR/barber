// ===== Footer year =====
document.getElementById("year").textContent = new Date().getFullYear();

// ===== WhatsApp booking form =====
const form = document.getElementById("booking-form");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    const service = document.getElementById("service").value;

    const phone = "2772XXXXXXX"; // replace with the barber's number without "+"

    const message = `
New Barber Booking:
Name: ${name}
Service: ${service}
Date: ${date}
Time: ${time}
    `.trim();

    const url =
      "https://wa.me/" +
      phone +
      "?text=" +
      encodeURIComponent(message);

    window.open(url, "_blank");
  });
}

// ===== Theme toggle (light/dark) =====
const themeToggleBtn = document.getElementById("theme-toggle");

// Load saved theme from localStorage
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  document.body.classList.add("dark");
  if (themeToggleBtn) themeToggleBtn.textContent = "☀️";
}

if (themeToggleBtn) {
  themeToggleBtn.addEventListener("click", () => {
    const isDark = document.body.classList.toggle("dark");

    // Update button icon
    themeToggleBtn.textContent = isDark ? "☀️" : "🌙";

    // Save preference
    localStorage.setItem("theme", isDark ? "dark" : "light");
  });
}
