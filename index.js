const leverage = document.querySelector('#leverage');
const margin = document.querySelector('#margin');
const percentage = document.querySelector('#percentage');
const res = document.querySelector('#result');

const exchFees = 0.05;

leverage.addEventListener('input', calculate);
margin.addEventListener('input', calculate);
percentage.addEventListener('input', calculate);

function calculate() {
    const leverageValue = leverage.value;
    const marginValue = margin.value;
    const percentageValue = percentage.value;

    const positionSize = (leverageValue * marginValue)

    let result = 0;

    if(percentageValue)
        result = Math.round(((positionSize * percentageValue) / 100) * 100 / 100);
    
    
    const fees =  Math.round(((positionSize * exchFees) / 100) * 100) / 100;
    const profit = Math.round((result - fees) * 100) / 100;
    const loss = Math.round((result + fees) * 100) / 100;

    const text = result ? "<span class='text-success'>Profit : " + profit + "$</span>" + " - " +  "<span class='text-danger'>Loss : " + loss + "$</span>" + "<br/><span class='text-info'>Fees " + fees + "$</span>" : "<span class='text-info'>Fees : " + fees + "$</span>";
    res.innerHTML = text;
}