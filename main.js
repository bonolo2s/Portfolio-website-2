var typed = new Typed(".roles",{
  strings: [
    "a Software Developer.",
    "an API and Backend Developer.",
    "a Cloud and DevOps Enthusiast.",
    "an End-to-End Solution Owner.",
    "an Infrastructure and Automation Specialist."
  ],
    typeSpeed: 60,
    backSpeed: 10,
    backDelay: 1000,
    loop: true
  })
  
  /*gsap.to(".about-container", {
    duration: 2, // animation will take 2 seconds
    x: 0, // move the box 0px to the right
    ease: "bounce", // use a bounce easing function
    scrollTrigger: {
      trigger: ".trigger",
      start: "top bottom",
      end: "+=500",
      scrub: true
    }
  });*/
  
  const menuIcon = document.querySelector('.menuIcon');
  menuIcon.addEventListener('click', function() {
    const menuLinks = document.querySelector('.hidden-nav-container');
    menuLinks.classList.toggle('open')
    this.classList.toggle('open');
  });
