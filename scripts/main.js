document.addEventListener('DOMContentLoaded', function () {
    var splide = new Splide('.splide',
        {
            type: 'loop',
            autoplay: true,
            height: '90vh',
            cover: true,
            heightRatio: 0.5,
            breakpoints: {
                640: {
                    height: '60vh',
                },
                1023: {
                    height: '60vh',
                }
            }
        });
    splide.mount();
});