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

    function firstPageAnimation(){
        let tl = gsap.timeline();
        tl.from("nav",{
            y:"-10",
            opacity:0,
            duration:1.7,
            ease:Expo.easeInOut
        })

        .to(".bounding-text",{
            y:0,
            duration:2,
            delay:-1,
            ease:Expo.easeInOut,
            stagger:0.2
        })
        .from(".hero-footer",{
            y:-10,
            duration:1.5,
            delay:-1,
            opacity:0,
            ease:Expo.easeInOut,
            // stagger:0.2
        })
    }
    firstPageAnimation();


    function circleMousePointer() {
        const circle = document.querySelector('.circle-ptr');
        if (circle) {
            document.addEventListener('mousemove', (e) => {
                circle.style.left = e.clientX+ 5 + 'px';
                circle.style.top = e.clientY +5+ 'px';
            });
        } else {
            console.error('Element with class "circle-ptr" not found.');
        }
    }
    circleMousePointer();

});
