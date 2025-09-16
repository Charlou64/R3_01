let montantMin = 50;
let montantTot1 = 100;
let montantTot2 = 10;

function LivraisonGratuite(Min, Tot){
    if(Min>Tot){
        console.log("Frais de livraison : X euros");
    }
    else{
        console.log("Livraison gratuite")
    }
}

LivraisonGratuite(montantMin, montantTot1);
LivraisonGratuite(montantMin, montantTot2);
