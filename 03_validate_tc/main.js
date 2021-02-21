

function Control(){

    let TCKN = document.querySelector('#TCKN');

    let oddSum = parseInt(TCKN.value.charAt(0))+parseInt(TCKN.value.charAt(2))+parseInt(TCKN.value.charAt(4))+parseInt(TCKN.value.charAt(6))+parseInt(TCKN.value.charAt(8));

    let evenSum = parseInt(TCKN.value.charAt(1))+parseInt(TCKN.value.charAt(3))+parseInt(TCKN.value.charAt(5))+parseInt(TCKN.value.charAt(7));


    let control1 = (7*oddSum-evenSum) % 10;

    let sumOfTenDigits = 0;
    
    for(let i = 0;i<10;i++){
        sumOfTenDigits+=parseInt(TCKN.value.charAt(i));
    }

    let control2 = sumOfTenDigits % 10;

    if(isNaN(TCKN.value) || TCKN.value.length != 11 || control1 != parseInt(TCKN.value.charAt(9)) || control2 != parseInt(TCKN.value.charAt(10)))
    {
        document.querySelector('#true').style.display = "none";
        document.querySelector('#false').style.display = "block";
    }
    else
    {
        document.querySelector('#false').style.display = "none";
        document.querySelector('#true').style.display = "block";
    }      
}