document.addEventListener("DOMContentLoaded", function() {
    console.log("Advanced script loaded!");

    // Dynamic greeting message based on time
    const greetingElement = document.querySelector("#greeting");
    if (greetingElement) {
        const hours = new Date().getHours();
        const greetingMessage = hours < 12 ? "Good Morning!" :
                                hours < 18 ? "Good Afternoon!" : "Good Evening!";
        greetingElement.textContent = greetingMessage;
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });
});
