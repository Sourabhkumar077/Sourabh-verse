document.addEventListener('DOMContentLoaded', () => {
    const mainElement = document.querySelector('#main');
    if (mainElement) {
        const scroll = new LocomotiveScroll({
            el: mainElement,
            smooth: true
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
            ease: Expo.easeInOut
        })

            .to(".bounding-text", {
                y: 0,
                duration: 2,
                delay: -1,
                ease: Expo.easeInOut,
                stagger: 0.2
            })
            .from(".hero-footer", {
                y: -10,
                duration: 1.5,
                delay: -1,
                opacity: 0,
                ease: Expo.easeInOut,
                // stagger:0.2
            })
    }
    firstPageAnimation();


    function circleMousePointer() {
        const circle = document.querySelector('.circle-ptr');
        if (circle) {
            document.addEventListener('mousemove', (e) => {
                circle.style.left = e.clientX + 'px';
                circle.style.top = e.clientY + 'px';
            });
        } else {
            console.error('Element with class "circle-ptr" not found.');
        }
    }
    circleMousePointer();


    document.querySelectorAll('.elem').forEach(function (elem) {
        elem.addEventListener('mousemove', function (dets) {
            // console.log("hello mouse ji")
            // console.log(dets);
            gsap.to(elem.querySelector("img"), {
                opacity: 1,
                ease:Power1,
            })
        })
    });


});
// function circleSqueezeEffect() {
//     // define default values
//     let xScale = 1;
//     let yScale = 1;


//     let xPrev = 0;
//     let yPrev = 0;

//     window.addEventListener('mousemove', (e) => {
//         xPrev = e.clientX;
//         yPrev = e.clientY;
//     });
// }



