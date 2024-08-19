//я случайно все написал в индексе а не в апп, поэтому оно все за раз появилось, клянусь всем что у меня есть

function formatPhone(phoneNumber) {
    let result = "";
    for (let char of phoneNumber) {
        if (char >= "0" && char <= "9") {
            result += char;
        }
    }
    if (result.startsWith("0"))
        result = result.slice(1);

    if (result.length !== 12)
        result = "996" + result;

    return result;
}

function getOperatorCode(phoneNumber) {
    return phoneNumber.slice(3,6)
}

function checkNurtelecom(code) {
    let codes = ["500", "501", "502", "553", "504", "505", "507", "508", "509", "700", "701", "702", "703", "704", "705", "706", "707", "708", "709"];
    return codes.includes(code);
}

function checkMegakom(code) {
    let codes = ["550", "551", "552", "553", "554", "555", "557", "558", "559"];
    return codes.includes(code);
}

function checkBeeline(code) {
    let codes = ["770", "771", "772", "773", "774", "775", "776", "777", "778", "779", "220", "221", "222", "223", "224", "225", "226", "227", "228", "229"];
    return codes.includes(code);
}

function detectOperator(phoneNumber) {
    let formattedPhoneNumber = formatPhone(phoneNumber);
    let operatorCode = getOperatorCode(formattedPhoneNumber);

    if (checkNurtelecom(operatorCode))
        return "O!";
    if (checkMegakom(operatorCode))
        return "Megacom";
    if (checkBeeline(operatorCode))
        return "Beeline";
}

function hidePhone(phoneNumber) {
    if (phoneNumber.length < 2 ){
        return "Неправильный номер";
    }
    let visiblePart = phoneNumber.slice(0, -2);
    let hiddenPart = "xx";
    return visiblePart + hiddenPart;
}
console.log(hidePhone("996 555 555 555"));

function capitalizeString(str) {
    if(str.length === 0){
        return "Неправильно"
    }

    let lowerCase = str.toLowerCase();
    let capitalize = lowerCase.charAt(0).toUpperCase() + lowerCase.slice(1);
    return capitalize;
}
console.log(capitalizeString("аЛЕКСЕЙ"));