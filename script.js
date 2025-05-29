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
});
