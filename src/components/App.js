import { useState } from 'react';

import logo from '../assets/logo.png'

import Banner from './Banner';
import Cart from './Cart';
import ShoppingList from './ShoppingList';
import QuestionForm from './QuestionForm';
import QuestionForm2 from './QuestionForm2';
import Footer from './Footer';

function App() {
    const [cart, updateCart] = useState([])
    
    return (
        <div>
            <Banner>
                <img src={logo} alt='La maison jungle' />
                <h1 className='lmj-title'>La maison jungle</h1>
            </Banner>
            {/* <QuestionForm /> */}
            <QuestionForm2 />
            <Cart 
                cart={cart} 
                updateCart={updateCart} 
            />
            <ShoppingList 
                cart={cart} 
                updateCart={updateCart} 
            />
            <Footer />
        </div>
    )
}


export default App;

<div>
Banner/

<Cart />
<ShoppingList />
</div>
