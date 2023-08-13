/* let comptes = [];
/* crediter() {
    let credit = Number(prompt("de combien voudrez vous creditez le compte"))
    this.solde = this.solde + credit;
/* } */
//let divElt = document.createElement("div")/* /* /* 
/* class compte {
    constructor(id, nom, prenom, age, type) {

        this.id;
        this.nom = nom;
        this.prenom = prenom;
        this.age = age;
        this.type = type;
    }
    solde = 0;


} */

/* let kodjo = new compte(1, "kdjo", "jkdio", 19, "epargne");
console.log(kodjo) */

//creation de compte par bouton 

let div_button = document.createElement("div")
div_button.style.display = "flex"
div_button.style.justifyContent = "center"
let btn = document.createElement("button")
btn.textContent = "ajouter un compte    "
document.body.appendChild(div_button)
div_button.appendChild(btn)
let comptes = []
btn.addEventListener("click", (e) => {




    let id = Number(prompt("entrer votre id"));
    let nom = prompt("entrer le nom ")
    let prenom = prompt("entrer le prenom")
    let age = Number(prompt("entrer l'age"))
    let profession = prompt("entrer votre profession")
    let type = prompt("entrer le type du compte")
    let solde = document.createElement("p")
    let ecris_solde = document.createElement("p")
    ecris_solde.textContent = "solde:"
    solde.textContent = 0;
    comptes.push(id, nom, prenom, type)
        /*     class comptess {
                constructor(id, nom, prenom, age, profession, type, solde) {
                    this.id = id;
                    this.nom = nom;
                    this.prenom = prenom;
                    this.age = age;
                    this.profession = profession;
                    this.type = type;
                    this.solde = solde;






                } */
        /* } */


    let compte = document.createElement('section')

    document.body.appendChild(compte)

    let GrandDiv = document.createElement("div")

    compte.appendChild(GrandDiv)

    let divElt = document.createElement("div")

    GrandDiv.appendChild(divElt)

    let div_2_Elt = document.createElement("div")

    let divdiv_elt = document.createElement("div")

    GrandDiv.appendChild(divdiv_elt)

    GrandDiv.appendChild(div_2_Elt)

    divdiv_elt.appendChild(divElt)

    let table = document.createElement("table")

    divElt.appendChild(table)

    let tr = document.createElement("tr");

    table.appendChild(tr)

    console.log(comptes);
    compte.style.display = "flex"
    compte.style.justifyContent = "center"

    GrandDiv.style.border = "1px solid black"

    divdiv_elt.style.border = "1px solid black"

    divElt.style.border = "1px solid red"

    GrandDiv.style.display = "flex"

    GrandDiv.style.justifyContent = "center"

    GrandDiv.style.alignItems = "center"
    GrandDiv.style.width = "60%"

    table.style.border = "1px solid blue"
    table.style.backgroundColor = "aqua"
    table.style.width = "100%"


    div_2_Elt.style.display = "flex"
    div_2_Elt.style.flexDirection = "column"
    div_2_Elt.style.justifyContent = "space-around"
    div_2_Elt.style.height = "100%"
    div_2_Elt.style.alignItems = "center"
    div_2_Elt.style.width = "20%"
    div_2_Elt.style.backgroundColor = "grey"
    GrandDiv.style.backgroundColor = "grey"

    for (let a of comptes) {
        let td = document.createElement("td");
        td.textContent = a
        tr.appendChild(td)

    }
    console.log(tr);
    divElt.appendChild(ecris_solde)

    divElt.appendChild(solde)

    let crediter = document.createElement("button")

    div_2_Elt.appendChild(crediter)

    crediter.textContent = "crediter"
    crediter.addEventListener("click", (e) => {

        solde.textContent = (prompt("entrer la valeur du credit "))

    });
    let transaction = document.createElement('button');
    div_2_Elt.appendChild(transaction);
    transaction.textContent = "transaction"

    transaction.addEventListener("click", (e) => {
        let idcomptes = Number(prompt("entrer l'id du destinataire"));

        let motant_a_envoyer = Number(prompt("entrer le motant a envoyer"));
        type = prompt("de quel type de compte disposer vous?");
        let solde_actuel;
        solde_actuel = solde.textContent;
        if (comptes.id == idcomptes) {
            console.log("st laa")
        } else {
            console.log("riennnnn")
        }
        switch (type) {

            case "epargne":


                solde.textContent = solde.textContent - (motant_a_envoyer + ((motant_a_envoyer * 30) / 100))
                if (solde.textContent < 0) {
                    alert("votre solde est insuffisant entrer un moment alors plus bas ok?")
                    solde.textContent = solde_actuel

                }


                break;
            case "courant":

                solde.textContent = solde.textContent - (motant_a_envoyer + ((motant_a_envoyer * 10) / 100))
                if (solde.textContent < 0) {
                    alert("votre solde est insuffisant entrer un moment alors plus bas ok?")
                    solde.textContent = solde_actuel

                }

                break;
            case "gold":
                solde.textContent = solde.textContent - (motant_a_envoyer)
                if (solde.textContent < 0) {
                    alert("votre solde est insuffisant entrer un moment alors plus bas ok?")
                    solde.textContent = solde_actuel

                }

                break;

            default:
                break;
        }




    });


    let supprimer = document.createElement("button")

    div_2_Elt.appendChild(supprimer);
    supprimer.textContent = "supprimer"
    supprimer.addEventListener("click", (e) => {
        GrandDiv.textContent = "";
        divElt.textContent = "";
        divdiv_elt.textContent = "";
        div_2_Elt.textContent = "";
    })


    comptes.splice(1, 1);
    comptes.splice(1, 2);
    comptes.splice(1, 3);
    comptes.pop()

})