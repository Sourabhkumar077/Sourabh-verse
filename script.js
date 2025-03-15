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
        circle.style.left = e.clientX + "px";
        circle.style.top = e.clientY + "px";
      });
    } else {
      console.error('Element with class "circle-ptr" not found.');
    }
  }
  circleMousePointer();

  document.querySelectorAll(".elem").forEach(function (elem) {
    elem.addEventListener("mousemove", function (dets) {
      console.log("Mouse moved over element");

      let diff = dets.clientY - elem.getBoundingClientRect().top;
      console.log(diff);

      gsap.to(elem.querySelector("img"), {
        opacity: 1,
        ease: Power1.easeInOut,
        top: diff,
        left: dets.clientX,
      });
    });
  });
});
