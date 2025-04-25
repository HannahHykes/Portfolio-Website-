document.addEventListener("DOMContentLoaded", () => {
    const thumbnail = document.getElementById("resume-thumbnail");
    const lightbox = document.getElementById("resume-lightbox");

    thumbnail.addEventListener("click", () => {
      lightbox.style.display = "flex";
    });

    lightbox.addEventListener("click", () => {
      lightbox.style.display = "none";
    });
  });