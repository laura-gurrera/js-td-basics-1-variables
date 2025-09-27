/*****************************
 * CODING CHALLENGE 1
 */

// Mark et John veulent comparer leur BMI (Indice de masse corporelle),
// qui est calculé en utilisant la formule :
// BMI = poids / taille^2 = poids / (taille * taille).
// N.B. Le poids est en kg et la taille est en mètres.
//
// 1. Stockez le poids et la taille de Mark et de John dans des variables.
const weightMark=82;
const heightMark=1.78;
const weightJohn=70;
const heightJohn=1.85;

// 2. Calculez le BMI de chacun.
const bmiMark= weightMark/(heightMark*heightMark);
const bmiJohn=weightJohn/(heightJohn*heightJohn);

console.log(`Le BMI de Mark est de ${bmiMark}`);
console.log(`Le BMI de John est de ${bmiJohn}`);

// 3. Créez une variable booléenne qui contient l'information de savoir
//    si le BMI de Mark est plus élevé que celui de John.
const isBmiMarkHigherThanJohn= bmiMark>bmiJohn;

// 4. Imprimez une chaîne de caractères dans la console contenant la
//    variable de l'étape 3 (Quelque chose du genre "Est-ce que le BMI de
//    Mark est plus élevé que celui de John ? true").
console.log(`Est-ce que le BMI de Mark est plus élevé que celui de John ? ${isBmiMarkHigherThanJohn}`);

//
// BONNE CHANCE 😀