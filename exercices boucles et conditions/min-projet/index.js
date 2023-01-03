// Mini Projet Le nombre mystère
// Le but du jeu c'est de faire deviner un nombre de votre choix (entre 0 et 100) à l'utilisateur.

// Vous allez devoir lui demander de saisir un nombre grâce à window.prompt.

// Si le nombre de l'utilisateur est inférieur au votre, utilisez window.alert pour lui dire que c'est plus.

// Si le nombre de l'utilisateur est supérieur au votre, utilisez window.alert pour lui dire que c'est moins.

// Si son nombre est égal au votre : dites lui qu'il a gagné. Le jeu doit tourner jusqu'à ce que l'utilisateur gagne.

// Si vous avez besoin de transformer une chaine de caractère en nombre : utilisez parseInt().

// let nb = "42"; // nb est de type String
// let number = parseInt(nb); // number est un Number


let result = 50;
let proposition;

while (result!==proposition){
    let number = prompt("proposer un nombre entre 0 et 100");
    proposition = parseInt(number);

    
    if (proposition < result){
        window.alert("trop bas");
    }
    else if (proposition > result){
        window.alert("trop haut");
    }
    else{
        window.alert("Youpi !");
    }
}
