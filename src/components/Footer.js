import { useState } from "react";
import '../styles/Footer.css';

function Footer() {
    const [inputValue, setInputValue] = useState('')

    function handleInput(e) {
        setInputValue(e.target.value)
    }

    function handleBlur() {
        if (!inputValue.includes('@')) {
            alert("Attention, il n'y a pas d'@, ceci n'est pas une adresse mail")
        }
    }

    return (
        <footer className="lmj-footer">
            <div className="lmj-footer-elem">
                Pour les passioné-e-s de plantes
            </div>
            <div className="lmj-footer-elem">Laissez-nous votre email</div>
            <input 
                placeholder="Entrez votre mail"
                onChange={handleInput}
                value={inputValue}
                onBlur={handleBlur} // focus du clavier sur l'élément courant
            />
        </footer>
    )
}

export default Footer