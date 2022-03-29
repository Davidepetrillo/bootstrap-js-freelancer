let priceBackEndHour = 20.5;
let priceFrontEndHour = 12.3;
let priceProjectAnalysisHour = 33.6;
let discount = ["YHDNU32", "JANJC63", "PWKCN25", "SJDPO96", "POCIE24"];

document.getElementById("bottone").addEventListener("click", function(event){
    event.preventDefault();
    let jobs = document.getElementById("typeOfWork").value;
    let hours = document.getElementById("hoursRequested").value;
    if (jobs == 1){
        let priceBackEndFinal = hours * priceBackEndHour;
        document.getElementById("primaRiga").innerHTML= `Il prezzo finale è ${priceBackEndFinal}€`;
    } else if (jobs == 2){
        let priceFrontEndFinal = hours * priceFrontEndHour;
        document.getElementById("primaRiga").innerHTML= `Il prezzo finale è ${priceFrontEndFinal}€`;
    } else if (jobs == 3){
        let priceProjectAnalysisFinal = hours * priceProjectAnalysisHour;
        document.getElementById("primaRiga").innerHTML= `Il prezzo finale è ${priceProjectAnalysisFinal}€`;
    } 
});
