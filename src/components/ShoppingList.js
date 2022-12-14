import { plantList } from "../datas/plantList"

import '../styles/ShoppingList.css'
import PlantItem from "./PlantItem"

function ShoppingList({ cart, updateCart }) {
    const categories = plantList.reduce(
        (acc, elem) =>
            acc.includes(elem.category) ? acc : acc.concat(elem.category),
        // if category in acc array, return acc array
        // else return acc array + category (new category)
            []
    )

    function addToCart(name, price) {
        const currentPlantAdded = cart.find((plant) => plant.name === name)
        if (currentPlantAdded) {
            const cartFilteredCurrentPlant = cart.filter(
                (plant) => plant.name !== name
            )
            updateCart([
                ...cartFilteredCurrentPlant,
                {name, price, amount: currentPlantAdded.amount + 1}
            ])
        } else {
            updateCart([...cart, {name, price, amount: 1}])
        }
    }

    return (
        <div>
            <ul>
                {categories.map((cat) => (
                    <li key={cat}>{cat}</li>
                ))}
            </ul>
            <ul className='lmj-plant-list'>
                {plantList.map(({id, cover, name, water, light, price}) => (
                    <div key={id}>
                        <PlantItem
                            cover={cover}
                            name={name}
                            water={water}
                            light={light}
                        />
                        <button
                            onClick={() => addToCart(name, price)}
                        >
                            Ajouter
                        </button>
                    </div>
                ))}
            </ul>
        </div>
    )
}

export default ShoppingList