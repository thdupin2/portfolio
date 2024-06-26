// EMAIL
document.getElementById('openGmail').addEventListener('click', function() {
    var email = 'theo.dupin03300.pro@gmail.com';
    var gmailLink = 'https://mail.google.com/mail/?view=cm&fs=1&to=' + email;

    // Essayer d'ouvrir le lien Gmail
    window.open(gmailLink, '_blank');
});

// CV
document.getElementById('downloadButton').addEventListener('click', function() {
    document.getElementById('downloadCV').click();
});

document.addEventListener('DOMContentLoaded', function() {
    var aboutMeLink = document.querySelector('.header-nav a[href="#about-me"]');
    aboutMeLink.addEventListener('click', function(event) {
        event.preventDefault(); // Empêche le comportement par défaut du lien
        var aboutMeSection = document.getElementById('about-me');
        aboutMeSection.scrollIntoView({ behavior: 'smooth' }); // Fait défiler la page jusqu'à la section "À propos de moi" en douceur
    });
});

// AOS
AOS.init();