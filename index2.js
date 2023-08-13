let tableaucompte = [];
class comptes {
    constructor(id, nom, prenom, age, profession, type, ) {
        this.id = id;
        this.nom = nom;
        this.prenom = prenom;
        this.age = age;
        this.profession = profession;
        this.type = type;
    }
    solde = 0;

    crediter() {
        let somme = Number(prompt("de combien voulez vous crediter le compte"));

        this.solde = somme + this.solde;
    }

    ajoutercompte = () => {
        let id = Number(prompt("entrer l'id du compte"));
        let nom = prompt("rentrer le nom du compte");
        let prenom = prompt("rentrer le prenom ");
        let age = Number(prompt("rentrer l'age "));
        let profession = prompt("rentrer la profession ");
        let type = prompt("quelle est votre type ");

        let compte = new comptes(id, nom, prenom, age, profession, type);
        tableaucompte.push(compte);
    }
}

let section_comptes = document.createElement("section")
document.body.appendChild(section_comptes)
let div_button = document.createElement("div")
div_button.style.display = "flex"
div_button.style.justifyContent = "center"
let btn = document.createElement("button")
btn.textContent = "ajouter un compte    "
section_comptes.appendChild(div_button)
div_button.appendChild(btn)

let gestionnaireComptes = new comptes();

for (let a of tableaucompte) {
    section_comptes.textContent = a

}
btn.addEventListener("click", gestionnaireComptes.ajoutercompte);