let submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener("click", function(){
    document.getElementById("loginContain").style.display = "none";
    document.getElementById("trx").style.display = "block";
})





let dipoBtn = document.getElementById("dipoBtn");
dipoBtn.addEventListener('click', function(){
    console.log("Clicked");

    // let dipoInput = document.getElementById("dipoInput").value;
    // let dipoInputNumber = parseFloat(dipoInput);

    let dipoInputNumber= getInputNumber("dipoInput")

    updateSpan("depositedBalance", dipoInputNumber);
    document.getElementById("dipoInput").value = "";

    updateSpan("totalBalance", dipoInputNumber)

    // let totalBalance = document.getElementById("totalBalance").innerText;
    // let totalBalanceNumber = parseFloat(totalBalance);
    // let newTotalBalance = dipoInputNumber + totalBalanceNumber;
    // document.getElementById("totalBalance").innerText = newTotalBalance;
})




function updateSpan(id, dipoInputNumber) {
    let totalBalance = document.getElementById(id).innerText;
    let totalBalanceNumber = parseFloat(totalBalance);
    let newTotalBalance = dipoInputNumber + totalBalanceNumber;
    document.getElementById(id).innerText = newTotalBalance;
}

function getInputNumber(id) {
    let withdrawInput = document.getElementById(id).value;
    let withdrawInputNumber = parseFloat(withdrawInput);  
    return withdrawInputNumber; 
}











let withBtn = document.getElementById("withBtn");
withBtn.addEventListener('click', function(){
    // let withdrawInput = document.getElementById("withdrawInput").value;
    // let withdrawInputNumber = parseFloat(withdrawInput);

    let withdrawInputNumber = getInputNumber("withdrawInput");

  
    updateSpan("withdrawed", withdrawInputNumber);
    document.getElementById("withdrawInput").value = "";
    updateSpan("totalBalance", - withdrawInputNumber);
    // let totalBalance = document.getElementById("totalBalance").innerText;
    // let totalBalanceNumber = parseFloat(totalBalance);
    // let newTotalBalance2 = totalBalanceNumber - withdrawInputNumber;
    // document.getElementById("totalBalance").innerText = newTotalBalance2;
})

