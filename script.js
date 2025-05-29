document.addEventListener("DOMContentLoaded", () => {
  const mainElement = document.querySelector("#main");
  if (mainElement) {
    console.log("Main element found");
    const scroll = new LocomotiveScroll({
      el: mainElement,
      smooth: true,
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
      console.log("Circle pointer element found");
      document.addEventListener("mousemove", (e) => {
        circle.style.left = e.pageX + "px";
        circle.style.top = e.pageY + "px";
      });
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

  // Animate skill bars when they come into view
  const skillBars = document.querySelectorAll('.skill-level');
  
  const animateSkillBars = () => {
    skillBars.forEach(bar => {
      const rect = bar.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        bar.classList.add('animate');
      }
    });
  };

  // Initial check
  animateSkillBars();
  
  // Check on scroll
  window.addEventListener('scroll', animateSkillBars);

  // Cursor Animation
  const cursor = document.querySelector(".circle-ptr");
  const main = document.querySelector("#main");

  main.addEventListener("mousemove", function (dets) {
    gsap.to(cursor, {
      x: dets.x,
      y: dets.y,
      duration: 0.3,
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
      duration: 0.3,
      ease: "power2.out"
    });
  });

  // Text Animation
  const bounding = document.querySelectorAll(".bounding");
  bounding.forEach((element) => {
    const text = element.querySelector(".bounding-text");
    const textContent = text.textContent;
    text.innerHTML = "";
    
    for (let i = 0; i < textContent.length; i++) {
      const span = document.createElement("span");
      span.textContent = textContent[i];
      span.style.display = "inline-block";
      text.appendChild(span);
    }
    
    const spans = text.querySelectorAll("span");
    gsap.to(spans, {
      y: 0,
      stagger: 0.05,
      duration: 0.5,
      ease: "back.out(1.7)",
      delay: 0.2
    });
  });

  // Project Hover Animation
  const elems = document.querySelectorAll(".elem");
  elems.forEach((elem) => {
    const img = elem.querySelector("img");
    const projectInfo = elem.querySelector(".project-info");
    
    elem.addEventListener("mouseenter", () => {
      gsap.to(img, {
        opacity: 1,
        scale: 1.05,
        rotate: 1,
        duration: 0.4,
        ease: "power2.out"
      });
      
      gsap.to(projectInfo, {
        opacity: 1,
        y: 0,
        duration: 0.4,
        ease: "power2.out"
      });
    });
    
    elem.addEventListener("mousemove", (e) => {
      const rect = elem.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const moveX = (x - centerX) * 0.1;
      const moveY = (y - centerY) * 0.1;
      
      gsap.to(img, {
        x: moveX,
        y: moveY,
        duration: 0.3,
        ease: "power2.out"
      });
    });
    
    elem.addEventListener("mouseleave", () => {
      gsap.to(img, {
        opacity: 0,
        scale: 0.8,
        rotate: 0,
        x: 0,
        y: 0,
        duration: 0.3,
        ease: "power2.in"
      });
      
      gsap.to(projectInfo, {
        opacity: 0,
        y: 20,
        duration: 0.3,
        ease: "power2.in"
      });
    });
  });

  // Smooth Scroll Animation
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        gsap.to(window, {
          duration: 1,
          scrollTo: {
            y: target,
            offsetY: 50
          },
          ease: "power2.inOut"
        });
      }
    });
  });

  // Parallax Effect for About Section
  const aboutSection = document.querySelector("#about");
  window.addEventListener("scroll", () => {
    const scrolled = window.pageYOffset;
    const aboutImage = aboutSection.querySelector("img");
    
    gsap.to(aboutImage, {
      y: scrolled * 0.1,
      rotation: scrolled * 0.02,
      duration: 0.5,
      ease: "power2.out"
    });
  });

  // Form Animation
  const form = document.querySelector(".contact-form");
  const inputs = form.querySelectorAll("input, textarea");

  inputs.forEach(input => {
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

  // Update Locomotive Scroll on window resize
  window.addEventListener("resize", () => {
    scroll.update();
  });
});
