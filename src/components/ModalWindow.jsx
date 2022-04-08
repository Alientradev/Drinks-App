import { Modal, Image } from 'react-bootstrap'
import useBebidas from '../hooks/useBebidas'

const ModalWindow = () => {

    const { showModal,handleModalClick, receta, cargando } = useBebidas()
    const { strDrinkThumb, strDrink, strInstructions} = receta

    const mostrarIngredientes = () => {
        let ingredientes = []

        for(let i = 1; i < 16; i++){
            if( receta[`strIngredient${i}`] ){
                ingredientes.push(
                    <li>
                        {receta[`strIngredient${i}`] } - {receta[`strMeasure${i}`] }
                    </li>
                )
            }
        }
        return ingredientes
    }

    return (
        !cargando && (
            <Modal show={showModal} onHide={handleModalClick}>
                <Image
                src={strDrinkThumb}
                alt={`Imagen de ${strDrink}`}
                />
                <Modal.Header>
                    <Modal.Title>{strDrink}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <h2>Ingredients</h2>
                        {mostrarIngredientes()}
                        <h2>Instructions</h2>
                        <p>{strInstructions}</p>
                    </div>
                </Modal.Body>
            </Modal>
        )    
    )
}

export default ModalWindow