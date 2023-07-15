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

    if (ville != "" && codePostal != "" && ca != "" && loyer != "") {
        if (ville == "paris" || ville == "Paris") {
            if (codePostal > 10000 && codePostal < 100000) {
                if(ca>=0){
                    if(loyer>=0){
                        if (secteurActi != "null") {
                            if(zoneActi == "Centre Ville 1"){
        
                            }else if(zoneActi == "Centre Ville 2"){
        
                            }else if(zoneActi == "Zone peripherique"){
        
                            }else if(zoneActi == "Zac"){
                                
                            }
                            
                            var fourchetteHaute = Math.round(ca * calc_facteur(secteurActi)[0]);
                            var fourchetteBasse = Math.round(ca * calc_facteur(secteurActi)[1]);
                            
                            document.getElementById("Resultat").innerHTML = '<div class="card border-success mb-3" style="margin-left: auto;margin-right: auto; max-width: 25rem;"><div class="card-header text-bg-success">Estimation de votre fond de commerce</div><div class="card-body"><h5 class="card-title">Note de confiance : 4/5</h5><p class="card-text"> Fourchette de valeur : ' + fourchetteBasse + ' --- ' + fourchetteHaute + '<br><br><i>Si vous souhaiter avoir des conseils et des precisions sur nos calculs n\'hesitez pas à nous contacter :</i></p><a href="#registration" class="btn btn-outline-success">Envoyez nous un message</a></div><img src="../file/Calculatrice3.png" class="card-img-bottom" alt="calculette"></div>';
                        } else {
                            document.getElementById("Resultat").innerHTML = "<div class=\"alert alert-danger\" role=\"alert\"> Vous n'avez pas sélectionné de secteur d'activité </div>";
                        }
                    }else{
                        messageErreur(loyer);    
                    }
                }else{
                    messageErreur(ca);
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

function calc_facteur(secteurActi){
    if(secteurActi == "Agence Matrimoniale"){
        var facteurBas = 0.5;
        var facteurHaut =  0.7;
    }else if(secteurActi == "Ameublement-Equipement du Foyer"){
        var facteurBas = 0.35;
        var facteurHaut =  0.6;
    }else if(secteurActi == "Animalerie-Aquariophilie-Oisellerie"){
        var facteurBas = 0.5;
        var facteurHaut =  0.8;
    }else if(secteurActi == "Antiquités"){
        var facteurBas = 0.45;
        var facteurHaut =  0.9;
    }else if(secteurActi == "Appareils médicaux-Orthopédie"){
        var facteurBas = 0.15;
        var facteurHaut =  0.4;
    }else if(secteurActi == "Armurier"){
        var facteurBas = 0.4;
        var facteurHaut =  0.65;
    }else if(secteurActi == "Articles de bureau"){
        var facteurBas = 0.35;
        var facteurHaut =  0.7;
    }else if(secteurActi == "Bazar"){
        var facteurBas = 0.45;
        var facteurHaut =  0.9;
    }else if(secteurActi == "Bijouterie fantaisie"){
        var facteurBas = 0.5;
        var facteurHaut =  1;
    }else if(secteurActi == "Bijouterie horlogerie"){
        var facteurBas = 0.35;
        var facteurHaut =  0.85;
    }else if(secteurActi == "Bimbeloterie"){
        var facteurBas = 0.95;
        var facteurHaut =  1.2;
    }else if(secteurActi == "Bonneterie-Lingerie-Mercerie"){
        var facteurBas = 0.5;
        var facteurHaut =  0.95;
    }else if(secteurActi == "Brocante"){
        var facteurBas = 0.5;
        var facteurHaut =  0.85;
    }else if(secteurActi == "Cadeaux-arts de la table-Articles de Paris"){
        var facteurBas = 0.35;
        var facteurHaut =  0.85;
    }else if(secteurActi == "Carterie-Gadgets"){
        var facteurBas = 0.5;
        var facteurHaut =  1.05;
    }else if(secteurActi == "Chaussures"){
        var facteurBas = 0.5;
        var facteurHaut =  0.85;
    }else if(secteurActi == "Charbons-Combustibles"){
        var facteurBas = 0.2;
        var facteurHaut =  0.6;
    }
    
    




    return [facteurHaut, facteurBas];
}


