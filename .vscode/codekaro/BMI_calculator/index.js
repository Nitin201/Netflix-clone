function bmi(){
    let height = document.getElementById('height');
    let weight = document.getElementById('weight')

    let result = weight.value / (height.value * height.value)
    if(result < 18.5){
        document.getElementById('result').innerText = 'underweight 🍔'
    }
    else if(result>18.5 && result <24.9){
        document.getElementById('result').innerText = 'Normal 💪'
    }
    else if(result>25 && result <29.9){
        document.getElementById('result').innerText = 'overweight 🤫'
    }
    else if(result>30 && result <35){
        document.getElementById('result').innerText = 'obesity 😔'
    }
    else{
        document.getElementById('result').innerText = 'sevre obesity 🤯'

    }
}