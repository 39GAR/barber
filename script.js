// Set current year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// Handle booking form submit
const form = document.getElementById("booking-form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;
  const service = document.getElementById("service").value;

  const phone = "27826391818"; // e.g. 27721234567

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
