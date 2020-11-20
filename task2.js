
let a = document.getElementById("link");

// QUESTIONS
function permit () {
    alert("You will be asked a few questions. Please answer truthfully with 'yes' or 'no' in order to find out if you are eligible.");
    let workPermit = prompt("Are you currently residing in Germany on a work permit basis?");
    let asylumResident = prompt("Are you residing in Germany as an asylum seeker?");
    let blueCard = prompt("Are you currently residing in Germany on a Blue Card basis?");
    let marriedGerman = prompt("Are you currently married to a German citizen for more than 3 years?");
    let residencePermit = prompt("Do you have a valid residence permit?");
    let yearsInGermany = prompt("How many years have you been living in germany?");
    let yearsWorking = prompt("How many years have you been working?");
    let currentlyEmployed = prompt("Are you currently employed?");
    let germanLevel = prompt("What is your German level? (E.g. b1, a2, c1.)");
    let asylumIncome = prompt("If an asylum seeker, are you able to independently cover 70% of your living costs?");

    //WORK PERMIT PATH
    if (workPermit == "yes" && residencePermit == "yes" && parseInt(yearsInGermany) >= 5 && parseInt(yearsWorking) >= 3 && currentlyEmployed == "yes" && (germanLevel == "b1" || germanLevel == "b2" || germanLevel == "c1" || germanLevel == "c2")) {
        alert("Congrats! You qualify! Grab a Schnitzel and fill out these 5943875 forms!");
        return true;
    } 
    //BLUE CARD PATH 1
    else if (blueCard == "yes" && parseInt(yearsInGermany) >= 2 && currentlyEmployed == "yes" && (germanLevel == "a2" || germanLevel == "b1" || germanLevel == "b2" || germanLevel == "c1" || germanLevel == "c2")) {
        alert("Congrats! You qualify! Grab a Schnitzel and fill out these 5943875 forms!");
        return true;
    } 

    //BLUE CARD PATH 2
    else if (blueCard == "yes" && parseInt(yearsInGermany) >= 3 && currentlyEmployed == "yes" && (germanLevel == "b1" || germanLevel == "b2" || germanLevel == "c1" || germanLevel == "c2")) {
        alert("Congrats! You qualify! Grab a Schnitzel and fill out these 5943875 forms!");
        return true;
    }

    // MARRIAGE PATH
    else if (marriedGerman == "yes" && (germanLevel == "b1" || germanLevel == "b2" || germanLevel == "c1" || germanLevel == "c2")) {
        alert("Congrats! You qualify! Grab a Schnitzel and fill out these 5943875 forms!");
        return true;
    }

    // ASYLUM PATH 1
    else if (asylumResident == "yes" && asylumIncome == "yes" && (germanLevel == "b1" || germanLevel == "b2" || germanLevel == "c1" || germanLevel == "c2") && parseInt(yearsInGermany) >= 5) {
        alert("Congrats! You qualify! Grab a Schnitzel and fill out these 5943875 forms!");
        return true;
    } 

    // ASYLUM PATH 2

    else if (asylumResident == "yes" && asylumIncome == "yes" && (germanLevel == "c1" || germanLevel == "c2") && parseInt(yearsInGermany) >= 3) {
        alert("Congrats! You qualify! Grab a Schnitzel and fill out these 5943875 forms!");
        return true;
    } 

    // NOT ELIGIBLE
    else {
        alert("Sorry, you do not qualify. Please refer to Article 4, Section 13 of the Rindfleischetikettierungsueberwachungsaufgabenuebertragungsgesetz.");
        return false;
    }
}