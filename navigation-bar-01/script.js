const navLinks = document.querySelectorAll('.navigation a');

navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        navLinks.forEach(link => {
            link.classList.remove('active');
        });
        this.classList.add('active');
    });
});
