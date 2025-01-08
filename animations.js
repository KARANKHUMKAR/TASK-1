// animations.js

// GSAP Hero Section Animation
gsap.from(".hero-text", {
    duration: 1.5,
    y: -50,
    opacity: 0,
    ease: "power2.out"
  });
  
  gsap.from(".hero-subtext", {
    duration: 1.5,
    y: 50,
    opacity: 0,
    delay: 0.5,
    ease: "power2.out"
  });
  
  // Scroll-triggered animations for sections
  gsap.registerPlugin(ScrollTrigger);
  
  gsap.from(".about h2", {
    scrollTrigger: ".about",
    duration: 1,
    x: -100,
    opacity: 0,
    ease: "power2.out"
  });
  
  gsap.from(".about p", {
    scrollTrigger: ".about",
    duration: 1,
    x: 100,
    opacity: 0,
    delay: 0.5,
    ease: "power2.out"
  });
  
  gsap.from(".portfolio-item", {
    scrollTrigger: {
      trigger: ".portfolio",
      start: "top 80%",
      toggleActions: "play none none none",
    },
    opacity: 0,
    scale: 0.8,
    stagger: 0.3,
    duration: 1,
    ease: "back.out(1.7)"
  });
  
  // Contact Form Animation
  gsap.from(".contact h2", {
    scrollTrigger: ".contact",
    duration: 1,
    y: -50,
    opacity: 0,
    ease: "power2.out"
  });
  
  gsap.from(".contact form", {
    scrollTrigger: ".contact",
    duration: 1,
    y: 50,
    opacity: 0,
    delay: 0.3,
    ease: "power2.out"
  });
  
  // Smooth Scroll Functionality (Optional)
  document.querySelectorAll("nav ul li a").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth"
      });
    });
  });
  