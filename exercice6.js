let nombre = prompt("Entrez un nombre pour calculer son factoriel");

let resultat = 1;

for (let i = 1; i <= nombre; i++) {
    resultat = resultat * i;
}

alert("Le calcul fait : " + resultat);