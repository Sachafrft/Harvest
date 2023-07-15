function calc_Esti_FondCommerce() {
    ville = document.getElementById("ville").value;
    codePostal = document.getElementById("codePostal").value;

    var radios = document.getElementsByName("zoneActi");
    var selected = Array.from(radios).find(radio => radio.checked);
    if (radios != null) {
        document.getElementById("Resultat").innerHTML = "<div class=\"alert alert-danger\" role=\"alert\"> Veuillez selectionner une zone d'activité</div>";
    }
    zoneActi = selected.value;
    //JE SAIS PAS COMMENT VERIF QUE LE CLIENT CHOISI BIEN UN DES RADIOS psk de base la value de l'element est pas definit dcp le js ne suit pas...

    ca = document.getElementById("ca").value;
    loyer = document.getElementById("loyer").value;
    secteurActi = document.getElementById("secteurActi").value;


    document.getElementById("Resultat").innerHTML = "<div class=\"alert alert-danger\" role=\"alert\">AHAHAH</div>";

    if (ville != "" && codePostal != "" && ca != "" && loyer != "") {
        if (ville == "paris" || ville == "Paris") {
            if (codePostal > 10000 && codePostal < 100000) {
                if (secteurActi != "null") {

                    //Resultat !!!
                    document.getElementById("Resultat").innerHTML = "ville : " + ville + " codePostal : " + codePostal + " zone Acti : " + zoneActi + " ca :" + ca + " loyer : " + loyer + " secteur : " + secteurActi;
                    document.getElementById("Resultat").innerHTML = '<div class="card border-success mb-3" style="margin-left: auto;margin-right: auto; max-width: 25rem;"><div class="card-header text-bg-success">Estimation de votre fond de commerce</div><div class="card-body"><h5 class="card-title">Note de confiance : 5/5</h5><p class="card-text"> VARIABLE DE CALCUL : ESTIMATION<br><i>Si vous souhaiter avoir des conseils et des precisions sur nos calculs n\'hesitez pas à nous contacter :</i></p><a href="#registration" class="btn btn-primary">Envoyez nous un message</a></div><img src="../file/Calculatrice3.png" class="card-img-bottom" alt="calculette"></div>';
                } else {
                    document.getElementById("Resultat").innerHTML = "<div class=\"alert alert-danger\" role=\"alert\"> Vous n'avez pas sélectionné de secteur d'activité </div>";
                }
            } else {
                messageErreur(codePostal);
            }

        } else {
            messageErreur(ville);
        }
    } else {
        document.getElementById("Resultat").innerHTML = "<div class=\"alert alert-danger\" role=\"alert\"> Veuillez remplir tous les champs </div>";
    }
}


function messageErreur(nom_input) {
    document.getElementById("Resultat").innerHTML = "<div class=\"alert alert-danger\" role=\"alert\">" + nom_input + " est incorrect </div>";
}

