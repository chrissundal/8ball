let question = '';
let answer = ['For en god ide',
    'Det lover godt',
    'Hvorfor ikke?',
    'Tja, hva veit vel jeg. Jeg er bare et håpløst script',
    'Trukke det',
    'Ikke for og være negativ, men nei',
    'Wow, rolig nå. jeg er bare ett script',
    'JAAA!', 'Det blir nei fra meg',
    'Abonnenten du prøver og nå, er dessverre ikke tigjengelig. Vennligst prøv igjen senere.',
    'Det kan jo være en ide',
    'Jeg har trua',
    'WOW, oversharing, much?']
let showMessage = 'Hvorfor ikke ta sjansen?'
updateView();
function updateView() {
    document.getElementById('app').innerHTML = /*HTML*/`
    <div class="main">
        <div class="eightball">
            <img src="Magic8ball.jpg" height = 300px onclick="getAnswer()">
            </div>
       
        <div class="question">
            <input type="text" oninput="question=this.value">
            <div>${showMessage}</div>
        </div>
    </div>
`;
}
function getAnswer() {
    let randomNumber = Math.floor(Math.random() * answer.length)
    if (answer.length > 0 && question != "") {
        showMessage = answer[randomNumber]
        answer.splice(randomNumber, 1)
    } else if (answer.length > 0 && question == "") {
        showMessage = "Øj! skriv noe til meg da"
    } else {
        showMessage = "Nå må jeg lade, hade"
    }
    updateView();
}