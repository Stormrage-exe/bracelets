document.addEventListener('DOMContentLoaded', function() {
    const carouselTrack = document.querySelector('.carousel-track');
    const items = document.querySelectorAll('.carousel-item');
    const itemWidth = 250;
    const gap = 32; 

    items.forEach(item => {
        carouselTrack.appendChild(item.cloneNode(true));
    });
    

    const totalWidth = (items.length * (itemWidth + gap));
    const viewportWidth = window.innerWidth;
    const speed = 50; // 
    const duration = totalWidth / speed;
    

    carouselTrack.style.animationDuration = `${duration}s`;
    

    carouselTrack.addEventListener('animationiteration', () => {
        carouselTrack.style.transition = 'none';
        carouselTrack.style.transform = 'translateX(0)';
        setTimeout(() => {
            carouselTrack.style.transition = '';
        }, 10);
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const track = document.querySelector('.carousel-track');
    const items = document.querySelectorAll('.carousel-item');
    

    items.forEach(item => {
        track.appendChild(item.cloneNode(true));
    });
    

    track.addEventListener('animationiteration', () => {
        track.style.transition = 'none';
        track.style.transform = 'translateX(0)';
        setTimeout(() => {
            track.style.transition = '';
        }, 10);
    });
});