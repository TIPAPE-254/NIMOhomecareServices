document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu helper if needed (Bootstrap handles most)
    // Add scroll effect to navbar
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('shadow-md');
        } else {
            navbar.classList.remove('shadow-md');
        }
    });

    // Simple fade-in animation on scroll
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
        observer.observe(el);
    });

    // Form Validation Logic
    const hireForm = document.getElementById('hireForm');
    if (hireForm) {
        hireForm.addEventListener('submit', function (event) {
            event.preventDefault();
            event.stopPropagation();

            if (this.checkValidity()) {
                // Determine duration text for the alert
                const durationSelect = document.getElementById('duration');
                const durationText = durationSelect.options[durationSelect.selectedIndex].text;
                const serviceSelect = document.getElementById('serviceType');
                const serviceText = serviceSelect.options[serviceSelect.selectedIndex].text;

                alert(`Thank you! Your request for "${serviceText}" on a "${durationText}" basis has been received. We will contact you shortly.`);
                this.reset();
                this.classList.remove('was-validated');
            } else {
                this.classList.add('was-validated');
            }
        });
    }

});
