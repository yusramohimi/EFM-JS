// declaration

const form = document.querySelector("form")
const nom = document.querySelector("input[name='name']");
const mail = document.querySelector("input[name='mail']");
const tel = document.querySelector("input[name='tel']");
const type_cours = document.querySelector("select");




// fonction de validation des champs de saisie ; tous les champs doit etre saisis


function validateChamps (){

    if (nom.value.trim() === "" || mail.value.trim() === "" || tel.value.trim() === "" || type_cours.value === "course_type"){
        return false
    }
    return true
}

// fonction Veriftel() qui verifie si le nombre de caracteres du champs telephone sont bien egales à 10 si non elle affiche un message d'erreur

function VerifTel() {
    const telValue = tel.value.trim()

    if (telValue.length !== 10) {
        alert("Le numéro de téléphone doit contenir exactement 10 chiffres.")
    }
    
}



// code js pour créer ce formulaire en respectant les regles ci dessus

form.addEventListener("submit",function(e){
    e.preventDefault()

    if (!validateChamps()){
        alert("Veuillez remplir tous les champs de saisie")
    }

    VerifTel()
})


// en javascript ecrire le code qui crée le css ci-dessous



// fonction qui vide les champs de saisie

function vider() {
    
    nom.value = ""
    mail.value = ""
    tel.value = ""
    type_cours.value = "course_type"
}



// fonction remplirType qui permet de remplir la liste deroulante des types de cours à partie des données json
document.addEventListener("DOMContentLoaded",remplirType)


function remplirType(){
    let types;
    const request = new XMLHttpRequest();
    request.open("GET","data.json",true)
    request.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            let responsedata = JSON.parse(this.responseText)
            types = responsedata.types;
            let typesOpts;
            for(let i = 0 ; i < types.length ; i++){
                typesOpts += `<option value = ${types[i].nom}> ${types[i].nom} </option>`
            }
            type_cours.innerHTML = typesOpts
        }
    }

    request.send()
}

