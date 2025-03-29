let cards = [];
const term = document.querySelector("#term");
const def = document.querySelector("#def");
const addButton = document.querySelector("#addCard");
const backButton = document.querySelector("#back");
const nextButton = document.querySelector("#next");
const cardDisplay = document.querySelector(".card-container");
let currentCard = 0;

function Flashcard(term, def){
    if(!new.target){
        throw new TypeError("calling Flashcard constructor without new is invalid!");
    }
    this.term = term;
    this.def = def;
    this.isFrontFaced = true;
}

function updateCard(){
    cardDisplay.textContent = cards[currentCard].term;
}
addButton.addEventListener('click', () =>{
    cards.push(new Flashcard(term.value, def.value));
    if (cards.length === 1){
        updateCard();
    }
    term.value = "";
    def.value = "";
})

cardDisplay.addEventListener('click', () => {
    if(cards.length > 0){
        if (cards[currentCard].isFrontFaced){
            cards[currentCard].isFrontFaced = false;
            cardDisplay.textContent = cards[currentCard].def;
        }else{
            cards[currentCard].isFrontFaced = true;
            cardDisplay.textContent = cards[currentCard].term;
        }
    }
})

backButton.addEventListener('click', ()=>{
    if(currentCard > 0){
        cards[currentCard].isFrontFaced = true;
        currentCard--;
        updateCard();
    }
})

nextButton.addEventListener('click', ()=>{
    if(currentCard < cards.length - 1){
        cards[currentCard].isFrontFaced = true;
        currentCard++;
        updateCard();
    }
})



