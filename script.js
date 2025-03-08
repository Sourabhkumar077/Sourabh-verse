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
});
