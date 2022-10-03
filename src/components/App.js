import logo from '../assets/logo.png'

import Banner from './Banner';
import Cart from './Cart';
import ShoppingList from './ShoppingList';
import handleSubmit from './handleSubmit';

function App() {
    return (
        <div>
            <Banner>
                <img src={logo} alt='La maison jungle' />
                <h1 className='lmj-title'>La maison jungle</h1>
            </Banner>
            <form onSubmit={handleSubmit}>
                <input type="text" name='my_input' defaultValue='Tapez votre texte' />
                <button type='submit'>Entrer</button>
            </form>
            {/* <Cart /> */}
            <ShoppingList />
        </div>
    )
}


export default App;

<div>
Banner/

<Cart />
<ShoppingList />
</div>
