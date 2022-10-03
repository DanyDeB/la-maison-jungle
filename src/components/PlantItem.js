import CareScale from "./CareScale"
import '../styles/PlantItem.css'

function PlantItem({ id, cover, name, water, light}) {
    return (
        <li key={id} className='lmj-plant-item' onClick={handleClick(name)}>
            <img src={cover} alt={`${name} cover`} className="lmj-plant-item-cover" />
            {name}
            <div>
                <CareScale careType='water' scaleValue={water}></CareScale>
                <CareScale careType='light' scaleValue={light}></CareScale>
            </div>
        </li>
    )
}

function handleClick() {
    console.log('Clique recu avec succès')
}

export default PlantItem