//changement du lien si le wiki n'etais pas en fr
document.querySelector('a').href = "https://fr.wikipedia.org/wiki/Accueil";


//ajout message si pas Oui ou Non
document.querySelector('form').addEventListener('submit', function(e) {
    const inputText = this.querySelector('input[type="text"]');
    if (inputText.value !== "Oui" && inputText.value !== "Non") {
        e.preventDefault();
        inputText.value = "Il faut mettre Oui ou Non";
    }
});

//ajout label devant les bouton radio 
document.getElementById('choix1').nextSibling.textContent = "HP ";
document.getElementById('choix2').nextSibling.textContent = "Casque ";
document.getElementById('choix3').nextSibling.textContent = "Bluetooth ";


//changement de nom en fonction du bouton radio
document.querySelectorAll('input[name="choix"]').forEach(function(radio) {
    radio.addEventListener('change', function() {

        let volumeLabel = document.querySelector('input[type="range"]').nextElementSibling;
        if (this.value == "1") {
            volumeLabel.textContent = "Volume HP";
        } else if (this.value == "2") {
            volumeLabel.textContent = "Volume Casque";
        } else if (this.value == "3") {
            volumeLabel.textContent = "Volume Bluetooth";
        }
    });
});

//changement volume max
const range = document.querySelector('input[type="range"]');
range.max = 100;
console.log("Valeur max du volume :", range.max);

//affichage valeur volume
range.addEventListener('input', function() {
    document.getElementById('valeur-volume').textContent = this.value;
});

//modif case a cocher
document.querySelector('label[for="mute"]').textContent = "Mute";

//fonctionnalité mute
document.getElementById('mute').addEventListener('change', function() {
    const rangeInput = document.querySelector('input[type="range"]');
    if (this.checked) {
        rangeInput.disabled = true;
    } else {
        rangeInput.disabled = false;
    }
});

//modif du DOM
const nouvelleImage = document.createElement('img');
nouvelleImage.src = "https://upload.wikimedia.org/wikipedia/commons/b/bd/UPHF_logo.svg";
nouvelleImage.width = 200;
nouvelleImage.alt = "Logo UPHF";
const premierHr = document.querySelector('hr');
premierHr.parentNode.insertBefore(nouvelleImage, premierHr);

//cacher tt sauf le menu 

window.addEventListener('DOMContentLoaded', function() {
    
    const sections = document.querySelectorAll('.section-content');
    
    for (let i = 0; i < sections.length; i++) {
        if (sections[i].id != 'section2') {
            sections[i].style.display = 'none';
        }
    }
});


const toggleButtons = document.querySelectorAll('.btn');

for (let i = 0; i < toggleButtons.length; i++) {
    
    toggleButtons[i].addEventListener('click', function() {
        
        const sectionId = this.getAttribute('data-section');
        
        const section = document.getElementById(sectionId);
        
        if (section.style.display === 'none' || section.style.display === '') {
            section.style.display = 'block';
            this.textContent = '▲' + this.textContent.substring(1);
        } else {
            section.style.display = 'none';
            this.textContent = '▼' + this.textContent.substring(1);
        }
    });
}
