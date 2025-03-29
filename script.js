let cards = [];
const term = document.querySelector("#term");
const def = document.querySelector("#def");
const addButton = document.querySelector("#addCard");

function Flashcard(term, def){
    if(!new.target){
        throw new TypeError("calling Flashcard constructor without new is invalid!");
    }
    this.term = term;
    this.def = def;
    
}

addButton.addEventListener('click', () =>{
    cards.push(new Flashcard(term.value, def.value));
})