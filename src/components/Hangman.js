import React, {useState} from "react";
import '../css/hangman.css';

// Letter Board to choose from
// Player chooses a word (hard code word right now)
// Box where chosen letters go 
// 



const Hangman = () => {
    const letters = [
        {id: 1, letter:'a'}, 
        {id: 2, letter:'b'}, 
        {id: 3, letter:'c'}, 
        {id: 4, letter:'d'}, 
        {id: 5, letter:'e'}, 
        {id: 6, letter:'f'}, 
        {id: 7, letter:'g'}, 
        {id: 8, letter:'h'}, 
        {id: 9, letter:'i'}, 
        {id: 10, letter:'j'}, 
        {id: 11, letter:'k'}, 
        {id: 12, letter:'l'}, 
        {id: 13, letter:'m'}, 
        {id: 14, letter:'n'}, 
        {id: 15, letter:'o'}, 
        {id: 16, letter:'p'}, 
        {id: 17, letter:'q'}, 
        {id: 18, letter:'r'}, 
        {id: 19, letter:'s'}, 
        {id: 20, letter:'t'}, 
        {id: 21, letter:'u'}, 
        {id: 22, letter:'v'}, 
        {id: 23, letter:'w'}, 
        {id: 24, letter:'x'}, 
        {id: 25, letter:'y'}, 
        {id: 26, letter:'z'}, 
    ]

    const [active, setActive] = useState(false)

  

    return(
        <>
      
        <div className="letter-pick">
           {letters.map(({letter, id}) => <button key={id} onClick={buttonHandler} className={`letter-btn ${active ? "active" : ""}`}>{letter.toUpperCase()}</button>)}
        </div>
        
        </>
    )
}

export default Hangman;