
document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.getElementById("contact-info-toggle");
    const dropdown = document.getElementById("dropdown-card");

    toggleButton.addEventListener("click", () => {
        dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
        toggleButton.textContent = dropdown.style.display === "block" ? "Hide Contact Info" : "Show Contact Info";
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contact-form");
    const emailInput = document.getElementById("email");
    const emailError = document.getElementById("email-error");

    form.addEventListener("submit", (e) => {
        let isValid = true;

        // Reset error
        emailError.textContent = "";

        const emailValue = emailInput.value.trim();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailValue || !emailPattern.test(emailValue)) {
            emailError.textContent = "Please enter a valid email address.";
            isValid = false;
        }

        if (!isValid) {
            e.preventDefault(); // Stop form from submitting
        }
    });

    // Optional: clear error while typing
    emailInput.addEventListener("input", () => {
        emailError.textContent = "";
    });
});
