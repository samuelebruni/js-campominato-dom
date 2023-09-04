 //Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. Attenzione: **nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali. In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe). Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.
 let points = 0;
document.querySelector('button').addEventListener("click", function() {

    let container = document.getElementById('container');
    reset();
    let numCell = document.querySelector('select').value;
    
    generateBattleField(numCell, container)

    
    

    
})

document.getElementById('reset').addEventListener('click', function() {
    reset();
});


function generateBattleField(limit, fieldDomEl) {
    let explosiveNumber = [];
    while (explosiveNumber.length < 16){
        randomNumber = Math.ceil(Math.random() * limit)
        if (!explosiveNumber.includes(randomNumber)){
            explosiveNumber.push(randomNumber)
        }
    }



    console.log('I numeri esplosivi sono:', explosiveNumber);

    for (let i = 0; i < limit; i++) {
      const cellMarkupEl = generateCell(i + 1, 'div', 'cell', limit, explosiveNumber)
      fieldDomEl.append(cellMarkupEl)
  
    }
  
  }

  function generateCell(numb, el, css_class, limit, explosiveNumber) {
    
    

    const cellMarkupEl = document.createElement(el)
    cellMarkupEl.append(numb)
    cellMarkupEl.classList.add(css_class)
    cellMarkupEl.style.width = `calc(100% / ${Math.sqrt(limit)})`
  
    cellMarkupEl.addEventListener('click', function(){
      if (explosiveNumber.includes(numb)){
          cellMarkupEl.classList.toggle('bg-danger');
          setTimeout(function(){
            alert('HAI PERSO');
            reset();
          }, 500);
          
      } else {
        cellMarkupEl.classList.toggle('bg-success');
        addPoint();
        if (points == limit - 16 ){
            alert('Complimenti HAI VINTO - HAI TOTALIZZATO:', points);
        }
      }
    })
    return cellMarkupEl
  
  }

  function addPoint() {
    ++points; 
  }

  function reset() {
    document.getElementById('container').innerHTML = ' ';
  }