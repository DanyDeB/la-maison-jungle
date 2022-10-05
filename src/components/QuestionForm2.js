import { useState } from "react";

function QuestionForm2() {
    const [inputValue, setInputValue] = useState('Posez votre question ici')
    return (
        <div>
            <textarea 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
        </div>
    )
}

export default QuestionForm2