/*Exo1*/

class Personne {
    constructor(prenom, nom, age, ville) {
        this.prenom = prenom;
        this.nom = nom;
        this.age = age;
        this.ville = ville;
    }
}
let personne1 = new Personne("John", "Doe", 30, "New York");
console.log(personne1.nom);
console.log(personne1.prenom);
console.log(personne1.age);
console.log(personne1.ville);

/*Exo2*/

let tableauPersonnes = [
    new Personne("John", "Doe", 25, "Rouen"),
    new Personne("Jane", "Doe", 30, "Paris"),
    new Personne("Jim", "Doe", 35, "Caen")
];
console.log(tableauPersonnes);

/*Exo3*/

tableauPersonnes.push(new Personne("Marc", "Doe", 32, "Marseille"));
console.log(tableauPersonnes);

/*Exo4*/

tableauPersonnes[0].prenom = "Jean"
tableauPersonnes.splice(1,1);
console.log(tableauPersonnes);

/*Exo5*/

let tableauChiffre = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(tableauChiffre[0]);
console.log(tableauChiffre[tableauChiffre.length - 1]);
console.log(tableauChiffre.length);

/*Exo6*/

let tableauChiffre10 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
console.log(tableauChiffre10);
tableauChiffre10.reverse();
console.log(tableauChiffre10);

/*Exo7*/

let numbers = [2,5,1,9,0,3,7,4,6,8];
numbers.sort();
console.log(numbers);

/*Exo8*/

numbers.push(11);
console.log(numbers);
numbers.unshift(0);
console.log(numbers);
numbers.pop();
console.log(numbers);