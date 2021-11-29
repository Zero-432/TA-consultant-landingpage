// initialize Splide
document.addEventListener('DOMContentLoaded', function () {
    new Splide('#top-carousel', {
        arrows: false
    }).mount();
    new Splide('#customer_carousel', {
        width: '100%',
        classes: {
            arrow : 'splide__arrow customer-carousel__arrow',
            prev  : 'splide__arrow--prev customer-carousel__arrow--left',
            next  : 'splide__arrow--next customer-carousel__arrow--right',
        },
        grid: {
            rows: 2,
            cols: 3
        },
    }).mount(window.splide.Extensions);
});