// Smooth scroll animation
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Fade-in reveal on scroll
const revealElements = document.querySelectorAll('.card-border, .project-card, .exp-card');

function revealOnScroll() {
  const triggerBottom = window.innerHeight * 0.85;
  revealElements.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < triggerBottom) el.classList.add('visible');
  });
}

window.addEventListener('scroll', revealOnScroll);
revealOnScroll();

// Simple form validation and status display
function validateForm() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const status = document.getElementById("form-status");

  if (name === "" || email === "" || message === "") {
    status.textContent = "⚠️ Please fill out all fields.";
    status.style.color = "tomato";
    return false;
  }

  status.textContent = "✅ Message sent successfully! (Demo)";
  status.style.color = "lightgreen";

  // Clear fields after 2 seconds
  setTimeout(() => {
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
    status.textContent = "";
  }, 2000);

  return false; // Prevent real submission for demo
}
