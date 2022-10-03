import logo from '../assets/logo.png'

import Banner from './Banner';
import Cart from './Cart';
import ShoppingList from './ShoppingList';
import QuestionForm from './QuestionForm';
import QuestionForm2 from './QuestionForm2';

function App() {
    return (
        <div>
            <Banner>
                <img src={logo} alt='La maison jungle' />
                <h1 className='lmj-title'>La maison jungle</h1>
            </Banner>
            <QuestionForm2 />
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
