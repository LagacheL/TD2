function addition(param1, param2) {
    return param1 + param2;
}

let N = prompt("Entrez un nombre");

let resultat = 1;

for (let i = 1; i <= N; i++) {
    resultat = addition(resultat, i);
}

alert("Le calcul fait : " + resultat);