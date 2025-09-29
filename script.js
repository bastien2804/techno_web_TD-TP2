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
document.querySelector('label').textContent = "Mute";