import '../styles/Cart.css'

function Cart() {
const calatheaPrice = 8
const lyrataPrice = 10
const monsteraPrice = 15
    return (
        <div className="lmj-cart">
            <h2>Panier</h2>
            <ul>
                <li>Calathea : { calatheaPrice }€</li>
                <li>Lyrata : { lyrataPrice }€</li>
                <li>Monstera : { monsteraPrice }€</li>
            </ul>
            Total : { calatheaPrice + lyrataPrice + monsteraPrice }€
        </div>
    )
    }

export default Cart