document.addEventListener("DOMContentLoaded", () => {
  const mainElement = document.querySelector("#main");
  if (mainElement) {
    console.log("Main element found");
    const scroll = new LocomotiveScroll({
      el: mainElement,
      smooth: true,
      multiplier: 1,
      lerp: 0.05
    });
  } else {
    console.error('Element with id "main" not found.');
  }

  function firstPageAnimation() {
    let tl = gsap.timeline();
    tl.from("nav", {
      y: "-10",
      opacity: 0,
      duration: 1.7,
      ease: Expo.easeInOut,
    })
      .to(".bounding-text", {
        y: 0,
        duration: 2,
        delay: -1,
        ease: Expo.easeInOut,
        stagger: 0.2,
      })
      .from(".hero-footer", {
        y: -10,
        duration: 1.5,
        delay: -1,
        opacity: 0,
        ease: Expo.easeInOut,
      });
  }
  firstPageAnimation();

  function circleMousePointer() {
    const circle = document.querySelector(".circle-ptr");
    if (circle) {
      let mouseX = 0;
      let mouseY = 0;
      let circleX = 0;
      let circleY = 0;

      document.addEventListener("mousemove", (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
      });

      function animate() {
        // Calculate the distance between mouse and circle
        const dx = mouseX - circleX;
        const dy = mouseY - circleY;
        
        // Smooth movement using lerp
        circleX += dx * 0.2;
        circleY += dy * 0.2;
        
        // Update circle position
        circle.style.left = circleX + "px";
        circle.style.top = circleY + "px";
        
        requestAnimationFrame(animate);
      }

      animate();
    } else {
      console.error('Element with class "circle-ptr" not found.');
    }
  }
  circleMousePointer();

  document.querySelectorAll(".elem").forEach(function (elem) {
    let img = elem.querySelector("img");
    let rect = elem.getBoundingClientRect();
    let projectInfo = elem.querySelector(".project-info");
    
    elem.addEventListener("mouseenter", function () {
      gsap.to(img, {
        opacity: 1,
        scale: 1,
        duration: 0.4,
        ease: "power2.out"
      });
      
      gsap.to(projectInfo, {
        opacity: 1,
        y: 0,
        duration: 0.4,
        delay: 0.1,
        ease: "power2.out"
      });
    });

    elem.addEventListener("mousemove", function (dets) {
      let x = dets.clientX - rect.left;
      let y = dets.clientY - rect.top;
      
      // Calculate the movement range (smaller for subtler effect)
      let moveX = (x - rect.width / 2) * 0.1;
      let moveY = (y - rect.height / 2) * 0.1;
      
      gsap.to(img, {
        x: moveX,
        y: moveY,
        duration: 0.3,
        ease: "power2.out"
      });
    });

    elem.addEventListener("mouseleave", function () {
      gsap.to(img, {
        opacity: 0,
        scale: 0.8,
        x: 0,
        y: 0,
        duration: 0.3,
        ease: "power2.out"
      });
      
      gsap.to(projectInfo, {
        opacity: 0,
        y: 20,
        duration: 0.3,
        ease: "power2.out"
      });
    });
  });

  // Skill Bar Animation
  function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-level');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const level = entry.target.getAttribute('data-level');
          entry.target.style.transform = `scaleX(${level / 100})`;
          entry.target.classList.add('animate');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.2
    });

    skillBars.forEach(bar => {
      observer.observe(bar);
    });
  }

  // Initialize skill bar animations
  document.addEventListener('DOMContentLoaded', () => {
    animateSkillBars();
  });

  // Cursor Animation
  const cursor = document.querySelector(".circle-ptr");
  document.addEventListener("mousemove", (e) => {
    gsap.to(cursor, {
      x: e.clientX,
      y: e.clientY,
      duration: 0.5,
      ease: "power2.out"
    });
  });

  // Add active state to cursor on clickable elements
  const clickables = document.querySelectorAll("a, button, .elem");
  clickables.forEach(element => {
    element.addEventListener("mouseenter", () => {
      cursor.classList.add("active");
    });
    element.addEventListener("mouseleave", () => {
      cursor.classList.remove("active");
    });
  });

  // Scroll Progress Animation
  const scrollProgress = document.querySelector(".scroll-progress");
  window.addEventListener("scroll", () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (window.scrollY / totalHeight) * 100;
    gsap.to(scrollProgress, {
      scaleX: progress / 100,
      duration: 0.1,
      ease: "none"
    });
  });

  // Text Animation with Individual Letter Glow
  const boundingElements = document.querySelectorAll(".bounding");
  boundingElements.forEach((elem) => {
    const text = elem.querySelector(".bounding-text");
    const textContent = text.textContent;
    text.innerHTML = "";
    
    for (let i = 0; i < textContent.length; i++) {
      const span = document.createElement("span");
      span.textContent = textContent[i];
      span.style.opacity = "0";
      span.style.display = "inline-block";
      span.style.transition = "all 0.3s ease";
      text.appendChild(span);
    }
    
    gsap.to(text.children, {
      opacity: 1,
      duration: 0.5,
      stagger: 0.05,
      ease: "power2.out",
      delay: 0.2
    });

    // Add hover effect to each letter with reduced glow
    text.querySelectorAll("span").forEach(letter => {
      letter.addEventListener("mouseenter", () => {
        gsap.to(letter, {
          y: -2,
          textShadow: "0 0 15px rgba(255, 255, 255, 0.3)",
          duration: 0.3,
          ease: "power2.out"
        });
      });

      letter.addEventListener("mouseleave", () => {
        gsap.to(letter, {
          y: 0,
          textShadow: "none",
          duration: 0.3,
          ease: "power2.out"
        });
      });
    });
  });

  // Project Hover Animation
  const projects = document.querySelectorAll(".elem");
  projects.forEach((project) => {
    project.addEventListener("mouseenter", () => {
      gsap.to(project.querySelector("img"), {
        opacity: 1,
        scale: 1,
        duration: 0.5,
        ease: "power2.out"
      });
      gsap.to(project.querySelector(".project-info"), {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power2.out"
      });
    });
    
    project.addEventListener("mouseleave", () => {
      gsap.to(project.querySelector("img"), {
        opacity: 0,
        scale: 0.8,
        duration: 0.5,
        ease: "power2.in"
      });
      gsap.to(project.querySelector(".project-info"), {
        opacity: 0,
        y: 20,
        duration: 0.5,
        ease: "power2.in"
      });
    });
  });

  // Smooth Scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      gsap.to(window, {
        duration: 1,
        scrollTo: {
          y: target,
          offsetY: 50
        },
        ease: "power2.inOut"
      });
    });
  });

  // Parallax Effect
  window.addEventListener("scroll", () => {
    const aboutImage = document.querySelector(".about-content img");
    const scrolled = window.pageYOffset;
    gsap.to(aboutImage, {
      y: scrolled * 0.2,
      duration: 0.5,
      ease: "power2.out"
    });
  });

  // Form Animation
  const formInputs = document.querySelectorAll(".contact-form input, .contact-form textarea");
  formInputs.forEach(input => {
    input.addEventListener("focus", () => {
      gsap.to(input, {
        scale: 1.02,
        duration: 0.3,
        ease: "power2.out"
      });
    });
    
    input.addEventListener("blur", () => {
      gsap.to(input, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out"
      });
    });
  });

  // Social Links Animation
  const socialLinks = document.querySelectorAll(".social-links a");
  socialLinks.forEach(link => {
    link.addEventListener("mouseenter", () => {
      gsap.to(link, {
        y: -5,
        duration: 0.3,
        ease: "power2.out"
      });
    });
    
    link.addEventListener("mouseleave", () => {
      gsap.to(link, {
        y: 0,
        duration: 0.3,
        ease: "power2.out"
      });
    });
  });

  // Update scroll on window resize
  window.addEventListener('resize', () => {
    scroll.update();
  });

  // Timeline Animation
  function initTimeline() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    timelineItems.forEach((item, index) => {
      gsap.from(item, {
        scrollTrigger: {
          trigger: item,
          start: "top 80%",
          toggleActions: "play none none reverse"
        },
        y: 50,
        opacity: 0,
        duration: 1,
        delay: index * 0.2,
        ease: "power2.out"
      });
    });
  }

  // Tech Stack Animation
  function initTechStack() {
    const techIcons = document.querySelectorAll('.tech-icon');
    
    techIcons.forEach((icon, index) => {
      gsap.from(icon, {
        scrollTrigger: {
          trigger: icon,
          start: "top 85%",
          toggleActions: "play none none reverse"
        },
        scale: 0,
        opacity: 0,
        duration: 0.8,
        delay: index * 0.1,
        ease: "back.out(1.7)"
      });
    });
  }

  // Fun Facts Animation
  function initFunFacts() {
    const factCards = document.querySelectorAll('.fact-card');
    
    factCards.forEach((card, index) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
          toggleActions: "play none none reverse"
        },
        y: 30,
        opacity: 0,
        duration: 1,
        delay: index * 0.15,
        ease: "power2.out"
      });
      
      // Animate numbers
      const number = card.querySelector('h3');
      const targetNumber = parseInt(number.textContent);
      gsap.to(number, {
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
          toggleActions: "play none none reverse"
        },
        textContent: targetNumber,
        duration: 2,
        delay: index * 0.15,
        snap: { textContent: 1 },
        ease: "power1.inOut"
      });
    });
  }

  // Initialize all animations
  document.addEventListener('DOMContentLoaded', () => {
    // Existing animations
    initCursor();
    initScrollProgress();
    initTextAnimation();
    initProjectHover();
    initSmoothScroll();
    initParallax();
    initFormAnimations();
    initSocialLinks();
    initLocomotiveScroll();
    
    // New section animations
    initTimeline();
    initTechStack();
    initFunFacts();
  });

  // Navbar functionality
  const navbar = document.querySelector('.navbar');
  const navToggle = document.querySelector('.nav-toggle');
  const navExpand = document.querySelector('.nav-expand');
  const themeToggle = document.querySelector('.theme-toggle');

  // Scroll effect
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Mobile menu toggle
  navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navExpand.classList.toggle('active');
    document.body.style.overflow = navExpand.classList.contains('active') ? 'hidden' : '';
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!navExpand.contains(e.target) && !navToggle.contains(e.target) && navExpand.classList.contains('active')) {
      navToggle.classList.remove('active');
      navExpand.classList.remove('active');
      document.body.style.overflow = '';
    }
  });

  // Close menu when clicking on a link
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navToggle.classList.remove('active');
      navExpand.classList.remove('active');
      document.body.style.overflow = '';
    });
  });

  // Theme toggle animation
  themeToggle.addEventListener('click', () => {
    themeToggle.classList.toggle('active');
    const icon = themeToggle.querySelector('i');
    if (themeToggle.classList.contains('active')) {
      icon.classList.remove('ri-sun-line');
      icon.classList.add('ri-moon-line');
    } else {
      icon.classList.remove('ri-moon-line');
      icon.classList.add('ri-sun-line');
    }
  });
});
