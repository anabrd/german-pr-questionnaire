//// FORM SCRIPT

let form = document.querySelector("form");

form.addEventListener("submit", function (event) {
    let workPermit = document.querySelector("input[name=workPermit]:checked").value;
    let asylumResident = document.querySelector("input[name=asylumResident]:checked").value;
    let blueCard = document.querySelector("input[name=blueCard]:checked").value;
    let marriedGerman = document.querySelector("input[name=marriedGerman]:checked").value;
    let residencePermit = document.querySelector("input[name=residencePermit]:checked").value;
    let currentlyEmployed = document.querySelector("input[name=currentlyEmployed]:checked").value;
    let asylumIncome = document.querySelector("input[name=asylumIncome]:checked").value;
    let yearsInGermany = document.getElementById('yearsInGermany').value;
    let yearsWorking = document.getElementById('yearsWorking').value;
    let germanLevel = document.getElementById('germanLevel').value;


    // CHECK ANSWERS IN CONSOLE
    console.log(workPermit);
    console.log(asylumResident);
    console.log(blueCard);
    console.log(marriedGerman);
    console.log(residencePermit);
    console.log(currentlyEmployed);
    console.log(asylumIncome);
    console.log(yearsInGermany);
    console.log(yearsWorking);
    console.log(germanLevel);

    //WORK PERMIT PATH
    if (workPermit == "Yes" && residencePermit == "Yes" && parseInt(yearsInGermany) >= 5 && parseInt(yearsWorking) >= 3 && currentlyEmployed == "Yes" && (germanLevel == "b1" || germanLevel == "b2" || germanLevel == "c1" || germanLevel == "c2")) {
        alert("Congrats! You qualify! Grab a Schnitzel and fill out these 5943875 forms!");
        return true;
    }
    //BLUE CARD PATH 1
    else if (blueCard == "Yes" && parseInt(yearsInGermany) >= 2 && currentlyEmployed == "Yes" && (germanLevel == "a2" || germanLevel == "b1" || germanLevel == "b2" || germanLevel == "c1" || germanLevel == "c2")) {
        alert("Congrats! You qualify! Grab a Schnitzel and fill out these 5943875 forms!");
        return true;
    }

    //BLUE CARD PATH 2
    else if (blueCard == "Yes" && parseInt(yearsInGermany) >= 3 && currentlyEmployed == "Yes" && (germanLevel == "b1" || germanLevel == "b2" || germanLevel == "c1" || germanLevel == "c2")) {
        alert("Congrats! You qualify! Grab a Schnitzel and fill out these 5943875 forms!");
        return true;
    }

    // MARRIAGE PATH
    else if (marriedGerman == "Yes" && (germanLevel == "b1" || germanLevel == "b2" || germanLevel == "c1" || germanLevel == "c2")) {
        alert("Congrats! You qualify! Grab a Schnitzel and fill out these 5943875 forms!");
        return true;
    }

    // ASYLUM PATH 1
    else if (asylumResident == "Yes" && asylumIncome == "Yes" && (germanLevel == "b1" || germanLevel == "b2" || germanLevel == "c1" || germanLevel == "c2") && parseInt(yearsInGermany) >= 5) {
        alert("Congrats! You qualify! Grab a Schnitzel and fill out these 5943875 forms!");
        return true;
    }

    // ASYLUM PATH 2
    else if (asylumResident == "Yes" && asylumIncome == "Yes" && (germanLevel == "c1" || germanLevel == "c2") && parseInt(yearsInGermany) >= 3) {
        alert("Congrats! You qualify! Grab a Schnitzel and fill out these 5943875 forms!");
        return true;
    }

    // NOT ELIGIBLE
    else {
        alert("Sorry, you do not qualify. Please refer to Article 4, Section 13 of the Rindfleischetikettierungsueberwachungsaufgabenuebertragungsgesetz.");
        return false;
    }

    event.preventDefault();
});