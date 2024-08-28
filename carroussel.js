// Sélection des éléments
const carouselPartie2 = document.querySelector('.partie-2');
const carouselPartie3 = document.querySelector('.partie-3');
const carouselPartie4 = document.querySelector('.partie-4');
const barreDefilement = document.querySelector('.barre-defilement');
const indicateur = document.querySelector('.indicateur');

// Fonction pour étirer les images sur leur gauche
function etirerImage(image) {
  image.style.transform = 'scaleX(1.3)';
  image.style.transformOrigin = 'right'; // Étirement depuis la droite
  image.style.transition = 'transform 0.5s ease-in-out';
  setTimeout(() => {
    image.style.transform = 'scaleX(1)';
    image.style.transition = 'transform 1.5s'; // Réinitialisation de la transition
  }, 2000);
}

// Fonction pour animer la barre de défilement
function animerBarreDefilement() {
  const largeurBarre = barreDefilement.offsetWidth;
  const largeurIndicateur = indicateur.offsetWidth;
  const pourcentage = (largeurIndicateur / largeurBarre) * 100;
  indicateur.style.transform = `translateX(${pourcentage}%)`;
}

// Fonction pour mettre à jour la barre de défilement
// Fonction pour mettre à jour la barre de défilement
function mettreAJourBarreDefilement() {
    var totalSlides = carouselPartie2.querySelectorAll('.carousel-item').length;
    var slideWidth = 300 / totalSlides; // Largeur en pourcentage pour chaque slide
    var currentSlideIndex = Array.from(carouselPartie2.querySelectorAll('.carousel-item')).indexOf(carouselPartie2.querySelector('.carousel-item.active'));
    var positionPercentage = slideWidth * currentSlideIndex;
    indicateur.style.transition = 'transform 0.8s ease-in-out'; // Transition fluide pour l'indicateur
    indicateur.style.transform = `translateX(${positionPercentage}%)`;
    
    // Si l'indicateur a atteint la fin de la barre, le faire revenir au début après 3 transitions
    var transitionCount = parseInt(indicateur.getAttribute('data-transition-count')) || 0;
    if (currentSlideIndex === totalSlides - 1) {
      transitionCount++;
      if (transitionCount >= 5) {
        indicateur.style.transform = 'translateX(0%)';
        transitionCount = 0;
      }
    }
    indicateur.setAttribute('data-transition-count', transitionCount);
  }
// Événement pour étirer les images sur leur gauche au départ et à l'arrivée
carouselPartie2.addEventListener('slid.bs.carousel', () => {
  mettreAJourBarreDefilement();
  const imageActive = carouselPartie2.querySelector('.carousel-item.active img');
  etirerImage(imageActive);
});

carouselPartie3.addEventListener('slid.bs.carousel', () => {
  mettreAJourBarreDefilement();
  const imageActive = carouselPartie3.querySelector('.carousel-item.active img');
  etirerImage(imageActive);
});

carouselPartie4.addEventListener('slid.bs.carousel', () => {
  const imageActive = carouselPartie4.querySelector('.carousel-item.active img');
  etirerImage(imageActive);
});

// Événement pour animer la barre de défilement
carouselPartie2.addEventListener('slid.bs.carousel', mettreAJourBarreDefilement);
carouselPartie3.addEventListener('slid.bs.carousel', mettreAJourBarreDefilement);

// Initialisation de la barre de défilement
animerBarreDefilement();

