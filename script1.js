function actualiserHorloge() {
    const horloge = document.getElementById("horloge");
    const maintenant = new Date();
    const heureActuelle = maintenant.getHours();
    const minutes = maintenant.getMinutes().toString().padStart(2, "0");
    const secondes = maintenant.getSeconds().toString().padStart(2, "0");

    let message = "";
    
    if (heureActuelle >= 0 && heureActuelle < 6) {
        message = ": Il est tard, tu es censé dormir normalement";
    } else if (heureActuelle >= 8 && heureActuelle < 20) {
        message = ": Voilà un excellent moment pour travailler";
    } else {
        message = ": Bon repos";
    }

    const heureAffichee = `${heureActuelle.toString().padStart(2, "0")}:${minutes}:${secondes}`;
    horloge.textContent = `Heure actuelle : ${heureAffichee}\n${message}`;
}

setInterval(actualiserHorloge, 100); // Actualise l'heure chaque seconde

window.onscroll = function() {
    updateProgressBar();
};

function updateProgressBar() {
    const progressBar = document.getElementById('myProgressBar');
    const windowHeight = window.innerHeight;
    const pageHeight = document.body.clientHeight - windowHeight;
    const scrollPosition = window.scrollY;
    const progress = (scrollPosition / pageHeight) * 100;
    progressBar.style.width = progress + '%';
}
