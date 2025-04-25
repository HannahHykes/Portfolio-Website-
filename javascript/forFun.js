document.addEventListener('DOMContentLoaded', () => {
    const lightbox = document.createElement('div');
    lightbox.classList.add('lightbox-overlay');
    document.body.appendChild(lightbox);

    const lightboxImage = document.createElement('img');
    lightbox.appendChild(lightboxImage);

    document.querySelectorAll('.carousel img').forEach(img => {
        img.addEventListener('click', () => {
            lightboxImage.src = img.src;
            lightboxImage.alt = img.alt; // <-- This line ensures accessibility
            lightbox.style.display = 'flex';
        });
    });

    lightbox.addEventListener('click', () => {
        lightbox.style.display = 'none';
    });
});
