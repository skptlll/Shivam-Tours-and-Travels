function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("active");
}
 // Intersection Observer for fade-in animation
const observer1 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // Trigger only once
      }
    });
  }, {
    threshold: 0.1
  });
  
  // Observe all elements with .animate class
  document.querySelectorAll('.animate').forEach(el => {
    observer.observe(el);
  });
  
  // Scroll reveal effect
  const services = document.querySelectorAll('.service');

  const revealOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.9;
    services.forEach(service => {
      const boxTop = service.getBoundingClientRect().top;
      if (boxTop < triggerBottom) {
        service.classList.add('show');
      }
    });
  };

  window.addEventListener('scroll', revealOnScroll);
  window.addEventListener('load', revealOnScroll);

  // Fade-in animation when scrolling into view
const cards = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, {
  threshold: 0.2
});

cards.forEach(card => observer.observe(card));

const slider = document.getElementById("slider");
const leftArrow = document.querySelector(".arrow-left");
const rightArrow = document.querySelector(".arrow-right");

leftArrow.addEventListener("click", () => {
  slider.scrollBy({ left: -320, behavior: "smooth" });
});

rightArrow.addEventListener("click", () => {
  slider.scrollBy({ left: 320, behavior: "smooth" });
});

// Auto scroll every 3 seconds
setInterval(() => {
  slider.scrollBy({ left: 320, behavior: "smooth" });

  // If reached end, go back to start
  if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth - 5) {
    slider.scrollTo({ left: 0, behavior: "smooth" });
  }
}, 3000);

document.getElementById('bookingForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const destination = document.getElementById('destination').value;
  const date = document.getElementById('date').value;

  if (name && email && destination && date) {
    document.getElementById('successMessage').style.display = 'block';
    this.reset();
  }
});

const slides = document.querySelectorAll('.bg-slide');
let current = 0;

setInterval(() => {
  slides[current].classList.remove('active');
  current = (current + 1) % slides.length;
  slides[current].classList.add('active');
}, 4000); // change every 4 seconds
  