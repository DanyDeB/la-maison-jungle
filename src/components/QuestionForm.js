import handleSubmit from "./handleSubmit"

function QuestionForm() {
    return (
    <form onSubmit={handleSubmit}>
        <input type="text" name='my_input' defaultValue='Tapez votre texte' />
        <button type='submit'>Entrer</button>
    </form>
    )
}


export default QuestionForm