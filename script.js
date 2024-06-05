// EMAIL
document.getElementById('copyEmail').addEventListener('click', function() {
    var email = 'theo.dupin03300.pro@gmail.com';
    navigator.clipboard.writeText(email).then(function() {
        showNotification();
        $('.alert').alert('Impossible de copier l\'adresse e-mail');
    }, function() {
        $('.alert').alert('Impossible de copier l\'adresse e-mail');
    });
});

function showNotification() {
    var notification = document.getElementById('notification');
    notification.classList.add('show');
    setTimeout(function() {
        notification.classList.add('hide');
        setTimeout(function() {
            notification.classList.remove('show', 'hide');
        }, 500); // Corresponds to the hide transition duration
    }, 2500); // Change the duration as needed
}

document.addEventListener('DOMContentLoaded', function() {
    var aboutMeLink = document.querySelector('.header-nav a[href="#about-me"]');
    aboutMeLink.addEventListener('click', function(event) {
        event.preventDefault(); // Empêche le comportement par défaut du lien
        var aboutMeSection = document.getElementById('about-me');
        aboutMeSection.scrollIntoView({ behavior: 'smooth' }); // Fait défiler la page jusqu'à la section "À propos de moi" en douceur
    });
});