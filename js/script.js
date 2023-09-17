const adviceId = document.getElementById('advice-id')
const adviceText = document.getElementById('advice-text')
const iconDice = document.getElementById('icon-dice')

const url = 'https://api.adviceslip.com/advice';


function randomAdvice() {
    fetch(url)
    .then(response => response.json())
    .then((data) =>{
        adviceId.innerHTML = data.slip.id,
        adviceText.innerHTML = data.slip.advice
    }
    )
}
randomAdvice();

iconDice.addEventListener('click', () => {
    randomAdvice();
})