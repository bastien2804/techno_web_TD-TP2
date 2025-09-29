document.querySelector('form').addEventListener('submit', function(e) {
    const inputText = this.querySelector('input[type="text"]');
    if (inputText.value !== "Oui" && inputText.value !== "Non") {
        e.preventDefault();
        inputText.value = "Il faut mettre Oui ou Non";
    }
});

document.getElementById('choix1').nextSibling.textContent = "HP";
document.getElementById('choix2').nextSibling.textContent = "Casque";
document.getElementById('choix3').nextSibling.textContent = "Bluetooth";