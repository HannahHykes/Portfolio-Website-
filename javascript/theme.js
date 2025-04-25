document.addEventListener("DOMContentLoaded", () => {
    const toggleBtn = document.querySelector(".toggle-theme");
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      document.body.classList.add("dark-mode");
      if (toggleBtn) toggleBtn.textContent = "🌞";
    }
  
    toggleBtn?.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
      const isDark = document.body.classList.contains("dark-mode");
      localStorage.setItem("theme", isDark ? "dark" : "light");
      toggleBtn.textContent = isDark ? "🌞" : "🌙";
    });
  });
  