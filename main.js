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

// button return to top
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("button-top").style.display = "block";
  } else {
    document.getElementById("button-top").style.display = "none";
  }
}

// Revenir au début de la page lorsque le bouton est cliqué
function topFunction() {
  document.body.scrollTop = 0; // Pour les navigateurs Safari
  document.documentElement.scrollTop = 0; // Pour les autres navigateurs
}

// AOS
AOS.init();