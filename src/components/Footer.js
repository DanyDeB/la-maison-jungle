import { useState } from "react";
import '../styles/Footer.css';

function Footer() {
    const [inputValue, setInputValue] = useState('adresse email')

    return (
        <footer className="lmj-footer">
            <div className="lmj-footer-elem">
                Pour les passioné-e-s de plantes
            </div>
            <div className="lmj-footer-elem">
                Laissez-nous votre mail :
            </div>
        </footer>
    )
}

export default Footer