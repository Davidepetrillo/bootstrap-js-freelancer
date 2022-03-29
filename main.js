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
        scontoBackEnd();
    } else if (jobs == 2){
        let priceFrontEndFinal = hours * priceFrontEndHour;
        document.getElementById("primaRiga").innerHTML= `Il prezzo finale è ${priceFrontEndFinal}€`;
        scontoFrontEnd();
    } else if (jobs == 3){
        let priceProjectAnalysisFinal = hours * priceProjectAnalysisHour;
        document.getElementById("primaRiga").innerHTML= `Il prezzo finale è ${priceProjectAnalysisFinal}€`;
        scontoProjectAnalysis();
    } 
});


function scontoBackEnd (){
let flag = false;
let codiciSconto = document.getElementById("discountCode").value;
let hours = document.getElementById("hoursRequested").value;
for (let i =0; i < discount.length; i++){
if (codiciSconto == discount[i]){
    flag = true;
}
}
if (flag == true){
    let priceBackEndHourWithDiscount = (priceBackEndHour - ((priceBackEndHour * 25)/100));
    let priceBackEndFinalWithDiscount = hours * priceBackEndHourWithDiscount;
    let priceBackEndFinalWithDiscountround= Math.round((priceBackEndFinalWithDiscount + Number.EPSILON) * 100) / 100;
    document.getElementById("secondaRiga").innerHTML = `Lei ha diritto ad uno sconto del 25%`;
    document.getElementById("terzaRiga").innerHTML= `Il prezzo finale è ${priceBackEndFinalWithDiscountround}€`;
} else if(flag == false){
    document.getElementById("secondaRiga").innerHTML = `Mi dispiace ma non hai diritto a nessuno sconto`;
}
}

function scontoFrontEnd (){
    let flag = false;
    let codiciSconto = document.getElementById("discountCode").value;
    let hours = document.getElementById("hoursRequested").value;
    for (let i =0; i < discount.length; i++){
    if (codiciSconto == discount[i]){
        flag = true;
    }
    }
    if (flag == true){
        let priceFrontEndHourWithDiscount = (priceFrontEndHour - ((priceFrontEndHour * 25)/100));
        let priceFrontEndFinalWithDiscount = hours * priceFrontEndHourWithDiscount;
        let priceFrontEndFinalWithDiscountround= Math.round((priceFrontEndFinalWithDiscount + Number.EPSILON) * 100) / 100;
        document.getElementById("secondaRiga").innerHTML = `Lei ha diritto ad uno sconto del 25%`;
        document.getElementById("terzaRiga").innerHTML= `Il prezzo finale è ${priceFrontEndFinalWithDiscountround}€`;
    } else if(flag == false){
        document.getElementById("secondaRiga").innerHTML = `Mi dispiace ma non hai diritto a nessuno sconto`;
    }
    }

    function scontoProjectAnalysis (){
        let flag = false;
        let codiciSconto = document.getElementById("discountCode").value;
        let hours = document.getElementById("hoursRequested").value;
        for (let i =0; i < discount.length; i++){
        if (codiciSconto == discount[i]){
            flag = true;
        }
        }
        if (flag == true){
            let priceProjectAnalysisWithDiscount = (priceProjectAnalysisHour - ((priceProjectAnalysisHour * 25)/100));
            let priceProjectAnalysisFinalWithDiscount = hours * priceProjectAnalysisWithDiscount;
            let priceProjectAnalysisFinalWithDiscountround= Math.round((priceProjectAnalysisFinalWithDiscount + Number.EPSILON) * 100) / 100;
            document.getElementById("secondaRiga").innerHTML = `Lei ha diritto ad uno sconto del 25%`;
            document.getElementById("terzaRiga").innerHTML= `Il prezzo finale è ${priceProjectAnalysisFinalWithDiscountround}€`;
        } else if(flag == false){
            document.getElementById("secondaRiga").innerHTML = `Mi dispiace ma non hai diritto a nessuno sconto`;
        }
        }
